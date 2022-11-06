MITM = 192.168.2.233

const path = "/data"
let obj = JSON.parse($response.body)
obj.name = 777
$done({body: JSON.stringify(obj)})
