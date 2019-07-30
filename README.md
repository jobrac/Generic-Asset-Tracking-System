#  Generic Asset Management For NUSERV

This project is a generic version of Asset Management System for NUSERV

### Language Used
 - PHP (Laravel)
 - Reactjs
 
### Web Server
 - NGINX


# Installation

clone the repo first and `cd ` to its root directory

* ##### For PHP Laravel

```sh
$ cd server
$ composer init && composer install
$ cp .env.example  .env
```
add your database credentials inside .env
```sh
$ php artisan jwt:secret
```
* ##### For React App
go back to repo root folder

```sh
$ cd client
$ npm init
$ npm run build
```