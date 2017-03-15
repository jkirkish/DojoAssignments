'''Write a function that simulates tossing a coin 5,000 times.
Your function should print how many times the head/tail appears.'''
import random

random_num = random.random()
def coinToss():

    print ("Starting the program...")
    head = 0
    tail = 0
    attempt = {}
    for count in range(0,5001):
        random_num = random.random()
        if random_num > 0.5:
            x = round(random.random())
            head = head + 1
            print "Attempt #" + str(count) +": "+"Throwing a coin... "+"It's a head!...","Got", head, "head(s) so far and", tail,"tails(s) so far"
        elif random_num < 0.5:
            y = round(random.random())
            tail = tail + 1
            print "Attempt #" + str(count) +": "+"Throwing a coin... "+"It's a tail!...","Got", head, "head(s) so far and", tail,"tails(s) so far"
    print "Ending the program, thank you!"







coinToss()
