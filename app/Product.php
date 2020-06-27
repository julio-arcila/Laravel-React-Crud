<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'reference', 'price', 'weight', 'category', 'stock', 'creation_date', 'last_sale_date','description','img'
    ];
}
