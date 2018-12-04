<?php
    include 'connect2.php';
    $c = isset($_GET['c']) ? $_GET['c'] : 'phoneNum' ;
    $phoneNum = isset($_GET['phoneNum']) ? $_GET['phoneNum'] : '18378140620';
    $username = isset($_GET['username']) ? $_GET['username'] : 'yuyu';
    // echo $username;
    // var_dump('userN');
    if( $c =='phoneNum' ){
        $sql = "SELECT * FROM users WHERE phonecode = '$phoneNum'";
    }
    if($c =='username'){
        $sql = "SELECT * FROM users WHERE username = '$username'";
    }
    $res = $conn->query($sql);
    // var_dump($res);
    // echo $res->num_rows;
    if($res->num_rows>0){
        echo 'no';
    }else{
        echo 'yes';
    };
?>