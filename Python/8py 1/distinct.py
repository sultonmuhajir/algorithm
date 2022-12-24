"""
|--------------------------------------------------------------------------
| Remove duplicates from list
|--------------------------------------------------------------------------
|
"""

def distinct(seq):
   return sorted(set(seq), key = seq.index)


def distinct(seq):
   return list(dict.fromkeys(seq))


def distinct(seq):
   return [v for i, v in enumerate(seq) if v not in seq[:i]]


print(distinct([1]), [1])
print(distinct([1, 2]), [1, 2])
print(distinct([1, 1, 2]), [1, 2])
print(distinct([1, 1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
print(distinct([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]), [1, 2, 3, 4, 5, 6, 7])