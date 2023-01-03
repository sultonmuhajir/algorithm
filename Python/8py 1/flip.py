"""
|--------------------------------------------------------------------------
| Gravity Flip
|--------------------------------------------------------------------------
|
"""

def flip(d, a):
   return sorted(a) if d == 'R' else list(reversed(sorted(a)))


def flip(d,a):
   return sorted(a, reverse=d=='L')


def flip(d, a):
   return sorted(a) if d=='R' else sorted(a)[::-1]


print(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3])
print(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1])