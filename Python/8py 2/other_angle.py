"""
|--------------------------------------------------------------------------
| Third Angle of a Triangle
|--------------------------------------------------------------------------
|
"""

def other_angle(a, b):
   return 180 - (a + b)


def other_angle(*a):
   return 180 - sum(a)


def other_angle(a,b):
   return 180 - a - b


print(other_angle(30, 60), 90)
print(other_angle(60, 60), 60)
print(other_angle(43, 78), 59)
print(other_angle(10, 20), 150)