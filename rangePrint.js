/*Create a function that can take a start point, end point,
and skip amount, to print all numbers in the range.

For example: */


function printRange(startpt, endpt, skipAmt){

    for(var start = startpt; start<endpt; start = start + skipAmt)
    {
        console.log(start);
    }

}

function printRangeNeg(startpt, endpt, skipAmt){

    for(var start = startpt; start>endpt; start = start - skipAmt)
    {
        console.log(start);
    }

}

function printRange(startpt, endpt){

    for(var start = startpt; start<endpt; start++)
    {
        console.log(start);
    }
}

function printRange(startpt){

    for(var start = 0; start<startpt;start++)

    {
        console.log(start);
    }
}

printRange(2,10,2);
printRangeNeg(-2,-10,2);
printRange(2,10);
printRange(4);
