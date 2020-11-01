<?php

namespace App\Http\Resources\Meta;

use App\Helpers\Images;
use App\Services\Meta\MetaService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class AdminMetaResource extends JsonResource
{
    /**
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['locale'] = Images::getLocaleFlag($this->locale);
        $data['resource'] = [
            'key' => $this->resource_type,
            'name' => $this->checkResource($this->resource_type)
        ];
        return $data;
    }

    /**
     * @param string $resourceType
     * @return string|null
     */
    private function checkResource(string $resourceType): ?string
    {
        $resourceTypeName = null;
        switch ($resourceType):
            case MetaService::RESOURCE_PRODUCTS:
                $resourceTypeName = 'Strona produktów';
                break;
            case MetaService::RESOURCE_CATEGORIES:
                $resourceTypeName = 'Strona kategorii';
                break;
            case MetaService::RESOURCE_CONTACT:
                $resourceTypeName = 'Kontakt';
                break;
            case MetaService::RESOURCE_HOME:
                $resourceTypeName = 'Strona główna';
                break;
            case MetaService::RESOURCE_REGISTER:
                $resourceTypeName = 'Strona rejestracji';
                break;
            case MetaService::RESOURCE_LOGIN:
                $resourceTypeName = 'Strona logowania';
                break;
            case MetaService::RESOURCE_FORGOT_PASSWORD:
                $resourceTypeName = 'Przypomnij hasło';
                break;
            case MetaService::RESOURCE_BASKET:
                $resourceTypeName = 'Koszyk';
                break;
        endswitch;

        return $resourceTypeName;
    }
}
