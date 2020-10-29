<?php

namespace App\Services\Payments;

use Illuminate\Support\Facades\App;

class PayUService
{

    protected $currentPLN = 'PLN';

    protected $currentGBP = 'GBP';
    /**
     * @var string
     */
    private $token;

    /**
     * @var string
     */
    private $expires;

    /**
     * @var bool
     */
    private $sandbox = true;

    /**
     * @var string
     */
    protected $sandboxTokenUrl = 'https://secure.snd.payu.com/pl/standard/user/oauth/authorize';
    //private $productionTokenUrl = 'https://secure.payu.com/pl/standard/user/oauth/authorize';

    /**
     * @var string
     */
    protected $sandboxUrl = 'https://secure.snd.payu.com/api/v2_1/orders';

    //private $productionUrl = 'https://secure.payu.com/api/v2_1/orders';

    protected function getToken()
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://secure.payu.com/pl/standard/user/oauth/authorize');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, 'grant_type=client_credentials&client_id=145227&client_secret=12f071174cb7eb79d4aac5bc2f07563f');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Content-Type: application/x-www-form-urlencoded"
        ]);
        $response = curl_exec($ch);
        curl_close($ch);
        $response = json_decode($response);
        return $response->access_token;
    }

    /**
     * @return string|null
     */
    protected function checkCurrent(): ?string
    {
        $current = null;
        switch (App::getLocale()):
            case 'pl':
                $current = $this->currentPLN;
                break;
            case 'en':
                $current = $this->currentGBP;
                break;
        endswitch;
        return $current;
    }
}
