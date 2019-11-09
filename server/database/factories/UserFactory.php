<?php

use App\Models\Company;

$password = bcrypt('password');

$permission =[
    'superuser'         =>      0,
    'admin'             =>      0,
    'assets'            => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1,
        'checkin'       =>      1,
        'checkout'      =>      1,
        'requestable'   =>      1
    ],
    'accessories'       => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1,
        'checkin'       =>      1,
        'checkout'      =>      1,
    ],
    'consumables'       => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1,
        'checkin'       =>      1,
        'checkout'      =>      1,
    ],
    'licenses'          => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1,
        'checkout'      =>      1,
        'keys'          =>      1,
    ],
    'components'        => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1,
        'checkin'       =>      1,
        'checkout'      =>      1,
    ],
    'users'             => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'models'             => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'categories'             => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'departments'             => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'status_labels'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'custom_fields'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'suppliers'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'manufacturers'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'depreciations'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'locations'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
    'companies'     => [
        'view'          =>      1,
        'create'        =>      1,
        'edit'          =>      1,
        'delete'        =>      1
    ],
];

$factory->define(App\Models\User::class, function (Faker\Generator $faker) use ($password) {
    return [
        'activated' => 1,
        'address' => $faker->address,
        'city' => $faker->city,
        'company_id' => rand(1,4),
        'country' => $faker->country,
        'department_id' => rand(1,6),
        'email' => $faker->safeEmail,
        'employee_num' => $faker->numberBetween(3500, 35050),
        'first_name' => $faker->firstName,
        'jobtitle' => $faker->jobTitle,
        'last_name' => $faker->lastName,
        'locale' => $faker->locale,
        'location_id' => rand(1,5),
        'notes' => 'Created by DB seeder',
        'password' => $password,
        'permissions' => '{"user":"0"}',
        'phone' => $faker->phoneNumber,
        'state' => $faker->stateAbbr,
        'username' => $faker->username,
        'zip' => $faker->postcode
    ];
});


$factory->state(App\Models\User::class, 'first-admin', function ($faker) use ($permission){

    $permit = $permission;
    $permit['superuser'] = 1;


    return [
        'first_name' => 'Admin',
        'last_name' => 'User',
        'username' => 'admin',
        'permissions' => json_encode($permit)
        //json_encode(['superuser'      => 1])
    ];
});

$factory->state(App\Models\User::class, 'snipe-admin', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['superuser'] = 1;

    return [
        'first_name' => 'Snipe E.',
        'last_name' => 'Head',
        'username' => 'snipe',
        'email' => 'snipe@snipe.net',
        'permissions' => json_encode($permit)
        //json_encode(['superuser'      => 1])
    ];
});


// USER GLOBAL PERMISSION STATES
$factory->state(App\Models\User::class, 'superuser', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['superuser'] = 1;

    return [
        'permissions' => json_encode($permit)
        //json_encode(['superuser'      => 1])
    ];
});

$factory->state(App\Models\User::class, 'admin', function ($faker) use ($permission){
    $permit = $permission;
    $permit['admin'] = 1;

    return [
        'permissions' => json_encode($permit),//json_encode(['admin'          => 1]),
        'manager_id' => rand(1,2),
    ];
});
// USER ASSET PERMISSION STATES
$factory->state(App\Models\User::class, 'view-assets', function ($faker) use ($permission){
    $permit = $permission;
    $permit['assets']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-assets', function ($faker) use ($permission){

    $permit = $permission;
    $permit['assets']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-assets', function ($faker) use ($permission){
    
    $permit = $permission;
    $permit['assets']['edit'] = 1;    

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['edit' => 1] ]),    
    ];
});

$factory->state(App\Models\User::class, 'delete-assets', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['assets']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['delete' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkin-assets', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['assets']['checkin'] = 1;


    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['checkin' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkout-assets', function ($faker) use ($permission) {
    $permit = $permission;
    $permit['assets']['checkout'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['checkout' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'view-requestable-assets', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['assets']['requestable'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['assets' => ['requestable' => 1] ]),
    ];
});

// USER ACCESSORY PERMISSION STATES
$factory->state(App\Models\User::class, 'view-accessories', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['accessories']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-accessories', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['accessories']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-accessories', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['accessories']['edit'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['edit' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'delete-accessories', function ($faker) use ($permission) {


    $permit = $permission;
    $permit['accessories']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['delete' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkin-accessories', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['accessories']['checkin'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['checkin' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkout-accessories', function ($faker) use ($permission) {
    
    $permit = $permission;
    $permit['accessories']['checkout'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['accessories' => ['checkout' => 1] ]),
    ];
});

// USER CONSUMABLE PERMISSION STATES
$factory->state(App\Models\User::class, 'view-consumables', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['consumables']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-consumables', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['consumables']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-consumables', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['consumables']['edit'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['edit' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'delete-consumables', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['consumables']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['delete' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkin-consumables', function ($faker) use ($permission) {
    
    $permit = $permission;
    $permit['consumables']['checkin'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['checkin' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkout-consumables', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['consumables']['checkout'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['consumables' => ['checkout' => 1] ]),
    ];
});

// USER LICENSE PERMISSION STATES
$factory->state(App\Models\User::class, 'view-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['edit'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['edit' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'delete-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['delete' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkout-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['checkout'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['checkout' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'view-keys-licenses', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['licenses']['keys'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['licenses' => ['keys' => 1] ]),
    ];
});

// USER COMPONENTS PERMISSION STATES
$factory->state(App\Models\User::class, 'view-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['edit'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['edit' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'delete-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['delete' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkin-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['checkin'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['checkin' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'checkout-components', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['components']['checkout'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['components' => ['checkout' => 1] ]),
    ];
});

// USER USER PERMISSION STATES
$factory->state(App\Models\User::class, 'view-users', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['users']['view'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['users' => ['view' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'create-users', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['users']['create'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['users' => ['create' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'edit-users', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['users']['edit'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['users' => ['edit' => 1] ]),
    ];
});

$factory->state(App\Models\User::class, 'delete-users', function ($faker) use ($permission) {

    $permit = $permission;
    $permit['users']['delete'] = 1;

    return [
        'permissions' => json_encode($permit)//json_encode(['users' => ['delete' => 1] ]),
    ];
});
