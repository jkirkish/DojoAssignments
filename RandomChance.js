/*Let's play the slots!

Make a function that takes a number of quarters (1 quarter = 1 game).

There is a 1 in 100 chance to win the slot machine (which will give
 you between 50 - 100 coins - use Math.random and Math.floor to pick
  a random number of coins).

While the user still has quarters, use Math.random to determine if they won.

If they ever win, return the number of quarters (ex: they had 50 remaining
 quarters and won 90, so it should return 140).

Return 0 if all the quarters were wasted.

Bonus (Only If You Have Time):

Let the user pass the number they are willing to leave with
(ex: If they won the lottery and still have 40 coins, they will keep
 playing until they have collected 200 coins)*/

 function quart(quarters)
 {
     coins = Math.floor((Math.random() * 50)+50);


    if(Math.random()>0)
    {
        //this user wins in this case because random was greater than 0
        quarters = quarters + coins;

    }
    else{
        //all of the quarters were wasted
        quarters = 0;
    }
    //console.log(quarters);
    return quarters;
 }

console.log(quart(25));

/*Let the user pass the number they are willing to leave with
(ex: If they won the lottery and still have 40 coins, they will keep
 playing until they have collected 200 coins)*/

 function leaveWith(leveWCoin)
 {
     var coins = (Math.floor((Math.random() * 50)+50));
     console.log("Current level of coins " + coins);
     //while loop shows number of time keep playing until user reaches amount to
     //leave with
     while(Math.random()>0){

         console.log(coins = coins + (Math.floor((Math.random() * 50)+50)));

         if(coins >= leveWCoin)
         {
             console.log("Coins " + coins + " meets the target of" +
             " " + leveWCoin);
             break;
         }
     }
 }
 leaveWith(200);
