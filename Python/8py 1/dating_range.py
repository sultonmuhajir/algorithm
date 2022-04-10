"""
|--------------------------------------------------------------------------
| Age Range Compatibility Equation
|--------------------------------------------------------------------------
|
"""

from math import floor
def dating_range(age):
   return f'{floor(age / 2 + 7)}-{floor(age - 7) * 2}' if age > 14 else f'{floor(age - 0.10 * age)}-{floor(age + 0.10 * age)}'


def dating_range(age):
   return "%d-%d" % (.9*age, 1.1*age) if age < 15 else "%d-%d" % (age/2 + 7, (age - 7) * 2)


def dating_range(age):
   return f'{int(age/2+7)}-{(age-7)*2}' if age > 14 else f'{int(0.9*age)}-{int(1.1*age)}'


def dating_range(age):
   return "{}-{}".format(int(age*0.9),int(age*1.1)) if age<=14 else "{}-{}".format(int(age/2+7),int((age-7)*2))


print(dating_range(17), "15-20")
print(dating_range(40), "27-66")
print(dating_range(15), "14-16")
print(dating_range(35), "24-56")
print(dating_range(10), "9-11")