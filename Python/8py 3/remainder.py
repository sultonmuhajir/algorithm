"""
|--------------------------------------------------------------------------
| Find the Remainder
|--------------------------------------------------------------------------
|
"""

def remainder(a,b):
   return max(a,b) % min(a,b) if min(a,b) != 0 else None


def remainder(*a):
   a = sorted(a, reverse=True)
   return a[0] % a[1] if a[1] else None


def remainder(a, b):
   a, b = sorted([a, b])
   try:
      return b % a
   except ZeroDivisionError:
      return None


def remainder(a,b):
   if a < b: 
      a, b = b, a      
   return a % b if b else None


print(remainder(17, 5))
print(remainder(13, 72))
print(remainder(0, -1))
print(remainder(0, 1))