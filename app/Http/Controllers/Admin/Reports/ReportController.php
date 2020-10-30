<?php

namespace App\Http\Controllers\Admin\Reports;

use App\Http\Controllers\Controller;
use App\Repositories\Admin\Reports\ReportRepository;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Exception;

class ReportController extends Controller
{
    /**
     * @var ReportRepository
     */
    private $reportRepository;

    /**
     * @param ReportRepository $reportRepository
     */
    public function __construct(ReportRepository $reportRepository)
    {
        $this->reportRepository = $reportRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function reportUsers(Request $request): JsonResponse
    {
        try {
            $data = $this->reportRepository->reportUsers();
            return response()->json($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function reportOrders(Request $request): JsonResponse
    {
        try {
            $data = $this->reportRepository->reportOrders();
            return response()->json($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function reportMessages(Request $request): JsonResponse
    {
        try {
            $data = $this->reportRepository->reportMessages();
            return response()->json($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
