"""
|--------------------------------------------------------------------------
| Tip Calculator
|--------------------------------------------------------------------------
|
"""

from math import ceil
def calculate_tip(amount, rating):
   tips = {'terrible': 0,'poor' : .05,'good' : .1,'great' : .15,'excellent' : .2}
   return ceil(amount * tips[rating.lower()]) if rating.lower() in tips else 'Rating not recognised'
   

def calculate_tip(a, r):
   d = dict(zip(['terrible', 'poor','good','great','excellent'], [0, 5, 10, 15, 20]))
   r = r.lower()
   if r in d:
      return (ceil(d[r]*a/100))
   else:
      return 'Rating not recognised'
   

def calculate_tip(amount, rating):
   ratings = {
      "Terrible": 0,
      "Poor": .05,
      "Good": .10,
      "Great": .15,
      "Excellent":.20
   }
   try:
      return ceil(amount * ratings.get(rating.title()))
   except:
      return "Rating not recognised"
   

print(calculate_tip(30, "poor"), 2)
print(calculate_tip(20, "Excellent"), 4)
print(calculate_tip(20, "hi"), 'Rating not recognised')
print(calculate_tip(107.65, "GReat"), 17)
print(calculate_tip(20, "great!"), 'Rating not recognised')