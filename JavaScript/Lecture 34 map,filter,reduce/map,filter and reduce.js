
let originalPrices = [463, 654, 768]

let discountedPrices = []

// for(value of originalPrices){
//     discountedPrices.push(value * 0.9)
// }

originalPrices.forEach((value) => {
    discountedPrices.push(value * 0.9)
})

// console.log(originalPrices);
// console.log(discountedPrices);

const discountedPrices2 = originalPrices.map((value) => {
    return value * 0.9
})

// console.log(discountedPrices2);

let students = [
    {
        name: "farhan",
        mark: 56
    },
    {
        name: "zohran",
        mark: 32
    },
    {
        name: "saad",
        mark: 58
    },
    {
        name: "shyan",
        mark: 23
    },
    {
        name: "shadan",
        mark: 27
    },
]

// let studentNames = []
// students.forEach((value) => {
//     studentNames.push(value.name)
// })

const studentNames = students.map((students) => students.name)
const studentMarks = students.map((students) => students.mark)

// console.log(studentNames, studentMarks);

// let  boostedMarks = students.map((students) => {
//     return {...students, mark : students.mark + 10}
// })

let boostedMarks = students.map(students => ({ ...students, mark: students.mark + 10 }))

// console.log(boostedMarks);

// let failedStudent = []

// students.forEach((students) => {
//     if(students.mark < 33){
//         failedStudent.push(students)
//     }
// })


const failedStudents = students.filter((student) => student.mark < 33).map((student) => student.name)

// const failedStudentName = failedStudents.map((student) => student.name)

// console.log(failedStudents);

let marks = [55, 34, 58, 78, 56]

// let totalMarks = 0;
// marks.forEach((mark) => totalMarks += mark)

// console.log(totalMarks);

const totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(totalMarks);

const attendence = ["present", "present", "absent", "present", "absent", "present"]

// let obj = {}

// attendence.forEach((value) => {
//     if(obj[value]){
//         obj[value] += 1
//     } else {
//         obj[value] = 1
//     }
// })

// console.log(obj);

const obj = attendence.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc
}, {})

console.log(obj);
