<?php

namespace Archana\Elearning\Controller;

use Archana\Elearning\Model\User;
use Archana\Elearning\Model\Headers;

class IndexController
{
    private $header;

    public function __construct()
    {
        $this->header = new Headers;
        $this->header->setHeaders();
    }

    public function index()
    {
        $user = new User();
        $user->findAll();
    }

    public function Insert()
    {
        $getInput = file_get_contents('php://input');
        $input = json_decode($getInput, true);
        $user = new User();
        $email = $input['email'];
        $password =md5($input['password']);
        if ($user->check($email, $password) === "true") {
            http_response_code(400);
            echo "Already have an account";
            exit(0);
        } else {
            http_response_code(200);
            $this->header->setHeaders();
            $user->register(
                [
                    'name' => $input['fname'],
                    'subject' => $input['subject'],
                    'email' => $input['email'],
                    'password' => $input['password']
                ]
            );
            exit(0);
        }
    }

    public function userCheck()
    {
        $getInput = file_get_contents('php://input');
        $input = json_decode($getInput, true);
        $user = new User();
        $email = $input['email'];
        $password =md5($input['password']);
        // print_r($user->check($email, $password));
        if ($user->check($email,$password) === "true") {
            http_response_code(200);
            echo "successfully logined";
            exit(0);
        } else {
            http_response_code(400);
            echo "Incorrect email or password";
            exit(0);
        }
    }
}
