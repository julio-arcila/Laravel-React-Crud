<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProduct extends FormRequest
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
            'name' => 'required',
            'reference' => 'required',
            'price' => 'required',
            'weight' => 'required',
            'category' => 'required',
            'stock' => 'required',
            'creation_date' => 'required',
            'last_sale_date' => 'required'
        ];
    }
}
