"""
|--------------------------------------------------------------------------
| Exclusive "or" (xor) Logical Operator
|--------------------------------------------------------------------------
|
"""

def xor(a, b):
   return a^b


from operator import xor
xor = int.__xor__


def xor(a,b):
   return a != b


def xor(a,b):
   return a is not b


print(xor(False, False), False)
print(xor(True, False), True)
print(xor(False, True), True)
print(xor(True, True), False)