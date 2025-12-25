
async function getusers() {

    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new eror('waxajiro eror')
        }

        const data=await response.json()
        console.log(data)

    }
    catch(eror){
        console.log(eror)
    }
    
}

getusers()