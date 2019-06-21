<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    /**
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request) {

        $validation = $request->validate(
            [
                'username' => 'required|max:25|unique:users|alpha_dash',
                'email' => 'email|required|unique:users',
                'password' => 'required|confirmed',
                'student_id' => 'required|unique:users'
            ]
        );

        $validation['password'] = bcrypt($request->password);

        $user = User::create($validation);

        $accessToken = $user->createToken('authUserToken')->accessToken;

        return response(
            [
                'message' => 'You\'ve successfully registered!',
                'user' => $user,
                'access_token' => $accessToken,
            ]
        );
    }

    /**
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function login(Request $request) {
        $loginData = $request->validate(
            [
                'username' => 'required',
                'password' => 'required',
            ]
        );

        if(!auth()->attempt($loginData)) {
            return response(
                [
                    'credential' => false,
                    'message' => 'Invalid credentials'
                ]
            );
        }

        $accessToken = auth()->user()->createToken('authUserToken')->accessToken;

        return response(
            [
                'credential' => true,
                'username' => auth()->user(),
                'access_token' => $accessToken
            ]
        );
    }
}
