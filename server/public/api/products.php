<?php

require_once('functions.php');
require_once('db_connection.php');

set_exception_handler( 'error_handler' );
startup();

if(!$conn) {
  throw new Exception('exception: ' . mysqli_connect_error());
  exit();
}

// $output = file_get_contents('dummy-products-list.json'); //am i suppose to delete this?
$query = "SELECT * FROM `products`";

// print( $output ); //delete if needed
$result = mysqli_query( $conn, $query );

if(!$result) {
  throw new Exception('exception of result: ' . mysqli_error($conn));
  exit();
}

$output = [];

while($row = mysqli_fetch_assoc($result)) {
  array_push($output, $row);
}

$json_output = json_encode($output);

print($json_output);

?>