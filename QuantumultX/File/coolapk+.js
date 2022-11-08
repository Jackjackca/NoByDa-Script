let body = $response.body;
let object = JSON.parse(body);
object['data'].forEach((item, index)=>{
    if (index>=2){
        let msg = item['message'];
        if (msg.search('华为')>-1||msg.search('鸿蒙')>-1||msg.search('荣耀')>-1){
            delete object['data'][index];
            console.log('coolapk+:已过滤一条动态');
        }
    }
})

body = JSON.stringify(object);
$done({body});
