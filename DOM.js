const inputBtn = document.getElementById("btn")
const myText = document.getElementById("myText")
const letterCase = document.getElementById("myText")

inputBtn.addEventListener ("click", function validateInput() {

  const inputValue = myText.value 

if (lengthOfUsername(inputValue)===false) {

  return; //stop executing 
} 

if (lowercaseUppercase(inputValue)===false) {

return; //stop executing 
}

if(checkForNumbers(inputValue)===false) {
 
  return; //stop executing 
}

alert ("Codename Accepted")

})

// Function 1: to check length of codename! 

function lengthOfUsername(strlength) {

    if (strlength.length >= 5) {
      return true; 
      
    } else {
      alert("Minimum of 5 characters needed");
      return false; 
      
    }; 
    }

// Function 2: to check for upper and lowercase letters

function lowercaseUppercase(letterCase) {

  
  if (letterCase == letterCase.toUpperCase() ||
      letterCase == letterCase.toLowerCase()) 
  {
  alert("One lowercase and uppercase letter needed");
  return false; 
} else {
  return true; 
};  
}

// Function 3: to check for two numbers 

function checkForNumbers(num) {

if (/(\d.*){2,}/.test(num)) {
  return true; 
  
} else {
  alert("Please enter two numbers!");
  return false; 
  
}; 
}

// Function 4 if all checks passed, alerts user.  

function passed(input) {

  if (checkForNumbers(input) === true &&
     lowercaseUppercase(input) === true &&
      lengthOfUsername(input) === true) {
   
  alert ("passed")
  }
}
