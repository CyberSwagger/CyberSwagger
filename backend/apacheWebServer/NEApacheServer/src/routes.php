<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes
//return all users
$app->get('/allusers', function ($request, $response, $args) {
	$this -> logger -> info("/test route");
	$sth = $this->db->prepare("SELECT * FROM users");
	$sth->execute();
	$test = $sth->fetchAll();
	return $this->response->withJson($test);
});
//return all threats
$app->get('/allthreats', function ($request, $response, $args) {
        $this -> logger -> info("/test route");
        $sth = $this->db->prepare("SELECT * FROM threats");
        $sth->execute();
        $test = $sth->fetchAll();
        return $this->response->withJson($test);
});
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
	//	return $response->withStatus(200);
	}
	else
		return $response->withStatus(401);


});
 // Add a new user
 $app->post('/subscribe', function ($request, $response) {
	$json = $request->getBody();
	$data = json_decode($json, true);
	$name = $data['name'];
	$email = $data['email'];
	$username = $data['username'];
	$phone = $data['phone'];
	$address = $data['address'];
	$password = $data['password'];
        $sql = "INSERT INTO users (name, email, username, phone, address, password) VALUES (:name, :email, :username, :phone, :address, :password)";
        $sth = $this->db->prepare($sql);
        $sth->bindParam("name", $name);
	$sth->bindParam("email", $email);
	$sth->bindParam("username", $username);
	$sth->bindParam("phone", $phone);
	$sth->bindParam("address", $address);
	$sth->bindParam("password", $password);
        $sth->execute();
        return $this->response->withJson($data);
 });
//add new threat
$app->post('/addthreat', function($request, $response){
	$json = $request->getBody();
	$data = json_decode($json, true);
	$user_id = $data['user_id'];
	$location = $data['location'];
	$type = $data['type'];
	$severity = $data['severity'];
	$description = $data['description'];
	$sql = "INSERT INTO threats (user_id, location, type, severity, description) VALUES (:user_id, :location, :type, :severity, :description)";
	$sth = $this->db->prepare($sql);
	$sth->bindParam("user_id", $user_id);
	$sth->bindParam("location",$location);
	$sth->bindParam("type",$type);
	$sth->bindParam("severity",$severity);
	$sth->bindParam("description",$description);
	$sth->execute();
	return $this->response->withJson($data);
});
//update a threat
//$app->put('/updatethreat/[{user_id}[/{threat_id}]]',function($request,$response,$args) {
//	$json = $request->getBody();
//	$data = $json_decode($json, true);
//	$description = $data['description'];
//	$sql = "UPDATE threats SET description=:description WHERE user_id=:user_id";
//      $sth = $this->db->prepare($sql);
 //       $sth->bindParam("user_id", $args['user_id']);
  //      $sth->bindParam("task", $input['task']);
   //     $sth->execute();
//});
$app->get('/[{name}]', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});
