<?php

namespace App\Http\Requests\Orders;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        $data = [];
        $data['name'] = 'required|string|min:3';
        $data['last_name'] = 'required|string|min:3';
        $data['email'] = 'required|email';
        $data['city'] = 'required|string|min:3';
        $data['post_code'] = 'required|string|min:3';
        $data['address'] = 'required|string|min:3';
        $data['country'] = 'required|string|min:3';
        $data['type'] = 'required|integer';
        if ($this->get('type') == 2) {
            $data['nip'] = 'required';
            $data['company_name'] = 'required|string';
        }
        $data['number_phone'] = 'required|string';
        $data['comments'] = 'nullable|string';
        $data['shipment_id'] = 'required';

        return $data;
    }
}
