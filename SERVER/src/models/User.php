<?php

namespace Archana\Elearning\Model;


class User extends Model
{
    private int|null $id = null;
    private string $name;
    private string $email;
    private $password;
    private string $type;
    private string $subject;

    public \Doctrine\DBAL\Query\QueryBuilder $queryBuilder;

    public function __construct()
    {
        parent::__construct();
        $this->queryBuilder = $this->conn->createQueryBuilder();
    }

    public function findAll()
    {
        return $this->queryBuilder->select('id', 'name')
            ->from('users')->fetchAllAssociative();
    }

    public function check(string $email, string $password)
    {
        return $this->queryBuilder->select('name', 'email','subject','password')
            ->from('users')
            ->where('email = ?')
            ->andWhere('password = ?')
            ->setParameter(0, $email)
            ->setParameter(1, $password)
            ->fetchOne() ? "true" :"false";
    }

    public function register(array $data)
    {
        return $this->queryBuilder->insert('users')
            ->setValue('name', '?')
            ->setValue('subject', '?')
            ->setValue('email', '?')
            ->setValue('password', '?')
            ->setParameter(0, $data['name'])
            ->setParameter(1, $data['subject'])
            ->setParameter(2, $data['email'])
            ->setParameter(3, md5($data['password']))
            ->executeQuery();
    }
}
