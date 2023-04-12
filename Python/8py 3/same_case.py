"""
|--------------------------------------------------------------------------
| Check same case
|--------------------------------------------------------------------------
|
"""

def same_case(a, b): 
   return -1 if not (a+b).isalpha() else 1 if a.islower() == b.islower() else 0


def same_case(a, b): 
   return ~-a.isalpha() | ~-b.isalpha() | a.islower() ^ b.islower() ^ 1


def same_case(a, b):
   return a.isupper() == b.isupper() if a.isalpha() and b.isalpha() else -1


def same_case(a, b): 
   return -1*(not(a+b).isalpha()) or not a.islower()^b.islower()


print(same_case('C', 'B'), 1)
print(same_case('b', 'a'), 1)
print(same_case('d', 'd'), 1)
print(same_case('A', 's'), 0)
print(same_case('c', 'B'), 0)
print(same_case('b', 'Z'), 0)
print(same_case('\t', 'Z'), -1)
print(same_case('H', ':'), -1)