<?php

namespace App\Http\Requests\Meta;

use Illuminate\Foundation\Http\FormRequest;

class MetaRequest extends FormRequest
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
        return [
            'resource_id' => 'nullable|integer',
            'resource_type' => 'nullable|string',
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:160',
            'keywords' => 'nullable|string|max:255',
            'locale' => 'required|string|min:2'
        ];
    }
}
