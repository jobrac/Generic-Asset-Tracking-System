<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use App\Helpers\Helper;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        // Handle Ajax requests that fail because the model doesn't exist
        if ($request->ajax() || $request->wantsJson()) {

            if ($exception instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                $className = last(explode('\\', $exception->getModel()));
                return response()->json(Helper::formatStandardApiResponse('error', null, $className . ' not found'), 200);
            }

            if ($this->isHttpException($exception)) {

                $statusCode = $exception->getStatusCode();

                switch ($exception->getStatusCode()) {
                    case '404':
                       return response()->json(Helper::formatStandardApiResponse('error', null, $statusCode . ' endpoint not found'), 404);
                    case '405':
                        return response()->json(Helper::formatStandardApiResponse('error', null, 'Method not allowed'), 405);
                    default:
                        return response()->json(Helper::formatStandardApiResponse('error', null, $statusCode), 405);

                }
            }
        }


        if ($this->isHttpException($exception) && (isset($statusCode)) && ($statusCode == '404' )) {
            return response()->view('layouts/basic', [
                'content' => view('errors/404')
            ],$statusCode);
        }
        return parent::render($request, $exception);
    }
}
