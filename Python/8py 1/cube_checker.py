"""
|--------------------------------------------------------------------------
| Find out whether the shape is a cube
|--------------------------------------------------------------------------
|
"""

def cube_checker(volume, side):
   return volume > 0 and side > 0 and side ** 3 == volume


def cube_checker(volume, side):
   return (side > 0 < volume) and volume == (side**3)


def cube_checker(volume, side):
   return side > 0 and side ** 3 == volume


print(cube_checker(-12,2), False)
print(cube_checker(8, 3),  False)
print(cube_checker(8, 2),  True)
print(cube_checker(-8,-2), False)
print(cube_checker(0, 0),  False)