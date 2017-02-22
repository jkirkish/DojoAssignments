var daysUntilMyBirthday = 60;
function Birthday(daysUntilMyBirthday){

    for(daysUntilMyBirthday;daysUntilMyBirthday>-1;daysUntilMyBirthday--)
    {
        console.log("Days left:"+ daysUntilMyBirthday);

        if(daysUntilMyBirthday >=30)
        {
            console.log("Such a long time");
        }
        else if(daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5)
        {
            console.log("Yay, my birthday is near!");
        }
        else if(daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 0)
        {
            console.log("Yippee, ALMOST THERE!");
        }
        else if(daysUntilMyBirthday == 0){

            console.log("Yeah Lets celebrate! OH wait, How come nobody showed up? ");
        }
    }
}
Birthday(daysUntilMyBirthday);
