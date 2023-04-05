"""
|--------------------------------------------------------------------------
| Volume of a Cuboid
|--------------------------------------------------------------------------
|
"""

def getVolumeOfCubiod(length, width, height):
   return length * width * height


getVolumeOfCubiod = lambda l,w,d : l*w*d


from functools import reduce
getVolumeOfCubiod = lambda l,w,h: reduce(lambda x,y:x*y, [l,w,h])


getVolumeOfCubiod = lambda *d: ( (lambda ft, op: ft.reduce(op.mul, d))  (__import__('functools'), __import__('operator')))


import math
def getVolumeOfCubiod(*args):
   return math.prod(args)


print(getVolumeOfCubiod(1, 2, 2), 4)
print(getVolumeOfCubiod(6.3, 2, 5), 63)