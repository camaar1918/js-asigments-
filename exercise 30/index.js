
function operator(x,y,callback){
    return callback(x,y);
}

function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
function mul(x,y){
    return x*y
}
function div(x,y){
    return x/y
}

console.log(operator(20,20,add))
console.log(operator(20,20,sub))
console.log(operator(20,20,mul))
console.log(operator(20,20,div))

