<?php

class ScoreHandler
{
    public $username;
    public $score;
    public $created_at;

    public function __construct($connection) {
        $this->connection = $connection;
        $this->created_at = date("Y/m/d");
    }
    
    public function sendScoreData($username, $score) {
        $insert_query = "INSERT INTO `scores` (`username`, `score`, `created_at`)
                         VALUES(:username,:score,:created_at)";

        $insert_stmt = $this->connection->prepare($insert_query);

        $insert_stmt->bindValue(':username', htmlspecialchars(strip_tags($this->username)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':score', $this->score,PDO::PARAM_STR);
        $insert_stmt->bindValue(':created_at', $this->created_at,PDO::PARAM_STR);

        $insert_stmt->execute();
    }

    public function fetchAllScores() {
        $fetch_query = "SELECT * FROM `scores`";

        $fetch_stmt = $this->connection->prepare($fetch_query);
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