<?php

namespace App\Services;

use App\Helpers\Logs;
use Illuminate\Database\Eloquent\Model;
use \Exception;

class SoftSquadService
{
    /**
     * @param Model $model
     * @param array $data
     * @return bool
     */
    public function update(Model $model, array $data)
    {
        try {
            $model->update($data);
            return true;
        } catch (Exception $e) {
            return Logs::save($e);
        }
    }

    /**
     * @param Model $model
     * @return bool|void
     */
    public function delete(Model $model): ?bool
    {
        try {
            $model->delete();
            return true;
        } catch (Exception $e) {
            return Logs::save($e);
        }
    }
}
