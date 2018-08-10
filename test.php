<?php

$arr = [1,3,4,5,6];
$arr['name'] = "mizan";
$arr['email'] = "mizanur.rahman@gmail.com";

foreach($arr as $i => $val) {
    echo $i. " > ".$arr[$i]."\n";
}
