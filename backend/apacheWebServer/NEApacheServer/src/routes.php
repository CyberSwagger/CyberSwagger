<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
//return all users
$app->get('/allusers', function ($request, $response, $args) {
	$this -> logger ->info("/allusers");
	$sth = $this->db->prepare("SELECT * FROM users");
	$sth->execute();
	$test = $sth->fetchAll();
	return $this->response->withJson($test);
});
//return all threats
$app->get('/allthreats', function ($request, $response, $args) {
        $this -> logger -> info("/allthreats");
        $sth = $this->db->prepare("SELECT * FROM threats");
        $sth->execute();
        $test = $sth->fetchAll();
        return $this->response->withJson($test);
});
//to display all the threats posted by a particular user
$app->get('/allthreats/search/user_id/{user_id}', function($request, $response, $args){
	$this->logger->info("/threatsbyuser");
	$sth = $this->db->prepare("SELECT * FROM threats WHERE user_id=:user");
	$sth->bindParam("user",$args['user_id']);
	$sth->execute();
	$threatsByUser = $sth->fetchAll();
	return $this->response->withJson($threatsByUser);
});
//display all threats in a city
$app->get('/allthreats/search/city/{city}', function($request, $response, $args){
	$this->logger->info("/threatsbycity");
	$sth = $this->db->prepare("SELECT * FROM threats WHERE city=:city");
	$sth->bindParam("city", $args['city']);
	$sth->execute();
	$threatsByCity = $sth->fetchAll();
	return $this->response->withJson($threatsByCity);
});
//display all threats in a state
$app->get('/allthreats/search/state/{state}', function($request, $response, $args){
	$this->logger->info("/threatsbystate");
	$sth = $this->db->prepare("SELECT * FROM threats WHERE state=:state");
	$sth->bindParam("state",$args['state']);
	$sth->execute();
	$threatsByState = $sth->fetchAll();
	return $this->response->withJson($threatsByState);
});
//display all threats in a zipcode
$app->get('/allthreats/search/zip/{zip}', function($request, $response, $args){
	$this->logger->info("/threatsbyzip");
	$sth = $this->db->prepare("SELECT * FROM threats WHERE zip=:zip");
	$sth->bindParam("zip",$args['zip']);
	$sth->execute();
	$threatsByZip = $sth->fetchAll();
	return $this->response->withJson($threatsByZip);
});

//login specific user(takes username and password)
$app->post('/login', function($request, $response){
	$jsonInput = $request->getBody();
	$data = json_decode($jsonInput,true);
	$username = $data['username'];
	$password = $data['password'];
	$sth = $this->db->prepare("SELECT * FROM users WHERE username=:uname AND password=:pwd");
	$sth->bindParam("uname", $username);
	$sth->bindParam("pwd", $password);
	$sth->execute();
	$row = $sth->rowCount();
	$line = $sth->fetchAll();
	if ($row) {
		return $this->response->withJson($line);
	}
	else
		return $response->withStatus(401);
});
 //add new user to users database
 $app->post('/subscribe', function ($request, $response) {
	$json = $request->getBody();
	$data = json_decode($json, true);
	$name = $data['name'];
	$email = $data['email'];
	$username = $data['username'];
	$phone = $data['phone'];
	$city = $data['city'];
	$state = $data['state'];
	$zip = $data['zip'];
	$password = $data['password'];
        $sql = "INSERT INTO users (name, email, username, phone, city, state, zip, password) VALUES (:name, :email, :username, :phone, :city, :state, :zip, :password)";
        $sth = $this->db->prepare($sql);
        $sth->bindParam("name", $name);
	$sth->bindParam("email", $email);
	$sth->bindParam("username", $username);
	$sth->bindParam("phone", $phone);
	$sth->bindParam("city",$city);
	$sth->bindParam("state",$state);
	$sth->bindParam("zip",$zip);
	$sth->bindParam("password", $password);
        $sth->execute();
        return $this->response->withJson($data);
 });
//add new threat
$app->post('/threats/addthreat', function($request, $response){
	$json = $request->getBody();
	$data = json_decode($json, true);
	$user_id = $data['user_id'];
	$city = $data['city'];
	$state = $data['state'];
	$zip = $data['zip'];
	$type = $data['type'];
	$severity = $data['severity'];
	$description = $data['description'];
	$sql = "INSERT INTO threats (user_id, city, state, zip, type, severity, description) VALUES (:user_id, :city, :state, :zip, :type, :severity, :description)";
	$sth = $this->db->prepare($sql);
	$sth->bindParam("user_id", $user_id);
	$sth->bindParam("city",$city);
	$sth->bindParam("state",$state);
	$sth->bindParam("zip",$zip);
	$sth->bindParam("type",$type);
	$sth->bindParam("severity",$severity);
	$sth->bindParam("description",$description);
	$sth->execute();
	return $this->response->withJson($data);
});
//update a threat
$app->put('/threats/updatedescription[/{user_id}[/{threat_id}]]',function($request,$response,$args) {
	$json = $request->getBody();
	$data = json_decode($json, true);
	$user_id = $data['user_id'];
	$threat_id = $data['threat_id'];
	$description = $data['description'];
	$sql = "UPDATE threats SET description=:description WHERE user_id=:user_id AND threat_id=:threat_id";
        $sth = $this->db->prepare($sql);
        $sth->bindParam("user_id", $user_id);
        $sth->bindParam("threat_id", $threat_id);
	$sth->bindParam("description", $description);
        $sth->execute();
	return $this->response->withJson($data);
});
//to delete a threat posted by a particular user
$app->delete('/threats/removethreat[/{user_id}[/{threat_id}]]', function($request, $response, $args){
	$json = $request->getBody();
	$data = json_decode($json, true);
	$user_id = $data['user_id'];
	$threat_id = $data['threat_id'];
	$sql =  "DELETE FROM threats WHERE user_id=:user_id AND threat_id=:threat_id";
        $sth = $this->db->prepare($sql);
        $sth->bindParam("user_id",$user_id);
	$sth->bindParam("threat_id",$threat_id);
	$sth->execute();
});
//get threats grouped by type
$app->get('/allthreats/bytype', function ($request, $response, $args) {
        $this -> logger -> info("/allthreatsbytype");
        $sth = $this->db->prepare("SELECT * FROM threats ORDER BY type");
        $sth->execute();
        $data = $sth->fetchAll();
        return $this->response->withJson($data);
});
$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
