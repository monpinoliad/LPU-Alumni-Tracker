<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use JWTAuth;

class AuthController extends Controller
{

//    /**
//     * @param Request $request
//     *
//     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
//     *
//     * @throws \Illuminate\Validation\ValidationException
//     */
//    public function register(Request $request) {
//
//        $validation = $request->validate(
//            [
//                'username' => 'required|max:25|unique:users|alpha_dash',
//                'email' => 'email|required|unique:users',
//                'password' => 'required|confirmed',
//                'student_id' => 'required|unique:users'
//            ]
//        );
//
//        $validation['password'] = bcrypt($request->password);
//
//        $user = User::create($validation);
//
//        $accessToken = $user->createToken('authUserToken')->accessToken;
//
//        return response(
//            [
//                'message' => 'You\'ve successfully registered!',
//                'user' => $user,
//                'access_token' => $accessToken,
//            ]
//        );
//    }
//
//    /**
//     * @param Request $request
//     *
//     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
//     */
//    public function login(Request $request) {
//        $loginData = $request->validate(
//            [
//                'username' => 'required',
//                'password' => 'required',
//            ]
//        );
//
//        if(!auth()->attempt($loginData)) {
//            return response(
//                [
//                    'credential' => false,
//                    'message' => 'Invalid credentials'
//                ]
//            );
//        }
//
//        $accessToken = auth()->user()->createToken('authUserToken')->accessToken;
//
//        return response(
//            [
//                'credential' => true,
//                'username' => auth()->user(),
//                'access_token' => $accessToken
//            ]
//        );
//    }
//
//    public function profile(Request $request) {
//        auth()->validate($request);
//    }

    public function register(Request $request) {
        $validation = Validator::make($request->json()->all(),
            [
                'username' => 'required|string|min:6|max:25|unique:users|alpha_dash',
                'email' => 'email|string|required|unique:users',
                'password' => 'required|string|min:6|confirmed',
                'student_id' => 'required|string|unique:users|max:20'
            ]
        );

        if($validation->fails()) {
            return response()->json($validation->errors()->toJson(), 400);
        }

        $user = User::create(
            [
                'username' => $request->json()->get('username'),
                'email' => $request->json()->get('email'),
                'password' => bcrypt($request->json()->get('password')),
                'student_id' => $request->json()->get('student_id'),
            ]
        );

        //$user = User::create($validation);

        $accessToken = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'accessToken'), 201);
    }

    public function login(Request $request) {
        $credentials = $request->json()->all();

        try {
            if(! $accessToken = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid Credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        return response()->json(compact('accessToken'));
    }

    public function authenticatedUser() {
        try {
            if(! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['User not found'], 404);
            }
        } catch(TokenExpiredException $e) {
            return response()->json(['Token Expired'], $e->getStatusCode());
        } catch(TokenInvalidException $e) {
            return response()->json(['Token Invalid'], $e->getStatusCode());
        } catch(JWTException $e) {
            return response()->json(['Token Absent'], $e->getStatusCode());
        }

        return response()->json(compact('user'));
    }
}
