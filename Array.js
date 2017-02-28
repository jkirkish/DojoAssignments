/*Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"],
you will see the following:

[ "James", "Jill", "Jane", "Jack" ]
Let's make it look fancy! Write a function that will make it print like:

0 -> James
1 -> Jill
2 -> Jane
3 -> Jack*/

var FancyArr = [ "James", "Jill", "Jane", "Jack" ];

for(var i = 0; i<FancyArr.length; i++)
{
    console.log(i + " " + "->" + " " + FancyArr[i]);
}

/*Bonus (Only If You Have Time):

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
Have an extra parameter reversed. If the user passes true, print the
elements in reverse order*/


function checkNames(reversed, symbol)
{

    if(reversed)
    {
        var array = ["->", "=>", "::", "-----"];
        for(var i = 3; i>=0; i=i-1)
        {
            if(symbol === array[i])
            {
                symbol = array[i];
            }
             console.log(i + " " + symbol + " " + FancyArr[i]);
        }
    }
}

checkNames(true, "-----");
