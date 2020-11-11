<?php

namespace App\Http\Requests\Categories;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
        if ($this->segment(4) == 'update')
            $data['alias'] = 'required|string';
        else
            $data['alias'] = 'required|string|unique:categories';
        $data['parent_id'] = 'nullable|integer';
        $data['position'] = 'required|integer';
        $data['is_active'] = 'required|integer';
        $data['locale'] = 'required|string|min:2';

        return $data;
    }
}
