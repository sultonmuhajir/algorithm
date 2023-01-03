"""
|--------------------------------------------------------------------------
| Sum Mixed Array
|--------------------------------------------------------------------------
|
"""

def sum_mix(arr):
   return sum(list(map(lambda i: int(i), arr)))


def sum_mix(arr):
   return sum(map(int, arr))


def sum_mix(arr):
   return sum(int(n) for n in arr)


def sum_mix(arr):
   return eval('+'.join(str(x) for x in arr))


print(sum_mix([9, 3, '7', '3']), 22)
print(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
print(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)
print(sum_mix(['1', '5', '8', 8, 9, 9, 2, '3']), 45)
print(sum_mix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61)