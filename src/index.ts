
//A.	Basic
//1.  prime numbers
const primeNum = (arr: number[]): number[] => {
    const primeArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        let primeNum: boolean = true;
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
}
// console.log(primeNum([356, 701, 39, 46, 133]));




//2.  Palindrome
const palindrome = (text: string): boolean => {

    //putting all texts to lowercase and replacing numbers with empty string
    const cleantext: string = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    //checking if the text is palindrome text
    return cleantext === cleantext.split('').reverse().join('');
}
//console.log(palindrome("racecar"));
// console.log(palindrome("hello"));
//console.log(palindrome("radar"))
//console.log(palindrome("level"))
// console.log(palindrome("Was it a car or a cat I saw?"))
// console.log(palindrome("Doc, note: I dissent. A fast never prevents a fatness. I diet on cod"))







//3.   reverse array
const reverseArr = (arr: number[]): number[] => {
    const reverseArr: number[] = [];

    //reversing the given array
    for(let i: number = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }

    return reverseArr;
}
// console.log(reverseArr([1,2,3,4,5]));






//4.	Inplace Array reversing
const reverseArrayInPlace = (arr: number[]): void => {
    let start: number = 0;
    let end: number = arr.length - 1;

    while (start < end) {
        // Swap elements at start and end 
        const temp: number = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move indices inward
        start++;
        end--;
    }
};
const array: number[] = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
// console.log(array);










//5.	Array & Object
type PersonInfo = {
    secondName: string;
    age: number;
};

interface GenderInfo {
    females: Record<string, PersonInfo>;
    males: Record<string, PersonInfo>;
};

const processIdentities = (identities: string[]): GenderInfo => {
    let details: GenderInfo = { females: {}, males: {} };

    identities.forEach(identity => {
        let [fullName, ageString, gender] = identity.split(',').map(item => item.trim());
        let [firstName, secondName] = fullName.split(' ');
        let age = parseInt(ageString);
        let person: PersonInfo = {secondName, age};

        if (gender === 'female') {
            details.females[firstName] = person;
        } else if (gender === 'male') {
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
const sortAndRemovePrimes = (arr: number[]): number[] => {
    const primeNum = (num: number): boolean => {
      if(num <= 1) return false;
      //condition for prime numbers 
      for(let j:number =2; j*j <= num; j++){
        if(num % j === 0) return false;
      }
      return true;  
    };
    const specificNumbers: number[] = [2, 3, 5, 7]; //additional specific numbers to  be removed
    const n: number = arr.length;
    for (let i: number = 0; i < n - 1; i++) {
        for (let j: number = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //setting the array to start at the end and remove all prime numbers
    for (let i: number = arr.length - 1; i >= 0; i--) {
        if (primeNum(arr[i]) || specificNumbers.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }
    return arr;
};
//console.log(sortAndRemovePrimes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));








//C.	Time complexity
function hasMajorityElement(arr: number[]): boolean {
    const counts: { [key: number]: number } = {};
    const n: number = arr.length;
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
const arr1: number[] = [3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3];
// console.log(hasMajorityElement(arr1)); 
const arr2: number[] = [3, 1, 3, 4, 4];
// console.log(hasMajorityElement(arr2)); 









//// Advanced

//the student interface
interface Student {
    name: string;
    age?: number;
}
//the setStudentAgeApi function
let setStudentAgeApi = (student: Student, age: number) => {
    return new Promise<Student>((resolve, reject) => {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
};
//age
let student: Student = { name: "John" };
setStudentAgeApi(student, 20)
    .then((student) => {
        //console.log(student);
    })
    .catch((error) => {
        //console.error(error);
    });








//Practicing    
interface Family {
    fatherName: string;
    motherName: string;
    childrenNumber: number;
    totalNumberOfFamilyMembers?: number;
    }
const addTotalNumberOfFamilyMembers = async (families: Family[]): Promise<Family[]> => {
    const updatedFamilies: Family[] = [];
    for (const family of families) {
        const { fatherName, motherName, childrenNumber } = family;
        // Check if the father's name is Yves 
        if (fatherName.toLowerCase() === 'yves') {
            throw new Error("Yves is not an allowed dad in 2022");
            }
        // Calculate the total number of family members
        const totalNumberOfFamilyMembers = childrenNumber + 2;
        const updatedFamily: Family = { ...family, totalNumberOfFamilyMembers };
        updatedFamilies.push(updatedFamily);
        }
        return updatedFamilies;
    };
const families: Family[] = [
        { fatherName: "John", motherName: "Jane", childrenNumber: 2 },
        // { fatherName: "Yves", motherName: "Alice", childrenNumber: 1 },
        { fatherName: "Michael", motherName: "Emily", childrenNumber: 3 }
    ];
    // Invoke the API function with the families array
    (async () => {
        try {
            const updatedFamilies = await addTotalNumberOfFamilyMembers(families);
            //console.log(updatedFamilies);
        } catch (error: any) {
            //console.error("Error:", error.message);
        }
    })();

    
    