let body = $response.body;
var object = JSON.parse(body);
object['data'].forEach((item, index) => {
    if (index >= 2) {
        let msg = item['message'];
        if (msg.indexOf('华为') || msg.indexOf('鸿蒙') || msg.indexOf('荣耀')) {
            delete object['data'][index];
            console.log('coolapk+:已过滤一条动态');
        }
    }
})

body = JSON.stringify(object);
$done({body});
