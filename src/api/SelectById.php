<?php
    include 'connect2.php';
    $id =isset($_GET['id'])?$_GET['id']:'2';
    // echo $id;
    $sql = " SELECT * FROM liebiao WHERE id = '$id' ";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($row);
    echo json_encode($row);
?>