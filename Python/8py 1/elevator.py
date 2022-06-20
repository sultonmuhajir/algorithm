"""
|--------------------------------------------------------------------------
| Closest elevator
|--------------------------------------------------------------------------
|
"""

def elevator(left, right, call):
   return 'left' if abs(call-left) < abs(call-right) else 'right'


def elevator(x, y, r):
   return ['left','right'][abs(r-x)>=abs(r-y)]


def elevator(x, y, r):
   return 'rliegfhtt'[abs(r-x)<abs(r-y)::2]


print(elevator(0, 1, 0), "left")
print(elevator(0, 1, 1), "right")
print(elevator(0, 1, 2), "right")
print(elevator(0, 0, 0), "right")
print(elevator(0, 2, 1), "right")