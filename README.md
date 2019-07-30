#  Generic Asset Management For NUSERV

This project is a generic version of Asset Management System for NUSERV

### Language Used
 - PHP (Laravel)
 - Reactjs
 
### Web Server
 - NGINX `Don't use apache 'coz it sucks!!!`


# Installation
`Hopes you already installed PHP, NPM, Node, NGINX and its dependencies`
`if not, just google it.`

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
$ php artisan migrate:fresh
```
* ##### For React App
go back to repo root folder

```sh
$ cd client
$ npm init
$ npm run build
```
`if something went wrong just google it !!!`