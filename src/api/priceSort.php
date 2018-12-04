<?php
   include 'connect2.php';
   $sort =isset($_GET['sort'])?$_GET['sort']:'0' ;
   $page = isset($_GET['page'])?$_GET['page']:'1';
   $qty = isset($_GET['qty'])?$_GET['qty']:'8';
   $index = ($page-1)*$qty;
//    echo $sort;
    if($sort=='0'){
        $sql = "SELECT * FROM liebiao ORDER BY price limit $index,$qty";
        // var_dump($row);
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }else{
        $sql = "SELECT * FROM liebiao ORDER BY price DESC limit $index,$qty";
        $res = $conn->query($sql);
        // var_dump($res);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }
   
?>