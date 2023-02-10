"""
|--------------------------------------------------------------------------
| Printing Array elements with Comma delimiters
|--------------------------------------------------------------------------
|
"""

def print_array(arr):
   return ','.join(str(i) for i in arr)


def print_array(arr):
   res = []
   for i in arr:
      res.append(str(i))
   return ','.join(res)


def print_array(arr):
   return ','.join(map(str, arr))


print(print_array([2, 4, 5, 2]),"2,4,5,2")