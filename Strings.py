str = "if monkeys like bananas, then I must be a monkey!"
print str
#print the position of the first instance of the word "monkey"
#Then create a new string where the word"monkey" is replaced wtih a word alligator
print str.find("monkey")
print str.replace("monkey", "alligator")
#Min and Max
x = [2.54,-2.7,12.98]
print "max is", max(x)
print "min is", min(x)
#Print the first and last values in a list like this one: x = ["hello",2,54,-2,7,12,98,"world"]. Now create a new list containing only the first and last values in the
# original list. Your code should work for any list.
x = ["hello", 2,54,-2,7,12,98,"world"]
print x[0]
print x[7]
y = [x[0],x[7]]
print y

#Start with a list like this one: x = [19,2,54,-2,7,12,98,32,10,-3,6]. Sort your list first. Then, split your list in half. Push the list created from the first half to position 0 of the list created from the second half. The output should be: [[-3, -2, 2, 6, 7], 10,
#12, 19, 32, 54, 98]. Stick with it, this one is tough!
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print "split",x[0:5]
y1 = [x[0:5]]
print y1
y1.append(x[5:11])
print y1
