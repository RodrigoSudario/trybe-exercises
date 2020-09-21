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
new window.JustValidate('.my-form', {
   rules: {
       name: {
           required: true,
           minLength: 2,
           maxLength: 40,
       },
       email: {
           required: true,
           maxLength: 50,
       },
       cpf: {
          maxLength: 11,
          required: true,
       },
       address: {
          maxLength: 200,
          required: true,
       },
       city: {
         maxLength: 28,
         required: true,
       },
       estado: {
         required: true,
       },
       home: {
         required: true,
       },
       resum: {
         required: true,
         maxLength: 1000,
       },
       descrição: {
         required: true,
       },
       data: {
          required: true,
       },
   },
});
new window.JustValidate('.my-form', {
   Messages: {
     required: 'The field is required',
     email: 'Please, type a valid email',
     maxLength: 'The field must contain a maximum of :value characters',
     minLength: 'The field must contain a minimum of :value characters',
     password: 'Password is not valid',
     remote: 'Email already exists'
   },
});
new window.JustValidate('.my-form', {
   colorWrong: "#B81111"
});
