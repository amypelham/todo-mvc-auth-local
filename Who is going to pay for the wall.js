/*Parameters - A string containing one word with the first letter capitalized
Results - An array that contains 2 values: the original string name, the first two letters of the string (both with the first letter capitalized)
Examples - 
    ("Mexico"),["Mexico", "Me"]);
    ("Melania"),["Melania", "Me"]);
    ("Melissa"),["Melissa", "Me"]);
    ("Me"),["Me"]);
    (""), [""]);
    ("I"), ["I"]);
Pseudocode - 
    1. Create a variable that takes the first 2 letters of "name"
    2. Create an array that give the full name and the 2 letter variable
*/

function whoIsPaying(name){
    let truncated = name.slice(0, 2)
    if(name.length <= 2){
      return Array(name)
    }else{
      return Array(name, truncated)
    }
  }