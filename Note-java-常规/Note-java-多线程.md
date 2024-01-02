<!--
 * @Descripttion: 
 * @version: 
 * @Author: Caoke
 * @Date: 2023-07-01 16:37:48
 * @LastEditors: Caoke
 * @LastEditTime: 2023-07-04 19:50:17
-->
# 多线程  
## 1.线程  
程序内部的一条执行流程  
## 2.创建线程  
1. 创建Thread的子类,然后重写Thread的run方法 
- 优点:简单
- 确定:已经继承了Thread不好修改  
```java
public class MyThread extends Thread{
    @Override
    public void run(){
        for (int i = 0; i < 10; i++) {
            System.out.println("Mythread"+i);
        }
    }
}
Thread t = new MyThread();
t.start();
 //重写MyThread（）中run方法即可
```
2. 实现Runnable接口  
- 因为run方法启动线程，不可以返回结果
- 只是实现接口，可以继续继承其他类，实现其他接口，扩展性强
```java
public class MyRunnable implements Runnable
{
    @Override
    public void run(){
        for (int i = 0; i < 10; i++) {
            System.out.println("MyRunnbale"+i);
        }
    }   
}
public class ThreadTest2 {
    public static void main(String[] args) {
        Runnable target = new MyRunnable();
        new Thread(target).start();
        for (int i = 0; i < 10; i++) {
            System.out.println("Threadtest2"+i);
        }
    }
}
```

1. 利用Callable接口、Futuretask类实现  
- 新建类继承Callable接口
- 新建一个Callable对象
- 将Callable的对象封装成一个Futuretask类
- 把线程任务对象Futuretask交给线程对象Thread
- 调用Thread对象的start方法启动线程
- 如果调用get之后上述线程还没有结束，则会等待   
```java
public class Mycallable implements Callable<String> {

    @Override
    public String call() throws Exception {
        System.out.println("Callable生成线程");
        return "callable";
    }
}
//继承Callable接口，并且可以自定义返回类型
public class ThreadTest3 {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        Callable<String> call = new Mycallable();
        //定义对象
        FutureTask<String> f1 = new FutureTask<>(call);
        //将对象交给Futuretask对象，FutrueTask对象继承的RunnableFuture接口，而RunnableFuture接口继承为Runnable和Future，其中Future中有很多函数可使用
        new Thread(f1).start();
        //将Futuretask交给Thread并用start启动
        String rs=f1.get();
        //调用get（）函数即可获得
        System.out.println(rs);
    }
}
```
## 3.线程安全  

## 4.线程同步  
1. 同步代码块
   - synchronized()  
   - 静态方法使用类名.class  
   - 建议使用共享资源作为锁对象，对于实例方法建议使用this作为锁对象
2. 同步方法
    - 增加synchronized修饰词
    - 底层有锁（隐藏）
3. Lock锁  
    - Lock是接口，可以采用它的实现类ReentrantLock()
    - 将加锁放在try，将解锁放到final

## 5.线程池  
- 复用线程的技术
- 工作线程workThread 任务队列WorkQueue
- 如何创建：
  - 使用线程池的接口ExecutorService的实现类ThreadPoolExecutor创建一个线程池对象
    - 
    ```java
    public ThreadPoolExecutor(
    int corePoolSize,/*线程池中核心线程数量*/
    int maximumPoolSize,/*线程池中最大线程数量*/
    long keepAliveTime,/*临时线程存活时间*/
    TimeUnit unit, /*临时线程存活时间单位*/
    BlockingQueue<Runnable> workQueue， /*任务队列*/
    ThreadFactory threadFactory, /*线程工厂*/
    RejectedExecutionHandler handler /*拒绝策略*/
    ) 
    {
        this(
            corePoolSize, 
            maximumPoolSize, 
            keepAliveTime, 
            unit, 
            workQueue,
            threadFactory, 
            defaultHandler,
            handler);
    }
    ```
  - 使用Executor工具类实现线程池
  - 设置最大线程数：
    - 计算密集型：CPU核数 + 1
    - IO密集型：CPU核数 * 2
