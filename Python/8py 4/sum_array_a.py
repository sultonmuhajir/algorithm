"""
|--------------------------------------------------------------------------
| Sum Arrays
|--------------------------------------------------------------------------
|
"""

def sum_array(a):
   return sum(a)


def sum_array(a):
   sum = 0
   for i in a:
      sum += i
   return sum


def sum_array(a):
   total = 0
   i = 0
   while i < len(a):
      total += a[i]
      i += 1
   return total


print(sum_array([]), 0)
print(sum_array([1, 2, 3]), 6)
print(sum_array([1.1, 2.2, 3.3]), 6.6)
print(sum_array([4, 5, 6]), 15)
print(sum_array(range(101)), 5050)