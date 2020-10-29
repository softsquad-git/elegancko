<?php

namespace App\Http\Controllers;

use App\Helpers\Status;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param string|null $msg
     * @param int $httpStatus
     * @return JsonResponse
     */
    protected function successResponse(?string $msg, int $httpStatus = 200)
    {
        return response()->json([
            'success' => Status::STATUS_ON,
            'msg' => $msg
        ], $httpStatus);
    }

    /**
     * @param object $e
     * @return JsonResponse
     */
    protected function errorResponse(object $e): JsonResponse
    {
        return response()->json([
            'success' => Status::STATUS_OFF,
            'msg' => $e->getMessage()
        ]);
    }
}
