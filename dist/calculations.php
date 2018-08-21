<?php

$read_file = fopen('calculations.csv', 'r');
$row = 1;

echo "<table border='1'><thead><th>Sum</th><th>IP Address</th><th>Date</th><th>Browser</th>";

// Read and display saved entries
while (($entry = fgetcsv($read_file)) !== FALSE) {
  $num = count($entry);
  $row++;
  echo "<tr>";
  for ($i=0; $i < $num; $i++) {
    echo "<td>" . $entry[$i] . "</td>";
  }  
  echo "</tr>";
}

echo "</table>";

fclose($read_file);

echo "<p><a href='index.html'>Go to calculator</a></p>"

?>