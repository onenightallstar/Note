# Note-java-基础知识
简介：java基础知识

---
## 1. 编译运行过程
helloworld.java 经过javac编译 变成helloworld.class 再用java命令运行  
jdk11以上可以直接执行.java文
## 2. java程序执行原理  
.class 程序在各种平台中的jvm上运行，以此编译终身执行
## 3. 变量  
可以定义不给初值，使用时需要

## 4. 标识符  
数字、字母、_、$等组成，不能以数字开头  
变量名称：首字母小写，驼峰形式  
类名称： 首字母大写，驼峰形式

## 5. 各进制的表示  
0B开头当作二进制  
0 开头当作八进制  
0X开头当作十六进制

## 6. 数据类型  
|类型|内存占用|数据范围|
|---|:---:|---|
|byte|1|-128~127|
|short|2|-2^15~2^15-1|
|int（defalut）|4|-2^31~2^31-1|
|long|8|-2^63~2^63-1|
|float|4||
|double(defalut)|8||
|char|2||
|boolean|1||

当定义long和float时 会默认定义成int和double 这个时候需要分别在数字的最后面加L和F来代表定义成相应的数据类型  
## 7. 类型转换  
自动类型转换：小范围直接赋值给大范围  
表达式的自动类型转换  
强制类型转换：alt+enter b=(byte)a 执行原理：后几位直接截取出来

## 8. string中的+
能算则算，不能算则连在一起

## 9. 扩展运算符  
a+=b 相当于 a=(a的类型)(a+b)

## 10. 逻辑运算符   
& 和 | 与 && 和 || 相同，但后者效率更高  
^逻辑异或  
条件表达式 ？ value1 ： value2

## 11. API  （Application Programming Interface）  
应用程序编程接口

## 12. if **vs** switch  
性能好 支持byte、short、int、char、string但不支持double、float、long，只能时字面值不能是变量，且不要忘记写break，否则会出现穿透，最后时defalut

if的功能比switch强大

## 13. 数组  
```java
double[] soures = new double[]{99,23,123};
int [] a={1,2,3};//简化形式
```  
基本原理：a存储者a[0]的地址，之后每个元素都有一个编号
```java
[I@4c873330 //[代表数组，I代表int型，@代表后面时地址
```
动态初始化: 
```java
int[] arr = new int[3];
```
元素默认值：  
byte、short、char、int、long 默认 0  
float、double 默认 0.0  
boolean 默认 false  
类、接口、数组、string 默认 null  
## 14. 数组工作原理  
内存分配：  
    - 方法区：字节码文件先加载到这里  
    - 栈内存：方法运行时所进入的内存、变量  
    - 堆内存：new出来的东西    
    ![Alt text](%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.png)

## 15.Debug工具   
- 断点

## 16. 方法在计算机中的执行原理  
- 栈内存中运行，单入单出，先进后出  

## 17. 形参 int[] arr 来传递数组

## 18. 方法重载 同名但形参列表不同（与修饰符、返回值类型无关）

## 19. 封装  
封装的设计规范：合理隐藏、合理暴露

## 20. javabean 实体类  
- 成员变量都需要私有  
- 并对外提供get和set方法  
- 类必须要有一个公共的无参构造器

## 21. 操作与数据存储类相互分离  
```java
public class Student()
{
    private String a;
    private double b;

    public String getA() {
        return a;
    }

    public void setA(String a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public TypeConversionDemo1() {
    }

    public TypeConversionDemo1(String a, double b) {
        this.a = a;
        this.b = b;
    }
}
public class StudentOperate()
{
    private Student student;
    public StudentOperate(Student student)
    {
        this.student = student;
    }
    public voidPass()
    {
        if(student.getA() >= 60){
            System.out.println("PASS");
        }
        else {
            System.out.println("NO PASS");
        }
    }
}
```
## 22.   
成员变量有默认值无需初始化  局部变量没有默认值使用前必须完成赋值  
成员变量在堆内存  局部变量在栈内存  
