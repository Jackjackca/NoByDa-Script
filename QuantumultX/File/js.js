MITM = 192.168.2.233

const path = "/data"
let obj = JSON.parse($response.body)
obj.name = 777
console.log(obj)
$done({body: JSON.stringify(obj)})
