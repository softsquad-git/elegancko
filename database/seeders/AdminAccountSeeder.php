<?php

namespace Database\Seeders;

use App\Interfaces\MailInterface;
use App\Mail\Admin\CreateAccountMail;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AdminAccountSeeder extends Seeder
{
    /**
     * @var MailInterface
     */
    private $mailInterface;

    /**
     * @param MailInterface $mailInterface
     */
    public function __construct(MailInterface $mailInterface)
    {
        $this->mailInterface = $mailInterface;
    }


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => config('app.admin.name'),
            'last_name' => config('app.admin.last_name'),
            'email' => config('app.admin.email'),
            'password' => Hash::make(config('app.admin.password')),
            'role' => config('app.users.roles.admin')
        ]);
        $this->mailInterface
            ->setToEmail(config('app.admin.email'))
            ->setSubject('Aktywacja konta administratora')
            ->setTemplate('admin.created')
            ->setBody([
                'name' => $user->getFullName()
            ])
            ->send();
    }
}
