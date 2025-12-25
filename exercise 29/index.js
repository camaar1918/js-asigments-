

async function userdata(){
    const response=await fetch('./index.json')
    const data=response.json();
    console.log(data)
}
userdata()