<?php

namespace App\Interfaces;

interface MailInterface
{
    /**
     * @param string $subject
     * @return $this
     */
    public function setSubject(string $subject);

    /**
     * @param string $toEmail
     * @return $this;
     */
    public function setToEmail(string $toEmail);

    /**
     * @param string $template
     * @return $this
     */
    public function setTemplate(string $template);

    /**
     * @param array $body
     */
    public function setBody(array $body);

    /**
     * @return mixed
     */
    public function send();
}
