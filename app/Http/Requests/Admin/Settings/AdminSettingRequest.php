<?php

namespace App\Http\Requests\Admin\Settings;

use Illuminate\Foundation\Http\FormRequest;

class AdminSettingRequest extends FormRequest
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
    public function rules()
    {
        $data = [];
        $data['type_id'] = 'required|integer';
        $data['resource_type'] = 'required|integer';
        if ($this->get('resource_type') == 1)
            $data['value'] = 'required|string';
        else
            $data['value'] = 'required|mimes:jpeg,jpg,png';

        return $data;
    }
}
