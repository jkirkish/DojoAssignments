import random


#random_num = random_num = random.random() * 100

def grades():
    print "Scores and Grades"
    for count in range(0,10):
        random_num = random.random() * 100
        if random_num == 100 or random_num >=90:
            print "Score:",round(random_num),"Your grade is A"
        elif random_num == 89 or random_num >=80:
            print "Score:",round(random_num),"Your grade is B"
        elif random_num == 79 or random_num >=70:
            print "Score:",round(random_num),"Your grade is c"
        elif random_num == 69 or random_num >=60:
            print "Score:",round(random_num),"Your grade is D"
        else:
            print "Score:",round(random_num),"Your grade is F"
    print "End of the program. Bye!"




grades()
