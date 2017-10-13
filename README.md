#一个封装了微信JSAPI的库

该库依赖jQuery.js

如果weixin.js 添加了interface属性，则使用该属性的地址进行拉取验证 如：
<script src="js/weixin.js" interface="http://www.baidu.com"></script> //默认拉取认证地址是http://game.sinreweb.com/Game/JsConfig/getSignPackage

如果weixin.js 添加了json属性，则数据类型使用该属性的值 如：
<script src="js/weixin.js" json="json"></script> //默认返回值是Jsonp格式

如果weixin.js 添加了debug属性，则开启调试模式 如：
<script src="js/weixin.js" debug="true"></script> //默认是false
