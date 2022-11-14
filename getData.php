<?php
//This php file will allow us to get all the data from the leader board and display it
include 'database.php';

$sql = "SELECT * FROM `leaderboard`;";
$result = mysqli_query($conn, $sql);

$array = [];
if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_all($result)){
        array_push($array, $row);
    }
}
else{
    echo 'Empty';
}

echo json_encode($array);