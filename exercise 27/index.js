

function userData(){
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sucess=true;
            if(sucess){
                resolve({name:"abdisamad",age:20})
            } else{ reject(console.log("wax data ah lama so helin"))}
        },2000)
    })
}

userData().then((data)=>{console.log("the data is",data)}).catch((err)=>{console.log("eror",err)})