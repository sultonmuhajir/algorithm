"""
|--------------------------------------------------------------------------
| Localize The Barycenter of a Triangle
|--------------------------------------------------------------------------
|
"""

def bar_triang(pa, pb, pc): 
   return [round((pa[0]+pb[0]+pc[0])/3,4), round((pa[1]+pb[1]+pc[1])/3,4)]


def bar_triang(a, b, c):
   return [round(sum(x)/3.0, 4) for x in zip(a, b, c)]


def bar_triang(a, b, c):
   return [round((a[i] + b[i] + c[i]) / 3, 4) for i in [0, 1]]


from numpy import mean
def bar_triang(*points):
   return mean(points, axis=0).round(4).tolist()


print(bar_triang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667])
print(bar_triang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667])
print(bar_triang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333])
print(bar_triang([0, 0], [1, 3], [-1, 6]), [0, 3])
print(bar_triang([0, 0], [1, 6], [8, -6]), [3, 0])