"""
|--------------------------------------------------------------------------
| pick a set of first elements
|--------------------------------------------------------------------------
|
"""

def first(seq, n=1): 
   return seq[0:n]


first = lambda a,i=1:a[:i]


def first(seq, n=1):
   return [x for i,x in enumerate(seq) if i < n]


print(first(['a', 'b', 'c', 'd', 'e']), ['a'])
print(first(['a', 'b', 'c', 'd', 'e'], 0), [])
print(first(['a', 'b', 'c', 'd', 'e'], 1), ['a'])
print(first(['a', 'b', 'c', 'd', 'e'], 2), ['a', 'b'])
print(first(['a', 'b', 'c', 'd', 'e'], 10), ['a', 'b', 'c', 'd', 'e'])