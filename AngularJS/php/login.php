<?php

require("./config.php");

function verifyPOST($user1,$password1) {
	if(!empty($user1) && !empty($password1)) {
		return true;
	 } else {
	 	return false;
	 }
}

if(verifyPOST($_POST['user'], $_POST['password'])) {
	try {
		$user = $_POST['user'];
		$pass = MD5($_POST['password']);
		$pass = substr($pass, 0, 25);
		
		$connection = new PDO("mysql:host=$HOST;dbname=$DB;", $USER, $PASSWORD);
		$stmt = $connection->prepare("SELECT * FROM usuario WHERE usuario LIKE '$user' AND password LIKE '$pass'");
		$stmt->execute();

		$existencia = $stmt->rowCount();

		if($existencia) {
			$longitud = strlen($user.$user);
			$token = bin2hex(random_bytes($longitud));
			session_start();
			$_SESSION[$user] = $token;
			$data = array("user"=>"$user","token"=>"$token", "ruta"=>"manager.html");
			echo json_encode($data);
		} else {
			echo "error 01";
		}
		
	}catch(PDOException $e) {
		echo $e->getMessage();
	}
} else {
	echo "ERROR";
}
?>