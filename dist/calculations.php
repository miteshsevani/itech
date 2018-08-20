<?php

$list = array (
  "100,10.1.1.2,10/12/2018,chrome",
  "12,192.168.1.0,13/07/2017,fire fox",
  "1120,123.4.5.68,1/06/2018,safari"
);
$write_file = fopen("calculations.csv","w");

foreach ($list as $line) {
  fputcsv($write_file,explode(',',$line));
}

fclose($write_file);

$read_file = fopen('calculations.csv', 'r');
$row = 1;

while (($entry = fgetcsv($read_file)) !== FALSE) {
  $num = count($entry);
  $row++;
  for ($i=0; $i < $num; $i++) {
      echo $entry[$i] . "<br />\n";
  }
}

fclose($read_file); ?>