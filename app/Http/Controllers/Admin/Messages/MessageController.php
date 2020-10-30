<?php

namespace App\Http\Controllers\Admin\Messages;

use App\Http\Controllers\Controller;
use App\Http\Requests\Messages\MessageRequest;
use App\Http\Resources\Messages\MessagesResource;
use App\Repositories\Messages\MessageRepository;
use App\Services\Messages\MessageService;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use \Illuminate\Http\JsonResponse;

class MessageController extends Controller
{
    /**
     * @var MessageService
     */
    private $messageService;

    /**
     * @var MessageRepository
     */
    private $messageRepository;

    /**
     * @param MessageRepository $messageRepository
     * @param MessageService $messageService
     */
    public function __construct(MessageRepository $messageRepository, MessageService $messageService)
    {
        $this->messageRepository = $messageRepository;
        $this->messageService = $messageService;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'email' => $request->get('email'),
            'is_reading' => $request->get('is_reading'),
            'name' => $request->get('name'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination')
        ];
        try {
            $data = $this->messageRepository->findAll($params);
            return MessagesResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $messageId
     * @return MessagesResource|JsonResponse
     */
    public function findById(int $messageId)
    {
        try {
            $item = $this->messageRepository->findById($messageId);
            return new MessagesResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param MessageRequest $request
     * @return JsonResponse
     */
    public function create(MessageRequest $request): JsonResponse
    {
        try {
            $this->messageService->create($request->all());
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $messageId
     * @return JsonResponse
     */
    public function isReading(int $messageId): JsonResponse
    {
        try {
            $this->messageService->isReading($messageId);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $messageId
     * @return JsonResponse
     */
    public function remove(int $messageId): JsonResponse
    {
        try {
            $this->messageService->remove($messageId);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
