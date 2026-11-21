let student = {
    name: "farhan",
    rollNo: 34,
    subjects: ["maths", "physics", "chmistry"],
}

let { subjects: vishaya, totalMarks = 500, ...variable } = student

// console.log(vishaya);
// console.log(totalMarks);

let obj1 = {
    name: "nishant",
    phone: 9935741126
}

let obj2 = {
    country: "india",
    state: "uttarPradesh",
    aadharCard: 695652313085,
    district: "mau",
    name: "farhan"
}

let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);


const arr = [1, 2, 3, 4]

// arr = ["farhan","sahil"]
arr[1] = "updated"
// console.log(arr);

const obj = {
    name: "kasturi",
    rollNo: 33,
    address: null
}

// obj["name"] = "vanshika"
// obj.name = "sahil"

delete obj.rollNo
// console.log(obj);

// console.log(obj.address?.street);

let arr1 = [1,2,3,4,5,6]

// arr1.splice(3,0) // delete
// arr1.splice(3,0,"hello") // add
// arr1.splice(3,2,"hello") // replace
// console.log(arr1);

// let trimArr = arr1.slice(0,2)
// console.log(trimArr);

// console.log(arr1.indexOf(0));
// console.log(arr1.indexOf(6));
// console.log(arr1.indexOf(60));


let res = arr1.find((value) => {
    return value === 5;
})

// console.log(res);

let arr2 = [1,2,3,4,5,6]

let resIndex = arr2.findIndex((value) => {
    if(value === 2){
        return value
    }
})

// console.log(resIndex);

let arr3 = [1,2,3,4,5,[6,7,8,[9,10,11]]]

// console.log(...arr3.flat(Infinity));

let arr4 = [4,5,6,67,78,89]

let arrCopy = arr4;
let arrCopy2 = [...arr4];

arrCopy.pop()

// console.log("arr4",arr4);
// console.log("arrCopy",arrCopy);
// console.log("arrCopy2",arrCopy2);

