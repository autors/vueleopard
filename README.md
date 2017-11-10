# lepoard vue iview admin https://autors.github.io/vueleopard
## Version：v0.5

## Introduction
```
a simple 'vue iview webpack' admin template
simple build
simple develop
simple change
simple give you
```

## Install
```bush
// install dependencies
yarn install
or
npm install
```
## Run
### Development
```bush
npm run dev
```
### Production(Build) ,and access:http://localhost:9528
```bush
npm run build
```

### build nginx configuration ,and access: http://127.0.0.1
```
server {
        listen 80  default_server;
        listen [::]:80 default_server;
        charset UTF-8;

        proxy_set_header        Host            $host;
        proxy_set_header        X-Real-IP       $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        root /httx/run/iview;

        index index.html;

        location / {
           try_files $uri $uri/ @rewrites;
        }

        location @rewrites {
           rewrite ^(.+)$ /index.html last;
        }

        location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
           expires max;
           add_header Pragma public;
           add_header Cache-Control "public, must-revalidate, proxy-revalidate";
        }

  }
```


## 文件结构
```shell
.
├── dist    build 目录
└── src
      ├── api    http调用接口
    ├── assets    图片文件
      ├── components    组件
    ├── router    路由表
     ├── store    全局数据存储
    ├── styles    样式文件
      ├── utils     公共方法
    └── views    视图组件
        ├── dashboard  用户自己展示界面
        ├── layout    模板框架
        └── login     登录
 └── static   引入第三方目录
```


## Display

- home
![](readme_static/main.png)

## License
[MIT](http://opensource.org/licenses/MIT)
