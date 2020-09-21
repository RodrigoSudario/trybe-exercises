let date = document.getElementById("date");

/* date.addEventListener("keyup", function(){
    let dateNumb = date.value.split("/", 3);
    console.log(dateNumb)
     if(dateNumb[0] > 31){
        alert("Erro de contextualização");
     }
     if(dateNumb[0] < 0){
        alert("Erro de contextualização");
     }
     if(dateNumb[1] > 12){
        alert("Erro de contextualização");
     }
     if(dateNumb[1] < 0){
        alert("Erro de contextualização");
     }
     if(dateNumb[2] > 20){
        alert("Erro de contextualização");
     }
    
}); */

let selectMother = document.getElementById("estado");

let states = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "DF"];

for(let index = 0; index < states.length; index += 1){
   let options = document.createElement("option");
   selectMother.appendChild(options).innerHTML = states[index];
}

