"""
|--------------------------------------------------------------------------
| Sum of differences in array
|--------------------------------------------------------------------------
|
"""

def sum_of_differences(arr):
   return 0 if len(arr) <= 1 else max(arr) - min(arr)


def sum_of_differences(arr):
   return max(arr or [0]) - min(arr or [0])


def sum_of_differences(arr):
   arr = sorted(arr, reverse=True)
   return sum(a - b for a, b in zip(arr, arr[1:]))


def sum_of_differences(arr):
   return abs(sum(i-j for i,j in zip(sorted(arr), sorted(arr)[1:])))


print(sum_of_differences([1, 2, 10]), 9)
print(sum_of_differences([-3, -2, -1]), 2)
print(sum_of_differences([1, 1, 1, 1, 1]), 0)
print(sum_of_differences([-17, 17]), 34)