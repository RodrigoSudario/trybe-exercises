let date = document.getElementById("date");

date.addEventListener("keyup", function(){
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
    
});


