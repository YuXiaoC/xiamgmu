/*
Navicat MySQL Data Transfer

Source Server         : h51807
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : xianmu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-04 11:26:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for homepage
-- ----------------------------
DROP TABLE IF EXISTS `homepage`;
CREATE TABLE `homepage` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homepage
-- ----------------------------
INSERT INTO `homepage` VALUES ('1', '../images/1F-1.jpg', '53度茅台王子酒（2017年产）750ml酱香型白酒', '418.00');
INSERT INTO `homepage` VALUES ('2', '../images/1F-2.jpg', '贵州茅台53度飞天 200ml 酱香型白酒 单瓶装', '342.00');
INSERT INTO `homepage` VALUES ('3', '../images/1F-3.jpg', '古井贡酒 50度古井贡5年份原浆白酒浓香型500ml 1瓶装', '500.00');
INSERT INTO `homepage` VALUES ('4', '../images/1F-4.jpg', '52度 五粮液（金瓶） 丙申猴年 375ml 浓香型白酒（新老包装随机发货） 1瓶装 单瓶装', '423.00');
INSERT INTO `homepage` VALUES ('5', '../images/1F-5.jpg', '五粮液股份52度 五粮迎宾酒上品 婚宴喜酒浓香型白酒礼盒 500ml 整箱装', '231.00');
INSERT INTO `homepage` VALUES ('6', '../images/1F-6.jpg', '52度习酒习水大曲500ml（12瓶装） 浓香型白酒整箱', '98.00');
INSERT INTO `homepage` VALUES ('7', '../images/1F-7.jpg', '五粮液股份 52度贵宾级酒品浓香型白酒礼盒 500ml 整箱装', '877.00');
INSERT INTO `homepage` VALUES ('8', '../images/1F-8.jpg', '贵州茅台酒股份53度 茅台王子酒 500ml 酱香型白酒整箱 整箱装', '532.00');
INSERT INTO `homepage` VALUES ('9', '../images/1F-9.jpg', '贵州茅台王子酒53度酱色500ml 酱香型白酒礼盒 1瓶装', '342.00');
INSERT INTO `homepage` VALUES ('10', '../images/1F-10.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '543.00');
INSERT INTO `homepage` VALUES ('11', '../images/1F-11.jpg', '泸州老窖 52度国窖1573 浓香型白酒500ml', '423.00');
INSERT INTO `homepage` VALUES ('12', '../images/1F-12.jpg', '茅台集团 习酒 53度窖藏1998 酱香型白酒礼盒装500ml 1瓶装', '564.00');
INSERT INTO `homepage` VALUES ('13', '../images/2F-1.jpg', '贵州茅台王子酒53度酱色500ml 酱香型白酒礼盒 1瓶装', '345.00');
INSERT INTO `homepage` VALUES ('14', '../images/2F-2.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '654.00');
INSERT INTO `homepage` VALUES ('15', '../images/2F-3.jpg', '泸州老窖 52度国窖1573 浓香型白酒500ml', '676.00');
INSERT INTO `homepage` VALUES ('16', '../images/2F-4.jpg', '茅台集团 习酒 53度窖藏1998 酱香型白酒礼盒装500ml 1瓶装', '464.00');
INSERT INTO `homepage` VALUES ('17', '../images/2F-5.jpg', '茅台53度 王茅 百年印象酒 （2016-2017年产） 500ml', '423.00');
INSERT INTO `homepage` VALUES ('18', '../images/2F-6.jpg', '水井坊 54度 水井坊画卷装1000ml浓香型白酒礼盒装 1瓶装', '778.00');
INSERT INTO `homepage` VALUES ('19', '../images/2F-7.jpg', '茅台水立方53度500ml酱香型白酒 （2012年产）', '673.00');
INSERT INTO `homepage` VALUES ('20', '../images/2F-8.jpg', '54度董酒国密畅享10董香型500ml 礼盒装高度白酒送礼', '123.00');
INSERT INTO `homepage` VALUES ('21', '../images/2F-9.jpg', '贵州茅台酒股份 53度茅台王子酱门经典 500ml*6  酱香型白酒 整箱装', '342.00');
INSERT INTO `homepage` VALUES ('22', '../images/2F-10.jpg', '五粮液股份 52度 丁酉鸡年纪念酒 500ml 鸡年生肖酒礼盒装 4瓶装', '234.00');
INSERT INTO `homepage` VALUES ('23', '../images/2F-11.jpg', '小糊涂仙52度白酒500ml浓香型白酒 整箱装', '452.00');
INSERT INTO `homepage` VALUES ('24', '../images/2F-12.png', '52度 郎酒 郎泉 佳酿 (2014年产) 500ml*6瓶浓香型白酒 整箱装', '133.00');

-- ----------------------------
-- Table structure for homepage2
-- ----------------------------
DROP TABLE IF EXISTS `homepage2`;
CREATE TABLE `homepage2` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of homepage2
-- ----------------------------
INSERT INTO `homepage2` VALUES ('1', 'images/1F-1.jpg', '53度茅台王子酒（2017年产）750ml酱香型白酒', '418.00');
INSERT INTO `homepage2` VALUES ('2', 'images/1F-2.jpg', '贵州茅台53度飞天 200ml 酱香型白酒 单瓶装', '342.00');
INSERT INTO `homepage2` VALUES ('3', 'images/1F-3.jpg', '古井贡酒 50度古井贡5年份原浆白酒浓香型500ml 1瓶装', '500.00');
INSERT INTO `homepage2` VALUES ('4', 'images/1F-4.jpg', '52度 五粮液（金瓶） 丙申猴年 375ml 浓香型白酒（新老包装随机发货） 1瓶装 单瓶装', '423.00');
INSERT INTO `homepage2` VALUES ('5', 'images/1F-5.jpg', '五粮液股份52度 五粮迎宾酒上品 婚宴喜酒浓香型白酒礼盒 500ml 整箱装', '231.00');
INSERT INTO `homepage2` VALUES ('6', 'images/1F-6.jpg', '52度习酒习水大曲500ml（12瓶装） 浓香型白酒整箱', '98.00');
INSERT INTO `homepage2` VALUES ('7', 'images/1F-7.jpg', '五粮液股份 52度贵宾级酒品浓香型白酒礼盒 500ml 整箱装', '877.00');
INSERT INTO `homepage2` VALUES ('8', 'images/1F-8.jpg', '贵州茅台酒股份53度 茅台王子酒 500ml 酱香型白酒整箱 整箱装', '532.00');
INSERT INTO `homepage2` VALUES ('9', 'images/1F-9.jpg', '贵州茅台王子酒53度酱色500ml 酱香型白酒礼盒 1瓶装', '342.00');
INSERT INTO `homepage2` VALUES ('10', 'images/1F-10.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '543.00');
INSERT INTO `homepage2` VALUES ('11', 'images/1F-11.jpg', '泸州老窖 52度国窖1573 浓香型白酒500ml', '423.00');
INSERT INTO `homepage2` VALUES ('12', 'images/1F-12.jpg', '茅台集团 习酒 53度窖藏1998 酱香型白酒礼盒装500ml 1瓶装', '564.00');
INSERT INTO `homepage2` VALUES ('13', 'images/2F-1.jpg', '贵州茅台王子酒53度酱色500ml 酱香型白酒礼盒 1瓶装', '345.00');
INSERT INTO `homepage2` VALUES ('14', 'images/2F-2.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '654.00');
INSERT INTO `homepage2` VALUES ('15', 'images/2F-3.jpg', '泸州老窖 52度国窖1573 浓香型白酒500ml', '676.00');
INSERT INTO `homepage2` VALUES ('16', 'images/2F-4.jpg', '茅台集团 习酒 53度窖藏1998 酱香型白酒礼盒装500ml 1瓶装', '464.00');
INSERT INTO `homepage2` VALUES ('17', 'images/2F-5.jpg', '茅台53度 王茅 百年印象酒 （2016-2017年产） 500ml', '423.00');
INSERT INTO `homepage2` VALUES ('18', 'images/2F-6.jpg', '水井坊 54度 水井坊画卷装1000ml浓香型白酒礼盒装 1瓶装', '778.00');
INSERT INTO `homepage2` VALUES ('19', 'images/2F-7.jpg', '茅台水立方53度500ml酱香型白酒 （2012年产）', '673.00');
INSERT INTO `homepage2` VALUES ('20', 'images/2F-8.jpg', '54度董酒国密畅享10董香型500ml 礼盒装高度白酒送礼', '123.00');
INSERT INTO `homepage2` VALUES ('21', 'images/2F-9.jpg', '贵州茅台酒股份 53度茅台王子酱门经典 500ml*6  酱香型白酒 整箱装', '342.00');
INSERT INTO `homepage2` VALUES ('22', 'images/2F-10.jpg', '五粮液股份 52度 丁酉鸡年纪念酒 500ml 鸡年生肖酒礼盒装 4瓶装', '234.00');
INSERT INTO `homepage2` VALUES ('23', 'images/2F-11.jpg', '小糊涂仙52度白酒500ml浓香型白酒 整箱装', '452.00');
INSERT INTO `homepage2` VALUES ('24', 'images/2F-12.png', '52度 郎酒 郎泉 佳酿 (2014年产) 500ml*6瓶浓香型白酒 整箱装', '133.00');

-- ----------------------------
-- Table structure for liebiao
-- ----------------------------
DROP TABLE IF EXISTS `liebiao`;
CREATE TABLE `liebiao` (
  `id` int(34) unsigned NOT NULL AUTO_INCREMENT,
  `urlimg` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `pingjia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liebiao
-- ----------------------------
INSERT INTO `liebiao` VALUES ('1', 'liebiaomaotai1.jpg', '53度茅台王子酒（2017年产）750ml酱香型白酒', '645', '232');
INSERT INTO `liebiao` VALUES ('2', 'liebiaomaotai2.jpg', '贵州茅台53度飞天 200ml 酱香型白酒 单瓶装', '53434', '4234');
INSERT INTO `liebiao` VALUES ('3', 'liebiaomaotai3.jpg', '古井贡酒 50度古井贡5年份原浆白酒浓香型500ml 1瓶装', '635', '42324');
INSERT INTO `liebiao` VALUES ('4', 'liebiaomaotai4.jpg', '52度 五粮液（金瓶） 丙申猴年 375ml 浓香型白酒 1瓶装 单瓶装', '4553', '64');
INSERT INTO `liebiao` VALUES ('5', 'liebiaomaotai5.jpg', '五粮液股份52度 五粮迎宾酒上品 婚宴喜酒浓香型白酒礼盒 500ml 整箱装', '465', '545');
INSERT INTO `liebiao` VALUES ('6', 'liebiaomaotai6.jpg', '52度习酒习水大曲500ml（12瓶装） 浓香型白酒整箱', '543', '654');
INSERT INTO `liebiao` VALUES ('7', 'liebiaomaotai7.jpg', '五粮液股份 52度贵宾级酒品浓香型白酒礼盒 500ml 整箱装', '654', '65');
INSERT INTO `liebiao` VALUES ('8', 'liebiaomaotai8.jpg', '贵州茅台酒股份53度 茅台王子酒 500ml 酱香型白酒整箱 整箱装', '234', '654');
INSERT INTO `liebiao` VALUES ('9', 'liebiaomaotai9.jpg', '贵州茅台王子酒53度酱色500ml 酱香型白酒礼盒 1瓶装', '4234', '868');
INSERT INTO `liebiao` VALUES ('10', 'liebiaomaotai10.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '243', '7588');
INSERT INTO `liebiao` VALUES ('11', 'liebiaomaotai11.jpg', '泸州老窖 52度国窖1573 浓香型白酒500ml', '655', '466');
INSERT INTO `liebiao` VALUES ('12', 'liebiaomaotai12.jpg', '茅台集团 习酒 53度窖藏1998 酱香型白酒礼盒装500ml 1瓶装', '423', '64');
INSERT INTO `liebiao` VALUES ('13', 'liebiaomaotai13.jpg', '贵州茅台酒 53度飞天茅台1000ml  公斤茅台 单瓶', '4345', '24');
INSERT INTO `liebiao` VALUES ('14', 'liebiaomaotai14.jpg', '贵州茅台酒 53度飞天茅台1000ml  公斤茅台 单瓶', '234', '254');
INSERT INTO `liebiao` VALUES ('15', 'liebiaomaotai15.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒500ml礼盒装 整箱装', '5654', '653');
INSERT INTO `liebiao` VALUES ('16', 'liebiaomaotai16.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒501ml礼盒装 整箱装', '7657', '5345');
INSERT INTO `liebiao` VALUES ('17', 'liebiaomaotai17.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒502ml礼盒装 整箱装', '4234', '242');
INSERT INTO `liebiao` VALUES ('18', 'liebiaomaotai18.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒503ml礼盒装 整箱装', '654', '53');
INSERT INTO `liebiao` VALUES ('19', 'liebiaomaotai19.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒504ml礼盒装 整箱装', '345', '3422');
INSERT INTO `liebiao` VALUES ('20', 'liebiaomaotai20.jpg', '剑南春 52度剑南老窖2006 婚喜宴浓香型白酒505ml礼盒装 整箱装', '765', '242');
INSERT INTO `liebiao` VALUES ('21', 'liebiaomaotai21.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品500ml高度白酒礼盒装', '534', '463');
INSERT INTO `liebiao` VALUES ('22', 'liebiaomaotai22.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品501ml高度白酒礼盒装', '8967', '534');
INSERT INTO `liebiao` VALUES ('23', 'liebiaomaotai23.jpg', '贵州珍酒 53度 酱香型白酒 珍酒 1975珍品502ml高度白酒礼盒装', '5345', '535');
INSERT INTO `liebiao` VALUES ('24', 'liebiaomaotai24.jpg', '古井贡酒 50度古井贡5年份原浆白酒浓香型500ml 1瓶装', '4234', '765');

-- ----------------------------
-- Table structure for shopcart
-- ----------------------------
DROP TABLE IF EXISTS `shopcart`;
CREATE TABLE `shopcart` (
  `id` int(25) unsigned NOT NULL AUTO_INCREMENT,
  `urlimg` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcart
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(23) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  `phonecode` varchar(255) DEFAULT NULL,
  `brith` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'yuyuyu1', '1234', '18372424341', '2000-01-01', '456789@qq.com');
INSERT INTO `users` VALUES ('2', 'yuyuyu', 'qwe123', '18378140620', '2001-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('3', 'xiaoxiao', 'qwe123', '18378140610', '2002-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('4', 'xiaoxiao', 'qwe123', '18378140610', '2002-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('5', 'xiaoxiao', 'qwe123', '18378140610', '2002-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('6', 'yuxiaochao', 'qwe123', '18378140629', '2000-01-01', '34566789@qq.com');
INSERT INTO `users` VALUES ('7', 'yuyuyu3', 'qwe123', '18378140622', '2002-01-02', '34546565@qq.com');
INSERT INTO `users` VALUES ('8', 'yuyuyu2', 'qwe123', '18378140628', '1997-10-27', '456789@qq.com');
INSERT INTO `users` VALUES ('9', 'xiaochao', 'qwe123', '18738140520', '2000-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('10', 'yuxiaochao1', 'qwe123', '18378140220', '1000-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('11', 'cccccccc', 'qwe123', '18378989898', '2000-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('12', 'eqweqwe', 'qwe123', '18378898989', '2000-01-01', '3456568@qq.com');
INSERT INTO `users` VALUES ('17', 'ytytyt', 'qwe123', '18378190420', '1000-01-01', '23456789@qq.com');
INSERT INTO `users` VALUES ('14', 'werwer', 'qwe123', '18745265789', '2000-01-01', '4534673446@qq.com');
INSERT INTO `users` VALUES ('16', 'rwerqqeq', 'qwe123', '18738564345', '2000-01-01', '4353453455@qq.ocm');
INSERT INTO `users` VALUES ('18', 'xiaoxiaochao', 'qwe123', '18378150620', '2000-01-01', '3456789@qq.com');
INSERT INTO `users` VALUES ('19', 'wqewqe', 'qwe123', '18378140670', '2000-01-01', '2345678@qq.com');
SET FOREIGN_KEY_CHECKS=1;
