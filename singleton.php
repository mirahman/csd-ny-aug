<?php 

Class DB  {

    public static $obj;

    private function __construct() {

    }

    public static function getInstance() {
        if(! self::$obj) {
            self::$obj = new DB();
        }

        return self::$obj;
    }

    private function __clone() {
    }

   
     
    protected function __wakeup() {
        return;
    }

}

$mizan = DB::getInstance();
$str = serialize($mizan);
$minhaj = unserialize($str); //DB::getInstance();

var_dump($mizan);
var_dump($minhaj);