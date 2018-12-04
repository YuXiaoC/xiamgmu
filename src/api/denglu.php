<?php
    include 'connect2.php';
    $username = isset($_POST['username'])?$_POST['username']:'yuyuyu';
    $password = isset($_POST['password'])?$_POST['password']:'qwe123';
    $ziduan = isset($_POST['ziduan'])?$_POST['ziduan']:'username';
    // echo $username .' '.$password.' '.$ziduan;
    // var_dump($ziduan);
    if( $ziduan == 'username' ){
        $sql = "SELECT * FROM users WHERE username = '$username' and psw = '$password'";
        // echo 1;
    }

    if( $ziduan == 'phonecode' ){
        $sql = "SELECT * FROM users WHERE phonecode = '$username' and psw = '$password'";
    }

    if( $ziduan == 'email' ){
        $sql = "SELECT * FROM users WHERE email = '$username' and psw = '$password'";
   }

   $res = $conn->query($sql);
//    var_dump($res);
   if($res->num_rows>0){
        $row = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }else{
        echo 'no';
    };
  

    // $res = $conn->query($sql);
    // var_dump($res);
    // if($res->num_rows>0){
    //     echo 'yes';
    // }else{
    //     echo 'no';
    // };

?>