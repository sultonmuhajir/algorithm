"""
|--------------------------------------------------------------------------
| Compare within margin
|--------------------------------------------------------------------------
|
"""

def close_compare(a, b, margin=0):
   return 0 if abs(a - b) <= margin else (-1 if a < b else 1)


from numpy import sign
def close_compare(a, b, margin=0):
   return abs(a-b) > margin and sign(a-b)


def close_compare(a, b, margin=0):
   return abs(a-b) > margin and (a>b) - (a<b)


print(close_compare(4, 5), -1)
print(close_compare(5, 5), 0)
print(close_compare(6, 5), 1)
print(close_compare(-6, -5), -1)
print(close_compare(2, 5, 3), 0)
print(close_compare(8.1, 5, 3), 1)
print(close_compare(1.99, 5, 3), -1)