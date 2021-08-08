"""
|--------------------------------------------------------------------------
| Even or Odd
|--------------------------------------------------------------------------
|
"""

def even_or_odd(number):
   return "Even" if number % 2 == 0 else "Odd"


even_or_odd = lambda number: "Odd" if number % 2 else "Even"


def even_or_odd(number):
   return ["Even", "Odd"][number % 2]


def even_or_odd(number):
   if number % 2 == 0:
      return "Even"
   else:
      return "Odd"


print(even_or_odd(2), "Even")
print(even_or_odd(1), "Odd")
print(even_or_odd(0), "Even")
print(even_or_odd(1545452), "Even")
print(even_or_odd(7), "Odd")
print(even_or_odd(78), "Even")
print(even_or_odd(17), "Odd")
print(even_or_odd(74156741), "Odd")
print(even_or_odd(100000), "Even")
print(even_or_odd(-123), "Odd")
print(even_or_odd(-456), "Even")