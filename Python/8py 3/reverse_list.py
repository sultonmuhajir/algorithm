"""
|--------------------------------------------------------------------------
| Reverse List Order
|--------------------------------------------------------------------------
|
"""

def reverse_list(l):
   l.reverse()
   return l


def reverse_list(l):
   return [r for r in reversed(l)]
   

def reverse_list(l):
   return l[::-1]


def reverse_list(l):
   return list(reversed(l))


print(reverse_list([1,2,3,4]), [4,3,2,1])
print(reverse_list([3,1,5,4]), [4,5,1,3])
print(reverse_list([3,6,9,2]), [2,9,6,3])
print(reverse_list([1]), [1])