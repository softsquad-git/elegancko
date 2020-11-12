<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\Auth\AuthService;
use \Exception;
use \Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @var AuthService
     */
    private $authService;

    /**
     * @param AuthService $authService
     */
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    /**
     * @param RegisterRequest $request
     * @return JsonResponse
     */
    public function register(RegisterRequest $request): JsonResponse
    {
        try {
            $this->authService->register($request->all());
            return $this->successResponse(trans('messages.created'), config('app.HTTP.CREATED'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = $request->only(['email', 'password']);
        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized', 'status' => 401], 401);
        }
        return $this->respondWithToken($token);
    }

    /**
     * @param $token
     * @return JsonResponse
     */
    private function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user_id' => Auth::id(),
            'success' => 1,
            'activated' => Auth::user()->is_activated,
            'role' => Auth::user()->role,
            'name' => Auth::user()->name
        ]);
    }

    /**
     * @return JsonResponse
     */
    public function logout(): JsonResponse
    {
        try {
            Auth::guard('api')->logout();
            return $this->successResponse(trans('messages.logout'));
        }catch (Exception $e){
            return $this->errorResponse($e);
        }
    }
}
