# 商标局公告爬虫

## 前言

工作需要刷商标公告的数据，之前有个版本是加了__jsluid_的cookie;最新的更新没有限制了可直接拿到json数据

未做图片的采集，图片的处理请自行分析！

本项目仅供参考所用，请勿用于违法用途，用于违法用途产生的后果与本人无关！

爬虫技术交流可加QQ：76630363

## 主要参数

* page: 1 当前页码
* rows: 20  每页数据条数（自行想象...）
* annNum: 1638 公告期号

## 运行

    npm i  # 安装依赖包
    node wsgg.js # 主程序
    
## 更新tip

### 2019-12-23

此版本没有任何限制，没有任何难度！