# Flask
Flask是一个python编写的轻量级web框架，基于Werkzeug WSGI工具箱和Jinja2 模板引擎。Flask使用BSD授权。
## route()装饰器
```python
from flask import  Flask
app=Flask(__name__) #创建一个Flask对象，__name__是必须的，因为Flask需要知道它在哪里被创建，以便正确地加载模板、静态文件和其他一些内容。

@app.route('/')#route()装饰器告诉Flask什么样的URL能触发我们的函数。
def index():
    return 'welcome to my webpage!'
@app.route('/home/user')
def index():
    return 'welcome to my webpage/home/user!'
#默认触发index函数

if __name__=="__main__":
    app.run(port=2020,host="127.0.0.1",debug=True)#debug=True，当代码修改后，服务器会自动重新加载
```
## render_template()函数
```python
from flask import  Flask,render_template  #导入render_template模块
app=Flask(__name__)

@app.route('/')
def index():    
    return render_template("index.html")   #调用render_template函数，传入html文件参数

if __name__=="__main__":
    app.run(port=2020,host="127.0.0.1",debug=True)
```
## GET和POST请求
```python
from flask import  Flask,render_template,request
app=Flask(__name__)

@app.route('/',methods=['GET','POST'])#methods参数告诉Flask这个视图函数接受GET和POST请求

def index():
    if request.method=='POST':
        return 'this is a POST request'
    else:
        return 'this is a GET request'

if __name__=="__main__":
    app.run(port=2020,host="127.0.0.1",debug=True)
```

    
