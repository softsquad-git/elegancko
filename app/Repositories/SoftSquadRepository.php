<?php

namespace App\Repositories;

class SoftSquadRepository
{
    /**
     * @return mixed
     */
    public function query()
    {
        return call_user_func(static::MODEL.'::query');
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function find(int $id)
    {
        return $this->query()->find($id);
    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this->query()->get();
    }

    /**
     * @param int $count
     * @return mixed
     */
    public function paginate(int $count)
    {
        return $this->query()->paginate($count);
    }
}
