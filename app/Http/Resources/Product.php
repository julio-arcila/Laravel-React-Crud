<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'reference' => $this->reference,
            'price' => $this->price,
            'weight' => $this->weight,
            'category' => $this->category,
            'stock' => $this->stock,
            'creation_date' => $this->creation_date,
            'last_sale_date' => $this->last_sale_date,
            'description' => $this->description,
            'img' => $this->img,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
