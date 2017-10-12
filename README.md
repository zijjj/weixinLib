#一个封装了微信JSAPI的库

该库依赖jquery.js

如果weixin.js 添加了interface属性，则使用该属性的地址进行拉取验证 如：
<script src="js/weixin.js" interface="http://www.baidu.com"></script>

如果weixin.js 添加了json属性，则数据类型使用该属性的值 如：
<script src="js/weixin.js" json="json"></script> //默认返回值是Jsonp格式
