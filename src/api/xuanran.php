<?php
    include 'connect2.php';
    $page = isset($_GET['page'])?$_GET['page']:'0';
    $qty = isset($_GET['qty'])?$_GET['qty']:'5';
    // echo $page.''.$qty;
    $sql = "SELECT * FROM homepage limit $page,$qty";
    $res = $conn->query($sql);
    // var_dump ($res);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump ($row)
    echo json_encode($row);
?>