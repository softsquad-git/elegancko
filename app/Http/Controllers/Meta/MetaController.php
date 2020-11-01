<?php

namespace App\Http\Controllers\Meta;

use App\Http\Controllers\Controller;
use App\Http\Resources\Meta\MetaResource;
use App\Repositories\Meta\MetaRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use \Exception;

class MetaController extends Controller
{
    /**
     * @var MetaRepository
     */
    private $metaRepository;

    /**
     * @param MetaRepository $metaRepository
     */
    public function __construct(MetaRepository $metaRepository)
    {
        $this->metaRepository = $metaRepository;
    }

    /**
     * @param Request $request
     * @return MetaResource|JsonResponse
     */
    public function findByType(Request $request)
    {
        try {
            return new MetaResource(
                $this->metaRepository->findByType($request->get('resource_type'))
            );
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
