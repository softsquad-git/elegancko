<?php

namespace App\Http\Controllers\Admin\Meta;

use App\Http\Controllers\Controller;
use App\Http\Resources\Meta\AdminMetaResource;
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

    public function index()
    {
        try {
            $data = $this->metaRepository->findAll();
            return AdminMetaResource::collection($data);
        } catch (Exception $e) {
            return $this->errorResponse($e);
        }
    }
}
