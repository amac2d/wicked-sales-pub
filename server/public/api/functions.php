<?php

function error_handler( $error ) {
  $output = [
    'success'=> false,
    'error'=> $error->getMessage()
  ];
  $json_error_output = json_encode( $output );

  print( $json_error_output );
}

function startup() {
  header("Content-type:application/json");
}

?>