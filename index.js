// Exercise 1:


// SOLUTION
// var weekDays =parseInt(prompt("Please Enter a Number from (1-7)"))

// switch (weekDays) {
//     case 1:
//         alert("Saturday")
//         break;
//     case 2:
//         alert("Sunday")
//         break;
//     case 3:
//         alert("Monday")
//         break;
//     case 4:
//         alert("Tuesday")
//         break;
//     case 5:
//         alert("Wednesday")
//         break;
//     case 6:
//         alert("Thursday")
//         break;
//     case 7:
//         alert("Friday")
//         break;

//     default:
//         alert("You Entered a wrong number!")
//         break;
// }

// Exercise 2:


// var arrOfNames =[];
// for (var i=0 ;i<5 ;i++){
//     var names = prompt("Please Enter 5 names");
//     arrOfNames.push(names);
// }
// console.log(arrOfNames);

// searchName=prompt("Search for a name");

// var index =arrOfNames.indexOf(searchName);

// if (index !== -1) {
//     var arrOfOrder =["first","second","third","fourth","fifth"];
//     alert(`The name is found, and it is the ${arrOfOrder[index]}.`);
//   } else {
//     alert("The name is not found.");
//   }



// Exercise 3 :
// Ask the user to enter a string
// Count the number of words the string has (ex: “Ahmed goes to school by bus” 🡪 6 words)

// SOLUTION


// var text =prompt("Please Enter a string");
// newText=text.split(" ")
// console.log(newText.length + ' '+"words")

// Exercise 4:
// write a function to get random number from 1 to 100

// SOLUTION

// function getRandomNumber() {
//     var randomNumber= Math.floor(Math.random() * 100) + 1;
//     return randomNumber;
// }

// console.log(getRandomNumber());