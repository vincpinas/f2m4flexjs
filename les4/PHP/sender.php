<?php
header("Content-Type:application/json");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

// Classes
require __DIR__.'/Models/Database.php';
require __DIR__.'/Models/ScoreHandler.php';

function msg($success,$status,$message,$type,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message,
        'type' => $type
    ],$extra);
}

$db_connection = new Database();
$conn = $db_connection->__dbConnection();

$returnData = [];

if($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0,404,'Page Not Found!','Error');
    echo json_encode($returnData);
} else {
    try {
        $username = trim($_POST['username']);
        $userscore = trim($_POST['userscore']);
    
        $score = new ScoreHandler($conn);
    
        $score->sendScoreData($username,$userscore);
    } catch(PDOException $e) {
        $returnData = msg(0,500,$e->getMessage(), 'Error');
        echo json_encode($returnData);
    }
}