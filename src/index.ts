
//prime numbers
const primeNum = (arr: number[]): number[] => {
    const primeArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        let primeNum: boolean = true;
        if (arr[i] <= 1) {
            primeNum = false;
        }
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

console.log(primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]));




//****************************Palindrome************************************************
const palindrome = (text: string): boolean => {
    const cleantext = text.replace(/[^a-z0-9]/g, '').toLowerCase();
    return cleantext === cleantext.split('').reverse().join('');
}

console.log(palindrome("racecar"));
console.log(palindrome("hello"));



// **********************reverse array**************************
const reverseArr = (arr: number[]): number[] => {
    const reverseArray: number[] = [];

    for(let i: number = arr.length - 1; i >= 0; i--){
        reverseArray.push(arr[i]);
    }

    return reverseArray;
}

console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]));



//custom sorting
const sortAndRemovePrimes = (arr: number[]): number[] => {
    const primeNum = (num: number): boolean => {
      if(num <= 1) return false;
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

    for (let i: number = arr.length - 1; i >= 0; i--) {
        if (primeNum(arr[i]) || specificNumbers.includes(arr[i])) {
            arr.splice(i, 1);
        }
    }

    return arr;
};
console.log(sortAndRemovePrimes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));


