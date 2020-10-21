<?php

namespace App\Mail\Settings;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChangeEmailMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var array
     */
    public $data;

    /**
     * ChangeEmailMail constructor.
     * @param array $data
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.settings.change_email');
    }
}
