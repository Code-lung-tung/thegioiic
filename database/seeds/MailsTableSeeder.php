<?php

use Illuminate\Database\Seeder;

class MailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $form_data = array(
            'driver'            =>   'smtp',
            'host'              =>   'smtp.gmail.com',
            'port'              =>   587,
            'from_address'      =>   'linhkieniotvn@gmail.com',
            'from_name'         =>   'Linhkineiot',
            'encryption'        =>   'tls',
            'username'          =>   'linhkieniotvn@gmail.com',
            'password'          =>   'fabpozceiqwfygde'
        );
        DB::table('mails')->insert($form_data);
    }
}
