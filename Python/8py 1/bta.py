"""
|--------------------------------------------------------------------------
| How good are you really?
|--------------------------------------------------------------------------
|
"""

def better_than_average(class_points, your_points):
   return your_points > (sum(class_points) + your_points) / (len(class_points)+1)


better_than_average = lambda c,y: __import__("numpy").mean(c)<y
better_than_average = lambda a,b:(sum(a)/len(a))<b


import statistics
def better_than_average(class_points, your_points):
   return your_points > statistics.mean(class_points)


def better_than_average(*args):
   return args[1] > sum(*args) / (len(args[0]) + 1.0)


print(better_than_average([2, 3], 5), True)        
print(better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75), True)        
print(better_than_average([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), True)