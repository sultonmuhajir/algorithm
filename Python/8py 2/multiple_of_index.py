"""
|--------------------------------------------------------------------------
| Multiple of index
|--------------------------------------------------------------------------
|
"""

def multiple_of_index(arr):
   return [v for i, v in enumerate(arr) if i != 0 and v % i == 0]


def multiple_of_index(arr):
   res = []; i = 0
   for elem in arr:
      if i > 0 and elem % i == 0:
         res.append(elem)
      i += 1
   return res


def multiple_of_index(arr):
   return [e for i,e in enumerate(arr) if i and not e%i]


print(multiple_of_index([22, -6, 32, 82, 9, 25]), [-6, 32, 25])
print(multiple_of_index([68, -1, 1, -7, 10, 10]), [-1, 10])
print(multiple_of_index([11, -11]), [-11])
print(multiple_of_index([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68])
print(multiple_of_index([28,38,-44,-99,-13,-54,77,-51]), [38, -44, -99])
print(multiple_of_index([-1,-49,-1,67,8,-60,39,35]), [-49, 8, -60, 35])