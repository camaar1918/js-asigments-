
const name=("abdisamad")

function aler(){
    alert
}
alert()

console.log("waa so daahday")




function getUserData(callback){

    setTimeout(()=>{
        let userData={Name:"Abdisamad",Age:19}
        callback(userData)

    },4000)

}

getUserData(function(userData){
    console.log(userData)
});

console.log("sug xogta intey ka imneysi databsaekaaga mahadsanid ")


