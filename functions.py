'''Create a function called odd_even that counts
from 1 to 2000. As your loop executes have your
program print the number of that iteration and
specify whether it's an odd or even number'''

def odd_even():
    for count in range(1,2000):
        if count % 2 == 0:
            print("Even:", count)
        else:
            print("Odd:", count)

odd_even()

'''Create a function called 'multiply' that iterates
through each value in a list (e.g. a = [2, 4, 10, 16])
 and returns a list where each value has been multiplied
 by 5.'''


def multiply(a,n):
    a2 = []
    for x in range(len(a)):
        a2.insert(x,a[x]*n)
        if len(a2)==4:
            print a
            print "A new list multiplied by 5"
            print a2


a = [2, 4, 10, 16]
multiply(a,5)
