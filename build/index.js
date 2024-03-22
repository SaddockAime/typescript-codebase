"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//A.	Basic
//1.  prime numbers
const primeNum = (arr) => {
    const primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        let primeNum = true;
        //removing numbers that are less than 1
        if (arr[i] <= 1) {
            primeNum = false;
        }
        //condition for prime numbers
        for (let j = 2; j * j <= arr[i]; j++) {
            if (arr[i] % j === 0) {
                primeNum = false;
                break;
            }
        }
        if (primeNum) {
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
};
// console.log(primeNum([356, 701, 39, 46, 133]));
//2.  Palindrome
const palindrome = (text) => {
    //putting all texts to lowercase and replacing numbers with empty string
    const cleantext = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    //checking if the text is palindrome text
    return cleantext === cleantext.split('').reverse().join('');
};
//console.log(palindrome("racecar"));
//console.log(palindrome("hello"));
//console.log(palindrome("radar"))
//console.log(palindrome("level"))
//console.log(palindrome("Was it a car or a cat I saw?"))
//console.log(palindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod"))
//3.   reverse array
const reverseArr = (arr) => {
    const reverseArr = [];
    //reversing the given array
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
};
//console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]));
//4.	Inplace Array reversing
const reverseArrayInPlace = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // Swap elements at start and end 
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        // Move indices inward
        start++;
        end--;
    }
};
const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
;
const processIdentities = (identities) => {
    let details = { females: {}, males: {} };
    identities.forEach(identity => {
        let [fullName, ageString, gender] = identity.split(',').map(item => item.trim());
        let [firstName, secondName] = fullName.split(' ');
        let age = parseInt(ageString);
        let person = { secondName, age };
        if (gender === 'female') {
            details.females[firstName] = person;
        }
        else if (gender === 'male') {
            details.males[firstName] = person;
        }
    });
    return details;
};
// Example
const identities = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];
const result = processIdentities(identities);
// console.log(result);
//B.       custom sorting
const sortAndRemovePrimes = (arr) => {
    const primeNum = (num) => {
        if (num <= 1)
            return false;
        //condition for prime numbers 
        for (let j = 2; j * j <= num; j++) {
            if (num % j === 0)
                return false;
        }
        return true;
    };
    const specificNumbers = [2, 3, 5, 7]; //additional specific numbers to  be removed
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //setting the array to start at the end and remove all prime numbers
    for (let i = arr.length - 1; i >= 0; i--) {
        if (primeNum(arr[i]) || specificNumbers.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
};
//console.log(sortAndRemovePrimes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));
//C.	Time complexity
function hasMajorityElement(arr) {
    const counts = {};
    const n = arr.length;
    // Count occurrences of each element
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    // Check if any element occurs more than half of the array size
    for (let num of arr) {
        if (counts[num] > n / 2) {
            return true;
        }
    }
    return false;
}
const arr1 = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
// console.log(hasMajorityElement(arr1)); 
const arr2 = [3, 1, 3, 4, 4];
//the setStudentAgeApi function
const setStudentAgeApi = (student, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
};
// positive age
const student = { name: "John" };
const positiveAge = 25;
setStudentAgeApi(student, positiveAge)
    .then((student) => {
    //console.log("Student age set successfully:", student);
})
    .catch((error) => {
    //console.error("Error:", error);
});
// negative age to trigger the rejection
const negativeAge = -10;
setStudentAgeApi(student, negativeAge)
    .then((student) => {
    //console.log("Student age set successfully:", student);
})
    .catch((error) => {
    //console.error("Error:", error);
});
const addTotalNumberOfFamilyMembers = (families) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedFamilies = [];
    for (const family of families) {
        const { fatherName, motherName, childrenNumber } = family;
        // Check if the father's name is Yves 
        if (fatherName.toLowerCase() === 'yves') {
            throw new Error("Yves is not an allowed dad in 2022");
        }
        // Calculate the total number of family members
        const totalNumberOfFamilyMembers = childrenNumber + 2;
        const updatedFamily = Object.assign(Object.assign({}, family), { totalNumberOfFamilyMembers });
        updatedFamilies.push(updatedFamily);
    }
    return updatedFamilies;
});
const families = [
    { fatherName: "John", motherName: "Jane", childrenNumber: 2 },
    // { fatherName: "Yves", motherName: "Alice", childrenNumber: 1 },
    { fatherName: "Michael", motherName: "Emily", childrenNumber: 3 }
];
// Invoke the API function with the families array
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedFamilies = yield addTotalNumberOfFamilyMembers(families);
        //console.log(updatedFamilies);
    }
    catch (error) {
        //console.error("Error:", error.message);
    }
}))();
