"""
|--------------------------------------------------------------------------
| Geometry Basics: Distance between points in 2D
|--------------------------------------------------------------------------
|
"""

from math import sqrt, hypot, dist
def distance_between_points(a, b):
   return sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)


def distance_between_points(a, b):
   return hypot(a.x - b.x, a.y - b.y)


def distance_between_points(a, b):
   return dist((a.x, a.y), (b.x, b.y))