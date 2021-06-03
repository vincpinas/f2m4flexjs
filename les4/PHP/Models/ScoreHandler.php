<?php

class ScoreHandler
{
    public $user;
    public $score;
    public $date;

    public function __construct($user,$score,$date) {
        $this->user = $user;
        $this->score = $score;
        $this->date = $date;
    }

}