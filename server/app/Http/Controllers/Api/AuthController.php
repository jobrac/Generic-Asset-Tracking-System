<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Status;
use App\Helpers\Token;
use App\Helpers\Helper;
use JWTAuth;

class AuthController extends Controller{

    public function login(Request $request){

    	$credentials = $request->only('username', 'password');

    	if (Auth::attempt($credentials)) {

            // dd(Token::create());
            return response()->json([
                'token' => Token::create(),
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]);

        }

        return response()->json(Helper::formatStandardApiResponse('error', null, "Credentials not found"), 401);
    }

    public function refresh(){

        try {
            JWTAuth::parseToken()->authenticate();
        }catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json([
                'token' => Token::refresh(),
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]);
        }catch (\Tymon\JWTAuth\Exceptions\TokenBlacklistedException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token invalid"), 400);
        }catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token invalid"), 400);
        }catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token not found"), 400);
        }


        return response()->json([
                'token' => Token::refresh(),
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function check(){
        return [
            'message' => 'Token is valid',
            'payload' => auth()->payload()->toArray(),
        ];
    }

    public function logout(){
        auth()->logout(true);

        return [
            'message' => 'Successfully logout!'
        ];
    }
}
