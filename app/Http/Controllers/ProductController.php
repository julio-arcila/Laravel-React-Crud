<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreProduct;
use App\Http\Resources\Product as ProductResource;
use App\Product;
use App\User;


class ProductController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return  ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProduct $request, User $user)
    {
        $validated = $request->validated();

        $product = Product::create([
            'name' => $request->name,
            'reference' => $request->reference,
            'weight' => $request->weight,
            'price' => $request->price,
            'category' => $request->category,
            'stock' => $request->stock,
            'creation_date' => $request->creation_date,
            'last_sale_date' => $request->last_sale_date,
            'description' => $request->description,
            'img' => 'http://placeimg.com/640/480/tech'
        ]);

        return new ProductResource($product);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProductResource(Product::find($id));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        $product->name = $request->name;
        $product->reference = $request->reference;
        $product->weight = $request->weight;
        $product->price = $request->price;
        $product->category = $request->category;
        $product->stock = $request->stock;
        $product->creation_date = $request->creation_date;
        $product->last_sale_date = $request->last_sale_date;
        $product->description = $request->description;
        $product->img = 'http://placeimg.com/640/480/tech';
        $product->save();
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        //response
        return new ProductResource($product);
    }
}

