let obj = {
    "name": "666",
    "job": [
        "worker",
        "CEO"
    ]
}
let body = JSON.stringify(obj)
obj = JSON.parse(body)

obj['name'] = 777
body = JSON.stringify(obj)
console.log(body)
