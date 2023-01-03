"""
|--------------------------------------------------------------------------
| What's the real floor?
|--------------------------------------------------------------------------
|
"""

def get_real_floor(n):
   return n - (2 if n > 13 else 1 if n > 0 else 0)


def get_real_floor(n):
   if n<=0: return n
   if n<13: return n-1
   if n>13: return n-2


def get_real_floor(n):
   return n - (n > 0) - (n > 13)


print(get_real_floor(1), 0)
print(get_real_floor(5), 4)
print(get_real_floor(15), 13)