<?php

namespace App\Http\Controllers\Messages;

use App\Http\Controllers\Controller;
use App\Http\Requests\Messages\MessageRequest;
use App\Services\Messages\MessageService;
use Illuminate\Http\JsonResponse;
use \Exception;

class MessageController extends Controller
{
    /**
     * @var MessageService
     */
    private $messageService;

    /**
     * @param MessageService $messageService
     */
    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    /**
     * @param MessageRequest $request
     * @return JsonResponse
     * @throws Exception
     */
    public function create(MessageRequest $request): JsonResponse
    {
        try {
            $this->messageService->create($request->all());
            return $this->successResponse(trans('messages.message_success'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
