"""
|--------------------------------------------------------------------------
| N-th Power
|--------------------------------------------------------------------------
|
"""

def index(array, n):
   return array[n]**n if len(array)>n else -1


def index(array, n):
   try: return array[n]**n
   except: return -1


def index(array, n):
   return pow(array[n], n) if n<len(array) else -1


print(index([1, 2, 3, 4],2),9)
print(index([5, 6], 0), 1)
print(index([1, 3, 10, 100],3),1000000)