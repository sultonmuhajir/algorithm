"""
|--------------------------------------------------------------------------
| Remove First and Last Character Part Two
|--------------------------------------------------------------------------
|
"""

def array(string):
   return ' '.join(string.split(',')[1:-1]) or None


def array(string):
   return None if len(string.split(",")) < 3 else " ".join(string.split(",")[1:-1])


def array(string):
   split = string.split(",") 
   rmv = split[1:-1]
   return " ".join(rmv) if rmv else None


print(array("1,2,3"), "2")
print(array("1,2,3,4"), "2 3")
print(array("1,2,3,4,5"), "2 3 4")
print(array(""), None)
print(array("1"), None)
print(array("1,2"), None)