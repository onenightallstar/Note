# JUC  
## 1. 进程和线程  
进程:资源分配的最小单位,正在运行的一个应用程序
线程:系统调用的最小单位,多个线程组成一个进程
## 2. 状态  
NEW
RUNNABLE准备就绪  
BLOCKED  
WAITING  
TIME_WATING  
TERMINATE  
## 3. wait/sleep区别  
wait来自object的类,所有对象都可以wait
sleep来自thread类(线程类)   
## 4. 并发/并行
并发:同时对一个资源  
并行:同时对多个资源最后总结  
## 5. 用户线程/守护线程  
用户线程:自定义线程  
守护线程:比如垃圾回收(后台)  
 

