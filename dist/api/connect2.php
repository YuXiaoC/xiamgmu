<?php

// 链接数据库

 $servername = 'localhost';
 $username = 'root';
 $password = '';
 $dbname = 'xianmu';

 $conn = new mysqli($servername,$username,$password,$dbname);
// var_dump($conn);
 if($conn->connect_error){
    die("连接出错了：".$conn->connect_error);
 }
  //查询前设置编码，防止输出乱码
$conn->set_charset('utf8');
?>   
