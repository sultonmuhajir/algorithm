"""
|--------------------------------------------------------------------------
| Holiday VI - Shark Pontoon
|--------------------------------------------------------------------------
|
"""

def shark(pd, sd, ys, ss, d):
   return 'Alive!' if pd / ys < sd / (ss / 2 if d else ss) else 'Shark Bait!'


def shark(d1, d2, v1, v2, x):
   return "Alive!" if d1 / v1 < d2 / v2 * (x + 1) else "Shark Bait!"


def shark(s,h,a,r,k):
   return ["Shark Bait!","Alive!"][h/r*(k+1)>s/a]


print(shark(12, 50, 4, 8, True), "Alive!")
print(shark(7, 55, 4, 16, True), "Alive!")
print(shark(24, 0, 4, 8, True), "Shark Bait!")