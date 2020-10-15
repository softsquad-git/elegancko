<?php

namespace App\Http\Controllers\Admin\Users;

use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UserResource;
use App\Repositories\Users\UserRepository;
use Illuminate\Http\Request;
use \Exception;
use \Illuminate\Http\JsonResponse;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param Request $request
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $params = [
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'is_activated' => $request->get('is_activated'),
            'ordering' => $request->get('ordering'),
            'pagination' => $request->get('pagination')
        ];
        try {
            $data = $this->userRepository->findAll($params);
            return UserResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $userId
     * @return UserResource|JsonResponse
     */
    public function findById(int $userId)
    {
        try {
            $item = $this->userRepository->findById($userId);
            return new UserResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
