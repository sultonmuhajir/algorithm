"""
|--------------------------------------------------------------------------
| Pythagorean Triple
|--------------------------------------------------------------------------
|
"""

def pythagorean_triple(i):
   return sorted(i)[0]**2 + sorted(i)[1]**2 == sorted(i)[2]**2


def pythagorean_triple(integers):
   a, b, c = sorted(integers)
   return a * a + b * b == c * c


def pythagorean_triple(sides):
   return max(sides) ** 2 == sum(x**2 for x in sorted(sides)[:-1])


print(pythagorean_triple([3,4,5]), True)
print(pythagorean_triple([5,3,4]), True)
print(pythagorean_triple([13,12,5]), True)
print(pythagorean_triple([100,3,999]), False)