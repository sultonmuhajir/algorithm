"""
|--------------------------------------------------------------------------
| Area or Perimeter
|--------------------------------------------------------------------------
|
"""

def area_or_perimeter(l , w):
   return l * w if l == w else 2 * (l + w)


area_or_perimeter = lambda a, b : a * b if a == b else 2 * (a + b)


def area_or_perimeter(l , w):
   if l == w:
      return l * w
   else:
      return 2 * (l + w)


def area_or_perimeter(l , w):
   return [(l+w)*2, l*w][(l == w)]


print(area_or_perimeter(4, 4), 16)
print(area_or_perimeter(6, 10), 32)