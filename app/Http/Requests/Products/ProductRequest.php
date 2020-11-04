<?php

namespace App\Http\Requests\Products;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        return [
            'title' => 'required|string|min:3',
            'category_id' => 'required|integer',
            'locale' => 'required|string|min:2',
            'type' => 'required|integer',
            'description' => 'nullable|string',
            'content' => 'nullable|string',
            'is_activated' => 'nullable'
        ];
    }
}
