<?php
//This php file will allow us to add new names into the database

include 'database.php';
//This should be the name that we get as data from the allRunner, Should be a name
$receivedData = file_get_contents('php://input');

$sql = "INSERT INTO `leaderboard` (`playerName`, `Wins`) VALUES ('$receivedData', 0);";
$result = mysqli_query($conn, $sql);

// //This is a new array that we will send with the new data
// $array = [];

// if(mysqli_num_rows($result) > 0){
//     while($rows = mysqli_fetch_assoc($result)){
//         array_push($array, $row);
//     }
// }
// else{
//     echo "There was an error in adding";
// }

// echo json_encode($array);