"""
|--------------------------------------------------------------------------
| Merge two sorted arrays into one
|--------------------------------------------------------------------------
|
"""

def merge_arrays(arr1, arr2):
   return sorted(set(arr1+arr2))


def merge_arrays(arr1, arr2):
   return sorted(set(arr1) | set(arr2))


def merge_arrays(arr1, arr2):
   return sorted(dict.fromkeys(arr1 + arr2))


print(merge_arrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8])
print(merge_arrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10])
print(merge_arrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12])