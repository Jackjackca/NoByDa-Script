let body = $response.body;
var object = JSON.parse(body);
object['data'].forEach((item, index) => {
    if (index >= 2&&item['message']!==undefined) {
        let msg = item['message'];
        if (msg.indexOf('华为')>-1 || msg.indexOf('鸿蒙') >-1|| msg.indexOf('荣耀')>-1) {
            object['data'].splice(index,1);
            console.log('coolapk+:已过滤一条动态');
        }
    }
})
body = JSON.stringify(object);
$done({body});
