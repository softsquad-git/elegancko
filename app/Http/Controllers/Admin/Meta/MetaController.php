<?php

namespace App\Http\Controllers\Admin\Meta;

use App\Http\Controllers\Controller;
use App\Http\Requests\Meta\MetaRequest;
use App\Http\Resources\Meta\AdminMetaResource;
use App\Interfaces\MetaInterface;
use App\Repositories\Meta\MetaRepository;
use Illuminate\Http\JsonResponse;
use \Exception;
use \Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class MetaController extends Controller
{
    /**
     * @var MetaRepository
     */
    private $metaRepository;

    /**
     * @var MetaInterface
     */
    private $metaInterface;

    /**
     * @param MetaRepository $metaRepository
     * @param MetaInterface $metaInterface
     */
    public function __construct(MetaRepository $metaRepository, MetaInterface $metaInterface)
    {
        $this->metaRepository = $metaRepository;
        $this->metaInterface = $metaInterface;
    }

    /**
     * @return JsonResponse|AnonymousResourceCollection
     */
    public function index()
    {
        try {
            $data = $this->metaRepository->findAll();
            return AdminMetaResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $metaId
     * @return AdminMetaResource|JsonResponse
     */
    public function findById(int $metaId)
    {
        try {
            $item = $this->metaRepository->findById($metaId);
            return new AdminMetaResource($item);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param MetaRequest $request
     * @return JsonResponse
     */
    public function create(MetaRequest $request): JsonResponse
    {
        try {
            $data = $request->all();
            $this->metaInterface
                ->setTitle($data['title'])
                ->setKeywords($data['keywords'])
                ->setDesc($data['description'])
                ->setLocale($data['locale'])
                ->setResourceType($data['resource_type'])
                ->saveMeta();
            return $this->successResponse(trans('messages.created'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param MetaRequest $request
     * @param int $metaId
     * @return JsonResponse
     */
    public function update(MetaRequest $request, int $metaId): JsonResponse
    {
        try {
            $data = $request->all();
            $item = $this->metaRepository->findById($metaId);
            $this->metaInterface
                ->setTitle($data['title'])
                ->setLocale($data['locale'])
                ->setDesc($data['description'])
                ->setKeywords($data['keywords'])
                ->updateMeta($item);
            return $this->successResponse(trans('messages.updated'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }

    /**
     * @param int $metaId
     * @return JsonResponse
     */
    public function remove(int $metaId): JsonResponse
    {
        try {
            $item = $this->metaRepository->findById($metaId);
            $this->metaInterface->removeMeta($item);
            return $this->successResponse(trans('messages.removed'));
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
