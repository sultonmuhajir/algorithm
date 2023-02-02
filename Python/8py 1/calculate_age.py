"""
|--------------------------------------------------------------------------
| How old will I be in 2099?
|--------------------------------------------------------------------------
|
"""

def calculate_age(x, y):
   return "You are 1 year old." if y - x == 1 else "You will be born in 1 year." if y - x == -1 else f"You are {y - x} years old." if y - x > 1 else f"You will be born in {x - y} years." if y - x < -1 else "You were born this very year!"


def calculate_age(birth, curr):
   diff = abs(curr - birth)
   age = "%d year%s" % (diff, "s" * bool(diff-1))
   return "You were born this very year!" if not diff else "You are %s old." % age if curr > birth else "You will be born in %s." % age


def calculate_age(year_of_birth, current_year):
   age = current_year - year_of_birth
   if age == 0:
      return "You were born this very year!"
   elif age > 0:
      return "You are {} year{} old.".format(age, 's' if age > 1 else '')
   else:
      return "You will be born in {} year{}.".format(abs(age), 's' if abs(age) > 1 else '')


print(calculate_age(2012, 2016),"You are 4 years old.")
print(calculate_age(1989, 2016),"You are 27 years old.")
print(calculate_age(2000, 2090),"You are 90 years old.")
print(calculate_age(2000, 1990),"You will be born in 10 years.")
print(calculate_age(2000, 2000),"You were born this very year!")
print(calculate_age(900, 2900),"You are 2000 years old.")
print(calculate_age(2010, 1990),"You will be born in 20 years.")
print(calculate_age(2010, 1500),"You will be born in 510 years.")
print(calculate_age(2011, 2012),"You are 1 year old.")
print(calculate_age(2000, 1999),"You will be born in 1 year.")