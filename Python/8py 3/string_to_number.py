"""
|--------------------------------------------------------------------------
| Convert a String to a Number!
|--------------------------------------------------------------------------
|
"""

def string_to_number(s):
   return int(s)


string_to_number = int


def string_to_number(s):
   if type(s) == str:
      return int("".join(s.split()))
   return s


string_to_number = lambda n: int(n)


def string_to_number(s):
   res = int(s)
   return res


print(string_to_number("1234"), 1234)
print(string_to_number("605"), 605)
print(string_to_number("1405"), 1405)
print(string_to_number("-7"), -7)