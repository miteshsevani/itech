<?php

$list = array ("sum,IP Address,date,browser");
$file = fopen("calculations.csv","w");

foreach ($list as $line) {
  fputcsv($file,explode(',',$line));
}

fclose($file); ?>