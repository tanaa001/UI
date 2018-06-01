
create table "public".users (
  id serial
  , name varchar(10)
  , password varchar(10)
  , number varchar(3)
  , position text
  , user_comment text
  , primary key (id)
);



insert into users ( name, password, id ) values ( 'test1','1111','10' );
insert into users ( name, password, id ) values ( 'test2','2222','20' );
insert into users ( name, password, id ) values ( 'test3','3333','30' );

drop table users


////////////////////////////////////////////////////////////////////////////

create table "public".schedule (
  id serial
  , name varchar(10)
  , place varchar(10)
  , category varchar(3)
  , plans_date date
  , primary key (id)

);


create table "public".member_list (
  id serial
  , name varchar(10)
  , place varchar(10)
  , category varchar(3)
  , plans_date date
  , primary key (id)

);



