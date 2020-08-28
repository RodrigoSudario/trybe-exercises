let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = 1000;

for(let i = 0; i < numbers.length; i += 1){
    if (numbers[i] < smallNumber) {
        smallNumber = numbers[i];       
    }
}  
console.log(`O menor número é ${smallNumber}`);
