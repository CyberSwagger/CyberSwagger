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
//$app->get('/login', function($request, $response, $args){
//	$this->logger->info("/login route");
//	$username = $_GET['username'];
//	$password = $_GET['password'];
//	$sth = $this->db->prepart("SELECT username, password FROM users");
//});
 // Add a new user
 $app->post('/subscribe', function ($request, $response) {
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
        return $this->response->withJson($name);
 });
//add new threat
$app->post('/threats', function($request, $response){
	$user_id = $_POST['user_id']
	$location = $_POST['location']
	$type = $_POST['type']
	$severity = $_POST['severity']
	$description = $_POST['description']
	$date = $_POST['date']
	$sql = "INSERT INTO threats (user_id, location, type, severity, description, date) VALUES (:user_id, :location, :type, :severity, :description, :date)";
	$sth = $this->db->prepare($sql);
	$sth->bindParam("user_id", $user_id);
	$sth->bindParam("location",$location);
	$sth->bindParam("type",$type);
	$sth->bindParam("severity",$severity);
	$sth->bindParam("description",$description);
	$sth->bindParam("date",$date);
	$sth->execute();
});
$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
