<?php

  $conn = new mysqli('localhost','root','root','wishfestival');

  if($conn->connect_error) {
      echo $error -> $conn->connect_error;
  }

?>