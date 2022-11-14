<?php
//In this php file, we will update the winner's score by one

include 'database.php';

$receivedData = file_get_contents('php://input'); //Get the inputs
$receivedArray = json_decode($receivedData, true); // Parse it into an array for us to play with
$receivedArray['Wins']++;

$sql = "UPDATE `leaderboard` SET `Wins` = '$receivedArray[Wins]' WHERE `playerName` = '$receivedArray[playerName]'";
$result = mysqli_query($conn, $sql);

// $array = [];
// if(mysqli_num_rows($result) > 0){
//     while($row = mysqli_fetch_assoc($result)){
//         array_push($array, $row);
//     }
// }
// else{
//     echo "Wins update failed!";
// }

// echo json_encode($receivedArray);