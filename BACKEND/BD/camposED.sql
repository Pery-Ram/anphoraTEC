drop database if exists `camposED`;
create database `camposED`;

use camposED;
create table campos(
	id int primary key auto_increment,
	campo varchar(255)
    ); 
   
   select * from campos;
