<?php
    // header("content-type:text/html;charset:utf-8");
    include 'connect2.php';
    $page = isset($_GET['page'])?$_GET['page']:'1';
    $qty = isset($_GET['qty'])?$_GET['qty']:'8';
    $index = ($page-1)*$qty;
    // echo $page.' '.$qty;
    //写查询语句
    $sql = "select * from liebiao limit $index,$qty";
    //执行查询语句，得到一个结果集
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);//得到全部符合查询条件的结果集。

    //写语句二，查询所有数据的条数
    $sql2 = 'select * from liebiao';
    $res2 = $conn->query($sql2);
    $rowNum = $res2->num_rows;//获取结果集里面的num_rows属性，记录的条数
    // var_dump($rowNum);
    $goodslist = array(
        'total'=>$rowNum,
        'datalist'=>$row,
        'page'=>$page,
        'qty'=>$qty
    );
    $result = json_encode($goodslist,JSON_UNESCAPED_UNICODE);
    echo $result;
    $res->close();
    $res2->close();
    $conn->close();
?>