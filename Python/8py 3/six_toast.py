"""
|--------------------------------------------------------------------------
| BASIC: Making Six Toast.
|--------------------------------------------------------------------------
|
"""

def six_toast(num):
   return abs(num - 6)


six_toast = lambda _: _-6 if _>6 else 6-_


def six_toast(num):
   return abs(6 - num)


print(six_toast(15), 9)
print(six_toast(6), 0)
print(six_toast(3), 3)