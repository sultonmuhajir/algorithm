"""
|--------------------------------------------------------------------------
| Enumerable Magic - Does My List Include This?
|--------------------------------------------------------------------------
|
"""

def include(arr, item):
   return item in arr


include = list.__contains__


def include(arr,item):
   for i in arr:
      if i == item:
         return True
   return False


print(include([1,2,3,4], 3), True)
print(include([1,2,4,5], 3), False)