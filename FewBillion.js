/*There is an old tale about a king who offered a servant $10,000 as a reward.
The servant instead asked that for 30 days he be given an amount that would
double, starting with a penny. (1 penny for the first day, 2 for the second,
 4 for the third, then 8, 16, 32 pennies, and so on).

Use for loops to answer the following:

How much was the reward after 30 days?
remember, a penny isn't 1, but 0.01

Bonus (Only If You Have Time):

How many days would it take the servant to make $10,000?
How about 1 billion?
In JavaScript, there is a value Infinity, how many days until the servant
has infinite money?*/
function thirtyDays(){
    var reward = 0.01;

    for(var day=1; day<31;day++)
    {
        reward = reward * 2;

    }
    console.log("The reward after 30 days:" + reward);
}


function days(){
    var count = 0;
    var reward1 = 0.01;
    for(var day=1; day<31;day++)
    {

        reward1 = reward1 * 2;
        count++;
        if(reward1 >=10000){
            console.log("Number of days for $10000 is:" + count);
            break;
        }

    }
}

function billion(){
    var count = 0;
    var reward2 = 0.01;

    for(var amount = 1000000000; amount>=0; amount--)
    {

        reward2 = reward2 * 2;
        amount = amount - reward2;
        count++;
        if(amount <= 0){
            console.log("Number of days for $1000000000 is:" + count);
            break;
        }

    }
}

function infinity(){
   var day = 0;
   var amo = Infinity;
   var rew = 0.01;
   while(amo > 0)
   {
       rew = rew * 2;
       amo = amo-rew;
       day++;
   }
    console.log("Numbers of days till infinity is:" + day);
}


thirtyDays();
days();
billion();
infinity();
