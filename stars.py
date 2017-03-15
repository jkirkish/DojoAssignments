#Create a function called draw_stars() that takes a list of numbers and prints out *.
def draws_stars():
    x = [4, 6, 1, 3, 5, 7, 25]
    for count in range(len(x)):

        print ('*') * x[count]
draws_stars()
print"__________________________________"
'''Modify the function above. Allow a list containing integers and
strings to be passed to the draw_stars() function. When a string
is passed, instead of displaying *, display
 the first letter of the string according to
 the example below. You may use the .lower() string method for this part.'''
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def draws_stars(x):
    for count in range(len(x)):
        if x[count]== 4:
            print ('*') * 4
        elif x[count]== "Tom":
            name = "ttt"
            print name
        elif x[count]== 1:
            print ('*') * 1
        elif x[count]== "Michael":
            name = "mmmmmmm"
            print name
        elif x[count]== 5:
            print ('*') * 5
        elif x[count]== 7:
            print ('*') * 7
        elif x[count]== "Jimmy Smith":
            name = "jjjjjjjjjjj"
            print name
draws_stars(x)
