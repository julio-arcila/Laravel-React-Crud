<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;


$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'reference' => $faker->numberBetween($min = 1234561054, $max = 9999999999),
        'price' => $faker->numberBetween($min = 123456, $max = 9999999),
        'weight' => $faker->numberBetween($min = 1, $max = 100),
        'category' => $faker->word,
        'stock' => $faker->numberBetween($min = 0, $max = 99),
        'creation_date' => '2019-02-01',
        'last_sale_date' => '2019-06-01',
        'description' => $faker->text($maxNbChars = 80),
        'img' => 'http://placeimg.com/640/480/tech'
    ];
});

