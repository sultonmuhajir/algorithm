"""
|--------------------------------------------------------------------------
| Subtract the Sum
|--------------------------------------------------------------------------
|
"""

def subtract_sum(number):
   number = "01100001 01110000 01110000 01101100 01100101"
   return "".join([chr(int(i, 2)) for i in number.split(" ")])


subtract_sum = lambda _: 'apple'


def subtract_sum(number):
   return "apple"


print(subtract_sum(10),"apple")