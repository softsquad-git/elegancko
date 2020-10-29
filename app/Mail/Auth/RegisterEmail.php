<?php

namespace App\Mail\Auth;

use App\Models\VerifyKey;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegisterEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var VerifyKey $item
     */
    public $item;

    /**
     * @param VerifyKey $verifyKey
     */
    public function __construct(VerifyKey $verifyKey)
    {
        $this->item = $verifyKey;
    }

    /**
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.verify.register');
    }
}
