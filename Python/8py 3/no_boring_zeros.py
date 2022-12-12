"""
|--------------------------------------------------------------------------
| No zeros for heros
|--------------------------------------------------------------------------
|
"""

def no_boring_zeros(n):
   while n % 10 == 0 and n != 0:
      n /= 10
   return n


def no_boring_zeros(n):
   try:
      return int(str(n).rstrip('0'))
   except ValueError:
      return 0


def no_boring_zeros(n):
   return int(str(n).strip('0') or 0)


print(no_boring_zeros(1450), 145)
print(no_boring_zeros(960000), 96)
print(no_boring_zeros(1050), 105)
print(no_boring_zeros(-1050), -105)
print(no_boring_zeros(0), 0)
print(no_boring_zeros(2016), 2016)