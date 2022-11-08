let body = $response.body;
let object = JSON.parse(body);
object.forEach((obj, index)=>{
    if (index>=2){
        if (obj['message'].indexOf('华为')>-1||obj['message'].indexOf('鸿蒙')>-1||obj['message'].indexOf('荣耀')>-1){
            delete object['data'][index];
            console.log('coolapk+:已过滤一条动态');
        }
    }
})

body = JSON.stringify(object);
$done({body});
