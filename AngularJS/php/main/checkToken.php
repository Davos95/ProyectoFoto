<?php
session_start();
if(empty($_POST['user']) || empty($_POST['token'])) {
	echo 0;
} else {
	if($_SESSION[$_POST['user']] != $_POST['token']) {
		echo 0;
	} else {
		echo 1;
	}
}
?>