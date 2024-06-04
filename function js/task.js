/*function sayhello(name, ) {
  {
    console.log(`hello ${name}`);
  } 
}
sayhello("osama", );


function years(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
years(2002, 2024);

function cale(num1, num2) {
  return num1 + num2;
}
let sum = cale(10, 20);
console.log(sum + 20);


function cale(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = +numbers[i];
  }
  return `${result}`;
}
console.log(cale(10, 20, 10, 30, 10));


function tellFortune(jop, loc, name, numchild) {
  console.log(
    ` You will be a ${jop} in ${loc}, and married to ${name} with ${numchild} kids.`
  );
}
tellFortune("software", "jordan", "osama", 4);


function cale(agedog) {
  console.log(`your dog is ${agedog}`);
  return agedog * 7;
}

console.log(cale(29));



3



*/

/*
function sayhello(name) {
  {
    console.log(`hello ${name}`);
  }
}
sayhello("osama");



/*
5
what is the error:
function double(x) {
  return 2 * x;
}

function double(cat) {
  return 2 * cat;
}

function double(7) {
  return 2 * x;
}



6
fix these functions:
func double1(x {        
  return 2 * x ;
}
finction doubble1(x){

      return 2*x;


}




function double2 (x){
return 2 * x;
}



function double3 (x)  {
  return 2 * x;



function cupe(num) {
  return (sum = num * num * num);
}
cupe(4);
console.log(sum);



function cale(num1, num2) {
  return num1 * num2;
}
let sum = cale(3, 4);
console.log(sum);



function can(age) {
  if (age > 20) {
    console.log(`yes i can`);
  } else {
    console.log(`please ome back ${20 - age}  years to get one`);
  }
}
can(10);

function sameLength(str1, str2) {
  return str1.length == str2.length;
}
console.log(sameLength("tree", "clue"));
console.log(sameLength("tree", "caa"));


function larg(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else num1 < num2;
  console.log(num2);
}
larg(50, 60);


function smallerNumber(num1, num2, num3) {
  let smallest = Math.min(num1, num2, num3);
  return smallest;
}

let result = smallerNumber(7, 5, 10);
console.log(result);

13?14

/*
function even(num) {
  if (num % 2 == 0) {
    console.log(`${num}is even`);
  } else console.log(`${num}is odd`);
}
even(8);

function pos(num) {
  if (num < 0) {
    return num * -1;
  }
}
console.log(pos(-2));

/*
function fullname(first, last) {
  console.log(`${first} ${last}`);
}
fullname("osama", "alabsi");


function pos(num) {
  if (num < 0) {
    return num * -1;
  } else {
    return num;
  }
}
console.log(pos(-2));


function average(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;

  let avg = sum / 5;

  return avg;
}

const result = average(10, 20, 30, 40, 50);
console.log(result);


function randomNumber() {
      return Math.random();
    }
    
    let random = randomNumber();
    console.log(random * (1- 1) + 1);

function randomNumber() {
  return Math.random();
}

let random = randomNumber();
console.log(random * (8 - 1) + 1);


function cal(num) {
  if (num >= 95 && num <= 100) {
    console.log(`A`);
  } else if (num >= 85 && num <= 94) {
    console.log(`B`);
  }
}
cal(90);

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let myCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
*/
function longerString(string1, string2, string3, string4) {
  // Create an array of the four strings
  const strings = [string1, string2, string3, string4];

  // Find the index of the first longest string using reduce
  const longestIndex = strings.reduce((longest, current, index) => {
    // If the current string is longer than the previous longest
    if (current.length > strings[longest].length) {
      return index; // Return the current index
    }
    // If lengths are equal, prioritize earlier strings for consistency
    else if (current.length === strings[longest].length && index < longest) {
      return index; // Prioritize earlier string if lengths are equal
    }
    return longest; // Otherwise, keep the previous longest index
  }, 0); // Initial longest index is 0 (first string)

  // Return the longest string based on the index
  return strings[longestIndex];
}

// Example usage with various string orders:
console.log(longerString("air", "school", "car", "github")); // Output: school
console.log(longerString("air", "schoo", "car", "github")); // Output: github
console.log(longerString("car", "github", "air", "school")); // Output: github
console.log(longerString("school", "car", "air", "github")); // Output: school
console.log(longerString("github", "school", "car", "air"));
