<?php
    include 'connect2.php';
    $username = isset($_POST['username'])?$_POST['username']:'yuyuyu';
    $password = isset($_POST['password'])?$_POST['password']:'qwe123';
    $phoneNumb = isset($_POST['phoneNum'])?$_POST['phoneNum']:'18378140620';
    $brithday = isset($_POST['brith'])?$_POST['brith']:'2000-01-01';
    $email = isset($_POST['Email'])?$_POST['Email']:'1912850912@qq.com';
    // echo $password .' '. $username.' '.$phoneNumb.' '.$brithday.' '.$email;
    $sql = "INSERT INTO users(username,psw,phonecode,brith,email) VALUES('$username','$password','$phoneNumb','$brithday','$email')";
    $res = $conn->query($sql);
    // var_dump($res);
    if($res){
       echo 'yes';
    }else{
        echo 'no';
    }
?>