# Linux基础命令
## 1. ls
目录打印 
- ls -l 列出属性 rwx读、写、执行
- ls -a\ll 打印详细属性
## 2. cd
- cd 进入目录
- cd .. 返回 cd ../..
- cd - 上一个目录
## 3. pwd 
- 打印当前命令  
## 4. cat+文件
- 打开文件
## 5. head+文件
- 看开头
- head --lines=3 + 文件 看前三行
- tail --lines=3 + 文件 看后三行
- less + 文件 看全文 q退出
- more + 文件 看全文 只能下滑
## 6. nano文本编辑器
## 7. vim文本编辑器
- i键编辑
- esc退出编辑 
- :q退出
- :q!强制退出
## 8. file + 文件
- 看文件属性
## 9. where查找应用目录
## 10. echo 打印
## 11. 编程 
```linux
h="hellow"
echo $h
echo "abc${h}"
```
## mv a b重命名a变成b 