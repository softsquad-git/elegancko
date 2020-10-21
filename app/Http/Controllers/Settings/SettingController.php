<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\BasicSettingRequest;
use App\Http\Requests\Settings\EmailRequest;
use App\Http\Requests\Settings\PasswordRequest;
use App\Http\Requests\Settings\SaveNewEmailRequest;
use App\Repositories\Settings\SettingRepository;
use App\Services\Settings\SettingService;
use Illuminate\Http\JsonResponse;
use \Exception;
use Symfony\Component\HttpFoundation\Request;

class SettingController extends Controller
{
    /**
     * @var SettingService
     */
    private $settingService;

    /**
     * @var SettingRepository
     */
    private $settingRepository;

    /**
     * @param SettingRepository $settingRepository
     * @param SettingService $settingService
     */
    public function __construct(SettingRepository $settingRepository, SettingService $settingService)
    {
        $this->settingRepository = $settingRepository;
        $this->settingService = $settingService;
    }

    /**
     * @param BasicSettingRequest $request
     * @return JsonResponse
     */
    public function basicDataSetting(BasicSettingRequest $request): JsonResponse
    {
        try {
            $this->settingService->basicDataSetting($request->all());
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param EmailRequest $request
     * @return JsonResponse
     */
    public function emailSetting(EmailRequest $request): JsonResponse
    {
        try {
            $this->settingService->emailSetting($request->all());
            return $this->successResponse(trans('messages.send_new_email_key'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param SaveNewEmailRequest $request
     * @return JsonResponse
     */
    public function saveNewEmail(SaveNewEmailRequest $request): JsonResponse
    {
        try {
            $this->settingService->saveNewEmail($request->all());
            return $this->successResponse(trans('messages.email_updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function checkEmailChange(Request $request): JsonResponse
    {
        try {
            $item = $this->settingRepository->checkChangeEmail($request->get('user_id') ?? null);
            return response()->json([
                'status' => $item
            ]);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function removeChangeEmailKey(Request $request): JsonResponse
    {
        try {
            $this->settingService->removeChangeEmailKey($request->get('user_id') ?? null);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param PasswordRequest $request
     * @return JsonResponse
     */
    public function passwordSetting(PasswordRequest $request): JsonResponse
    {
        try {
            $this->settingService->passwordSetting($request->all());
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
