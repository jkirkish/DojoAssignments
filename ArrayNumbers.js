
/*Numbers Only
Make a function that copies an array, ONLY accepting the items that are numbers.

IT SHOULD RETURN A NEW ARRAY*/


var numbersOnly = [1, "apple", -3, "orange", 0.5];

function Array(numbersOnly){
    var numbersOnly1= [];
    for(var i = 0; i < numbersOnly.length; i++)
    {

           if(typeof numbersOnly[i] === "number")
           {
               numbersOnly1[i] = numbersOnly[i];
           }

    }
          return numbersOnly1;
}

console.log(Array(numbersOnly));

//Bonus (Only If You Have Time):

/*Make a second function that removes them from the given array.
 (instead of copying to a new array)
Do you need to return the array?*/

function Array1(numbersOnly){

    var number = 1
    for(var i =0; i < numbersOnly.length; i++){


        if(typeof numbersOnly[i] === "number")
           {
               delete numbersOnly[i];
           }
       }
       return numbersOnly;
}
console.log(Array1(numbersOnly));
