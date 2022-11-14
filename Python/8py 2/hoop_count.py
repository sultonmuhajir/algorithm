"""
|--------------------------------------------------------------------------
| Keep up the hoop
|--------------------------------------------------------------------------
|
"""

def hoop_count(n):
   return "Great, now move on to tricks" if n >= 10 else "Keep at it until you get it"


def hoop_count(n):
   if n >= 10: 
      return "Great, now move on to tricks"
   else: 
      return "Keep at it until you get it"


def hoopCount(n):
   return ["Keep at it until you get it", "Great, now move on to tricks"][n>=10]


print(hoop_count(3), "Keep at it until you get it") 
print(hoop_count(11), "Great, now move on to tricks")