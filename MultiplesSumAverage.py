#Write code that prints all the odd numbers from 1 to 1000.
#Use the for loop and don't
#use a list to do this exercise.
for count in range(1,1001):
    if count % 2 != 0:
        print count




#Part II
#Create another program that prints all the multiples of 5
#from 5 to 1,000,000.

for i in range(5,1000000):
    if i % 5 ==0:
      print(i)
#Create a program that prints the sum of all the values
 #in the list: a = [1, 2, 5, 10, 255, 3]"""
a = [1, 2, 5, 10, 255, 3]
total = 0
for i in range(len(a)):
    total += a[i]
    if total == 276:
        print ("Total", total)


 #Create a program that prints the average of the
 #values in the list: b = [1, 2, 5, 10, 255, 3]
b = [1, 2, 5, 10, 255, 3]
total = 0
for i in range(len(b)):
    total += b[i]
    if total==276:
        avg = (total/len(b))
        print ("Average",avg)
