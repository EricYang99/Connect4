<?php
//Server name -> using localhost
$server = 'localhost';
//User -> Does not require Sign in to play, root is temp
$user = 'root';
//No passwords at the moment
$pw = '';
//Database -> Connect 4. Tablename -> leaderboard
$db = 'Connect4';

//We will use $conn as the connection link to the database
$conn = mysqli_connect($server, $user, $pw, $db);