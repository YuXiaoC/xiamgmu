<?php
    include 'connect2.php';
    $can=isset($_GET['can'])?$_GET['can']:'add';
    $img=isset($_GET['img'])?$_GET['img']:'';
    $title=isset($_GET['title'])?$_GET['title']:'';
    $price=isset($_GET['price'])?$_GET['price']:'';
    $id=isset($_GET['id'])?$_GET['id']:'';
    $num=isset($_GET['num'])?$_GET['num']:'';
   
    //商品加入购物车
    if( $can =='add'){
            $sql = "SELECT * FROM shopcart WHERE id='$id'";
            $res = $conn->query($sql);//执行查询id语句判断插入购物车商品id是否存在。
            // var_dump($res);
        if($res->num_rows>0){
            $row = $res->fetch_all(MYSQLI_ASSOC);
            $newNum = $row[0]['num']+$num;
            // var_dump($row[0]['num']+$num);
            $sql = "UPDATE shopcart SET num='$newNum' WHERE id='$id'";
            $res = $conn->query($sql);
            if($res){
                echo 'yes';
            }else{
                echo 'no';
            }
        }else{
            $sql = "INSERT INTO shopcart(id,urlimg,title,price,num) VALUES('$id','$img','$title','$price','$num')";
            $res = $conn->query($sql);
            if($res){
                echo 'yes';
            }else{
                echo 'no';
            }
        }
    }
    //删除商品
    if($can == 'del'){
        $sql = "DELETE FROM shopcart WHERE id ='$id'";
        $res = $conn->query($sql);
        if($res){
            echo 'yes';
        }else{
            echo 'no';
        }
    }
    //更新商品列表
    if($can == 'updata'){
        $sql = "UPDATE shopcart SET num='$num' WHERE id='$id'";
        $res = $conn->query($sql);
    }
    //查询购物车
    if($can == 'select'){
        $sql = "SELECT * FROM shopcart";
        $res = $conn->query($sql);
        $row = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($row);
    }

    //清空购物车
    if($can == 'delectAll'){
        $sql = "DELETE FROM shopcart";
        $res = $conn->query($sql);
        if($res){
            echo 'yes';
        }else{
            echo 'no';
        }
    }

?>