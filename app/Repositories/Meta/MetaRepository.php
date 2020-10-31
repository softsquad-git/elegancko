<?php

namespace App\Repositories\Meta;

use \Exception;
use App\Models\Meta;
use Illuminate\Support\Facades\App;

class MetaRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        return Meta::orderBy('id', $params['ordering'] ?? config('app.df.ordering'))
            ->paginate($params['pagination'] ?? config('app.df.pagination'));
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
