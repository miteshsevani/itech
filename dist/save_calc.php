<?php 

// Set csv entry vars
$sum = $_POST['post-answer'];
$ip_address = $_SERVER['REMOTE_ADDR'];
date_default_timezone_set('Europe/London');
$entry_date = date("jS F Y");
$browser = $_POST['browser'];

// set entry string
$entry = "$sum,10.1.1.2,$entry_date,$browser";

// Open and Append entry to file
$write_file = fopen("calculations.csv","a");
fputcsv($write_file,explode(',',$entry));

fclose($write_file);

// Redirect to home page
header("Location: index.html");
die();

?>