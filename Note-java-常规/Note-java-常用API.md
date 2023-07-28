# Note-java-常用API 
简介：介绍常用API的使用  
##    
同一个包内可以互相访问  
import引用别的包，如何同名包需要带包地址  
java.long无需导包  

##  String  
java.lang.String  
String的对象时不可变字符串对象  
"..."方式写出的字符串忒堤幸啊，会存储在字符串常量池，且相同内容的字符串只存储一份，但每new以此就会产生一个新对象  

##  ArrayList 集合    
list.remove() 默认删除第一个

## Object
- Object类是java中是所有类的祖宗类
- toString() 返回对象的字符串形式 让子类重写，返回对象内容
- equals() 判断两个对象是否相等（地址）一般子类对其进行重写，判断内容是否一样
- getClass()
- clone() 对象克隆
  - implements Cloneable继承接口