# 锁
## 1. 全局锁
- flush tables with read lock 加锁
- unlock tables 解锁
- mysqldump -u root -p 1234 数据库名称 > 存储文件.sql
## 2. 表级锁
- 粒度最大，冲突概率最高，并发度最低
- 表锁：read lock 和 write lock
  - lock tables 表名 read/write
  - 表锁除了会限制别的线程的读写外，也会限制本线程接下来的读写操作
- 元数据锁MDL：自动控制，无需显示使用，读取为SHARED_READ,增删改查 SHARED_WRITE, 修改表结构时EXCLUSIVE
- 申请 MDL 锁的操作会形成一个队列，队列中写锁获取优先级高于读锁，一旦出现 MDL 写锁等待，会阻塞后续该表的所有 CRUD 操作。
- 意向锁：IS意向共享锁，IX意向排他  锁，防冲突
- AUTO-INC锁：不是再一个事务提交后才释放，而是再执行完插入语句后就会立即释放。
- 轻量级的锁：然后给该字段赋值一个自增的值，就把这个轻量级锁释放了，而不需要等待整个插入语句执行完后才释放锁
## 3.行级锁
- InooDB支持行级锁，MyISAM不支持
- 力度最小，并发度高，在InnoDB
- Record Lock记录锁 S、X
- GAP LOCK 间隙锁：解决可重复读隔离级别下幻读的现象
- Next_Key Lock 临建锁：Record+Gap
- 插入意向锁

# MVCC
- 事务版本号

