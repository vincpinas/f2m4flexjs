<?php

class ScoreHandler
{
    public $username;
    public $score;
    public $date;

    public function __construct($username,$score) {
        $this->username = $username;
        $this->score = $score;
        $this->created_at = date("Y/m/d");
    }
    
    public function sendScoreData($connection) {
        $insert_query = "INSERT INTO `scores` (`username`, `score`, `created_at`)
                         VALUES(:username,:score,:created_at)";

        $insert_stmt = $connection->prepare($insert_query);

        $insert_stmt->bindValue(':username', htmlspecialchars(strip_tags($this->username)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':score', $this->score,PDO::PARAM_STR);
        $insert_stmt->bindValue(':created_at', $this->created_at,PDO::PARAM_STR);

        $insert_stmt->execute();
    }

    public function fetchAllScores($connection) {
        $fetch_query = "SELECT * FROM `scores`";

        $fetch_stmt = $connection->prepare($fetch_query);
        $fetch_stmt->execute();

        $result = $fetch_stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $dump = [
            'success' => 1,
            'message' => 'Sucessfully Fetched Data',
            'data' => $result
        ];
        
        echo json_encode($dump);
    }
}