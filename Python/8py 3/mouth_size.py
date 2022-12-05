"""
|--------------------------------------------------------------------------
| The Wide-Mouthed frog!
|--------------------------------------------------------------------------
|
"""

def mouth_size(animal): 
   return "small" if animal.lower() == "alligator" else "wide"


def mouth_size(animal): 
   return ["wide","small"][animal.lower()=="alligator"]


def mouth_size(animal):
   return "swmiadlel"[animal.lower() != "alligator"::2]


print(mouth_size("toucan"),"wide")
print(mouth_size("ant bear"),"wide")
print(mouth_size("alligator"),"small")