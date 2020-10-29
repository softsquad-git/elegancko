<?php

namespace App\Services\Payments;

class PaymentPayUService extends PayUService
{
    public const PLN = 'PLN';

    public const GBP = 'GBP';

    /**
     * @var string
     */
    private $description;

    /**
     * @var string
     */
    private $currency;

    /**
     * @var int
     */
    private $totalAmount;

    /**
     * @var string
     */
    private $buyerEmail;

    /**
     * @var string
     */
    private $buyerPhone;

    /**
     * @var string
     */
    private $buyerFirstName;

    /**
     * @var string
     */
    private $buyerLastName;

    /**
     * @var array
     */
    private $products;

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     * @return $this
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCurrency()
    {
        return $this->currency;
    }

    /**
     * @param mixed $currency
     * @return $this
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTotalAmount()
    {
        return $this->totalAmount;
    }

    /**
     * @param mixed $totalAmount
     * @return $this
     */
    public function setTotalAmount($totalAmount)
    {
        $this->totalAmount = $totalAmount;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBuyerEmail()
    {
        return $this->buyerEmail;
    }

    /**
     * @param mixed $buyerEmail
     * @return $this
     */
    public function setBuyerEmail($buyerEmail)
    {
        $this->buyerEmail = $buyerEmail;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBuyerPhone()
    {
        return $this->buyerPhone;
    }

    /**
     * @param mixed $buyerPhone
     * @return $this
     */
    public function setBuyerPhone($buyerPhone)
    {
        $this->buyerPhone = $buyerPhone;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBuyerFirstName()
    {
        return $this->buyerFirstName;
    }

    /**
     * @param mixed $buyerFirstName
     * @return $this
     */
    public function setBuyerFirstName($buyerFirstName)
    {
        $this->buyerFirstName = $buyerFirstName;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getBuyerLastName()
    {
        return $this->buyerLastName;
    }

    /**
     * @param mixed $buyerLastName
     * @return $this
     */
    public function setBuyerLastName($buyerLastName)
    {
        $this->buyerLastName = $buyerLastName;

        return $this;
    }

    /**
     * @return array
     */
    public function getProducts(): array
    {
        return $this->products;
    }

    /**
     * @param array $products
     */
    public function setProducts(array $products): void
    {
        $this->products = $products;
    }

    public function pay()
    {
        $totalAmount = $this->getTotalAmount() * 100;
        $this->setCurrency($this->checkCurrent());
        $token = 'd9a4536e-62ba-4f60-8017-6053211d3f47';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->sandboxUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "{
        \"notifyUrl\": \"https://your.eshop.com/notify\",
        \"customerIp\": \"127.0.0.1\",
        \"merchantPosId\": \"300746\",
        \"description\": \"$this->description\",
        \"currencyCode\": \"$this->currency\",
        \"totalAmount\": \"$totalAmount\",
        \"products\": [
    {
      \"name\": \"Wireless mouse\",
      \"unitPrice\": \"15000\",
      \"quantity\": \"1\"
    },
    {
      \"name\": \"HDMI cable\",
      \"unitPrice\": \"6000\",
      \"quantity\": \"1\"
    }
  ]
}");

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Content-Type: application/json",
            "Authorization: Bearer $token"
        ));

        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
}
