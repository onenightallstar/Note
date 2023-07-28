# Linux 系统是如何收发网络包的？
## 1.网络模型
![Alt text](image-4.png)
## 2.DMA技术
- Direct Memory Access，即直接存储器访问。
- Ring buffer 环形缓存
- NAPI机制：不采用中断的方式读取数据
## 3.接收过程
- ![Alt text](image-5.png)

## 4.发送过程
- 应用程序会调用 Socket 发送数据包的接口，由于这个是系统调用，所以会从用户态陷入到内核态中的 Socket 层，内核会申请一个内核态的 sk_buff 内存，将用户待发送的数据拷贝到 sk_buff 内存，并将其加入到发送缓冲区。