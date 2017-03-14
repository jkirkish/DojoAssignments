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
        '''attempt["#"] = count'''
        if random_num > 0.5:
            x = round(random.random())
            head = head + 1
            attempt["heads"] = head
            print ("Attempt #" + str(count)+": "+"Throwing a coin... "+"It's a head!",)
        elif random_num < 0.5:
            y = round(random.random())
            tail = tail + 1
            attempt["tails"]=tail
            print ("Attempt #" + str(count)+": "+"Throwing a coin... "+"It's a tail!",)









coinToss()
