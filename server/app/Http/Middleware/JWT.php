<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Status;
use Auth;
use App\Helpers\Helper;

class JWT
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {
            JWTAuth::parseToken()->authenticate();
        }catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token expired"), 401);
        }catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token invalid"), 400);
        }catch (\Tymon\JWTAuth\Exceptions\TokenBlacklistedException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token invalid"), 400);
        }catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(Helper::formatStandardApiResponse('error', null, "Token not found"), 400);
        }catch(\Illuminate\Http\Exceptions\ThrottleRequestsException $e){
            return response()->json(Helper::formatStandardApiResponse('error', null, "Too many request"), 429);
        }
        return $next($request);
    }
}