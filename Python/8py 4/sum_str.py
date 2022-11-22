"""
|--------------------------------------------------------------------------
| Sum The Strings
|--------------------------------------------------------------------------
|
"""

def sum_str(a, b):
   return str((0 if a=="" else int(a)) + (0 if b=="" else int(b)))


def sum_str(a, b):
   return str(int(a or 0) + int(b or 0))


def sum_str(a, b):
   return str(int('0' + a) + int('0' + b))


print(sum_str("4","5"), "9")
print(sum_str("34","5"), "39")
print(sum_str("9",""), "9")
print(sum_str("","9"), "9")
print(sum_str("","") , "0")