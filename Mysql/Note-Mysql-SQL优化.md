# SQL优化
## 1.插入数据
- insert优化：批量插入
- 手动事务提交
    ```
    start transaction;
    ...
    commit
    ```
- 主键顺序插入
- 大批量插入数据，使用load指令
  - 连接服务器时 
    ```
    mysql --local-infile -u root -p
    set global local_infile = 1;
    //设置全局参数local_infile为1，开启恩地加载文件导入数据的开关
    load data local infile '文件目录' into table table_name terminated by '分隔符号' lines terminated by '\n'
    //插入数据
    ```
## 2. 主键优化
- 页分裂：主键乱序插入
- 页合并：当删除记录达到MERGE_THRESHOLD后合并
- 尽量主键长度：二级索引存的时主键
- 尽量顺序插入：发生页合并
- 尽量避免主键的修改

## 3.order by优化
- Using index       查完不用再排序
- Using filesort    查完需要再排序
- 通过建立索引的方式解决

## 4. group by优化

## 5. limit优化
- 覆盖索引+子查询

## 6. count优化
- MyISAM引擎把一个表的总行数放在了 磁盘上
- InnoDB累加
  -  count(主键) 取主键id给服务层，再按行累加
  -  count(字段) 没有not null约束 将每一行的字段都取出来判断是不是null；有not null约束，同主键
  -  count(1) 不取值，放一个1进去累加
  -  count(*) 不去之，直接累加  

## 7. updata优化
- 如果不建立索引 会直接锁整个表
    