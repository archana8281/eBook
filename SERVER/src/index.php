<?php
namespace Archana\Elearning;

require __DIR__ . '/../vendor/autoload.php';

use Archana\Elearning\Controller\IndexController;
use Archana\Elearning\Controller\UserController;
use Archana\Elearning\Controller\FavouriteController;

$urlRoot = '/ebook/SERVER/';
 $currentULI = str_replace($urlRoot, "", $_SERVER['REQUEST_URI']);
 $user = new IndexController();

switch($currentULI) {
    case 'user':
         $user->index();
    break;

    case 'user/register':
         $user->Insert();
    break;

    case 'user/login':
        $user->userCheck();
        break;

    case 'user/list':
        $user = new UserController();
        $user->list();
    break;

    case 'fav':
        $fav = new FavouriteController();
        $fav->Favlist();
        break;

    default:
        $index = new IndexController();
         $index->index();
    break;
}
