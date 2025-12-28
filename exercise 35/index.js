

function change(){

    const image=document.querySelector('.img');
    const URL=prompt("enter you url")
    
    let border=prompt("soo gali borderk radiuskaada")

    image.style.borderRadius=(border+'px')

    let widith=prompt("so gali widithka")

    image.style.widith=(widith+'px')
    let height=prompt("so gali widithka")

    image.style.height=(height+'px')
    
    image.setAttribute('src',URL);




   

    

  

}