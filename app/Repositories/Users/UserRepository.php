<?php

namespace App\Repositories\Users;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use \Exception;

class UserRepository
{
    /**
     * @param array $params
     * @return mixed
     */
    public function findAll(array $params)
    {
        $name = $params['name'];
        $email = $params['email'];
        $activated = $params['is_activated'];
        $data = User::orderBy('id', $params['ordering'] ?? config('app.df.ordering'));
        if (!empty($name))
            $data->where(DB::raw("CONCAT(`name`, ' ', `last_name`)"), 'LIKE', "%" . $name . "%");
        if (!empty($email))
            $data->where('email', $email);
        if (!empty($activated))
            $data->where('is_activated', $activated);
        return $data->paginate($params['pagination'] ?? config('app.df.pagination'));
    }

    /**
     * @param int $userId
     * @return mixed
     * @throws Exception
     */
    public function findById(int $userId)
    {
        $item = User::find($userId);
        if (empty($item))
            throw new Exception(trans('exceptions.no_found'));
        return $item;
    }
}
