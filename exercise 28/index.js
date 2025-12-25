
function userData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sucess=true
            if(sucess){
                resolve({id:13444,name:"abdisamad"})
            }else{reject("waxaa jiro eror xog lama helin")}

        },2000)
    })
}

async function user(){
    try{
        const data=await userData()
        console.log(data)
    } catch(eror){
        console.log("waxaa jiro eorr",eror)
    }
   
}

user()