"""
|--------------------------------------------------------------------------
| Sum of positive
|--------------------------------------------------------------------------
|
"""

def positive_sum(arr):
   res = 0
   for i in range(len(arr)):
      if arr[i] > 0:
         res += arr[i]
   return res


positive_sum = lambda a: sum(e for e in a if e > 0)


def positive_sum(arr):
   return sum(x for x in arr if x > 0)


def positive_sum(arr):
   return sum(filter(lambda x: x > 0,arr))


def positive_sum(arr):
   return sum(map(lambda x: x if x > 0 else 0, arr))


def positive_sum(arr):
   return sum( max(i, 0) for i in arr )


print(positive_sum([1,2,3,4,5]),15)
print(positive_sum([1,-2,3,4,5]),13)
print(positive_sum([-1,2,3,4,-5]),9)