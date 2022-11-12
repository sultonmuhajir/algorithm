"""
|--------------------------------------------------------------------------
| Find the first non-consecutive number
|--------------------------------------------------------------------------
|
"""

def first_non_consecutive(arr):
   for i in range(1, len(arr)):
      if arr[i] != arr[i-1]+1:
         return arr[i]
   return None


def first_non_consecutive(arr):
   return next((j for i, j in zip(arr, arr[1:]) if i + 1 != j), None)


def first_non_consecutive(arr):
   for i in range(1, len(arr)):
      if arr[i] - arr[i-1] > 1:
         return arr[i]


def first_non_consecutive(arr):
   for i, v in enumerate(arr, arr[0]):
      if v != i:
         return v


def first_non_consecutive(arr):
   for i, j in zip(arr, arr[1:]):
      if abs(j-i) > 1:
         return j
   return None


print(first_non_consecutive([1,2,3,4,6,7,8]), 6)
print(first_non_consecutive([1,2,3,4,5,6,7,8]), None)
print(first_non_consecutive([4,6,7,8,9,11]), 6)
print(first_non_consecutive([4,5,6,7,8,9,11]), 11)


# Find the first non-consecutive number