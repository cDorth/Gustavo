

function boasmaneiras(){
    let agora = new Date()
    let agora2 = agora.getHours()

    if(agora2 <12){
        alert("Bom dia!")
    }
    else if (agora2 <18){
        alert("Boa Tarde!")
    }
    else{
        alert("Boa Noite!")
    }
}

document.getElementById("boasmaneiras").addEventListener("click", boasmaneiras);