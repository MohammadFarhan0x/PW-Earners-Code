// let alokMarks = 46 + 56 + 23;
// let adiMarks = 24 + 24 + 42;
// let karanMarks = 54 + 23 + 65;
// let anuMarks = 65 + 35 + 12;

// console.log(alokMarks);

// let productPrice = 3000;
// let discountAmount = (3000/100) * 10;
// let dileveryCharge = 50;
// let totalAmount = productPrice - discountAmount + dileveryCharge;




// function totalMarks(studentName , mathMark , scienceMark , sansikritMark){
//     console.log(`${studentName } total marks`, mathMark + scienceMark + sansikritMark);
// }

// totalMarks("Alok", 46 , 56 , 23)
// totalMarks("Aadi", 24 , 24 , 42)
// totalMarks("Karan", 54 , 23 , 65)
// totalMarks("Anu", 65 , 35 , 12)






// function greetingMsg(userName = "Guest", greeting = "Hii"){
//     console.log(`${greeting}, ${userName}`);
// }

// greetingMsg("Priyanshu" , "Hii")
// greetingMsg("Sakshi" , )
// greetingMsg("Satyam", "Ki Hall hai")
// greetingMsg("Saif")

function totalMarks(mathMark , scienceMark , sansikritMark){
    return mathMark + scienceMark + sansikritMark;    
}

function CalPercentage(studentName , mathMark , scienceMark , sansikritMark){
    let total = totalMarks(mathMark, scienceMark, sansikritMark);
    let percentage = (total / 300) * 100
    console.log(`${studentName} percentage : ` , percentage);
    return percentage
}

let percentage = CalPercentage("Alok", 46 , 56 , 23)
console.log(`Alok percentage : ` ,  percentage);

// totalMarks("Alok", 46 , 56 , 23)
// totalMarks("Aadi", 24 , 24 , 42)
// totalMarks("Karan", 54 , 23 , 65)
// totalMarks("Anu", 65 , 35 , 12)

// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log(add(5, 7));
// let add = function (num1 , num2){
//     return num1 + num2 
// }

//syntax 1
// let add = num1 => num1 + 4;

//syntax 2
// let add = (num1 , num2) => num1 + num2;

//syntax 3
// let   add =  (num1 , num2) => {
//     return num1 + num2 
// };

// console.log(add(5, 7));