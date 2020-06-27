<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('users')->delete();

        User::create(array('name' => 'admin', 'email' => 'user1@gmail.com', 'password' => Hash::make('secret1')));
        User::create(array('name' => 'user', 'email' => 'user2@gmail.com', 'password' => Hash::make('secret2')));

       /*  DB::table('users')->insert([
            'name' => 'User1',
            'email' => 'user1@gmail.com',
            //'password' => bcrypt('password'),
             'password' => 'secret1',
        ]);
        DB::table('users')->insert([
            'name' => 'user2',
            'email' => 'user2@gmail.com',
            //'password' => bcrypt('password'),
             'password' => 'secret2',
        ]); */
    }
}
