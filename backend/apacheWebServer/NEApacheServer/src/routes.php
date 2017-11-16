<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
//sample route
$app->get('/test', function ($request, $response, $args) {
	$this -> logger -> info("/test route");
	$sth = $this->db->prepare("SELECT * FROM users");
	$sth->execute();
	$test = $sth->fetchAll();
	return $this->response->withJson($test);
});
 // Add a new user
 $app->post('/users', function ($request, $response) {
     //$input = $request->getParsedBody();
	$name = $_POST['name'];
	$email = $_POST['email'];
	$username = $_POST['username'];
	$phone = $_POST['phone'];
	$address = $_POST['address'];
	$password = $_POST['password'];
        $sql = "INSERT INTO users (name, email, username, phone, address, password) VALUES (:name, :email, :username, :phone, :address, :password)";
        $sth = $this->db->prepare($sql);
        $sth->bindParam("name", $name);
	$sth->bindParam("email", $email);
	$sth->bindParam("username", $username);
	$sth->bindParam("phone", $phone);
	$sth->bindParam("address", $address);
	$sth->bindParam("password", $password);
        $sth->execute();
       // $input['id'] = $this->db->lastInsertId();
        return $this->response->withJson($name);
 });
$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
