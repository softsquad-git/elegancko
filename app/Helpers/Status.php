<?php

namespace App\Helpers;

class Status
{
    const STATUS_ON = 1;
    const STATUS_OFF = 0;

    /**
     * @param int $type
     * @return string
     */
    public static function checkTypeProduct(int $type): string
    {
        $strType = '';
        switch ($type):
            case 1:
                $strType = 'standard';
                break;
            case 2:
                $strType = 'promotion';
                break;
            case 3:
                $strType = 'new';
                break;
            case 4:
                $strType = 'new_promotion';
                break;
        endswitch;
        return $strType;
    }
}
