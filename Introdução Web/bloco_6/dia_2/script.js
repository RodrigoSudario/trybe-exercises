window.onload = function(){
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
            required: true,
            minLength: 11,
            maxLength: 11,          
         },
         add: {
            required: true,
            maxLength: 200,
         },
         cit: {
            required: true,
            maxLength: 28,
         },
         descrição: {
            required: true,
         },
         data: {
            required: true,
         },
         sta:{
            required: true,
         },
      },
   
   });
   let list = document.querySelector("ol");
   let formValue = document.querySelectorAll("value");
   let btnSbt = document.querySelector("submit");
   btnSbt.addEventListener("click", function(event){
      event.preventDefault();

      /* for(let index = 0; index < 11; index += 1){
         let li = document.createElement("li");
         list.appendChild(li).innerText = formValue[index].value;

      } */
   });
}


