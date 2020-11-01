<?php

namespace App\Repositories\Meta;

use App\Services\Meta\MetaService;
use \Exception;
use App\Models\Meta;
use Illuminate\Support\Facades\App;

class MetaRepository
{
    /**
     * @return mixed
     */
    public function findAll()
    {
        $params = [
            MetaService::RESOURCE_BASKET,
            MetaService::RESOURCE_FORGOT_PASSWORD,
            MetaService::RESOURCE_REGISTER,
            MetaService::RESOURCE_LOGIN,
            MetaService::RESOURCE_CONTACT,
            MetaService::RESOURCE_PRODUCTS,
            MetaService::RESOURCE_CATEGORIES,
            MetaService::RESOURCE_HOME
        ];
        return Meta::whereIn('resource_type', $params)
            ->orderBy('id', config('app.df.ordering'))
            ->get();
    }

    /**
     * @param int $metaId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $metaId)
    {
        $item = Meta::find($metaId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }

    /**
     * @param string $type
     * @return Meta
     */
    public function findByType(string $type): Meta
    {
        return Meta::where([
            'resource_type' => $type,
            'locale' => App::getLocale()
        ])->first();
    }
}
