"""
|--------------------------------------------------------------------------
| Grasshopper - Basic Function Fixer
|--------------------------------------------------------------------------
|
"""

def add_five(num):
   return num + 5


add_five = lambda x: x + 5


def add_five(num):
   return -~(-~(-~(-~(-~(num)))))


print(add_five(5), 10)
print(add_five(0), 5)
print(add_five(-5), 0)