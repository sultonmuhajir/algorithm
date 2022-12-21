"""
|--------------------------------------------------------------------------
| Find the position!
|--------------------------------------------------------------------------
|
"""

def position(alphabet):
   return f"Position of alphabet: {ord(alphabet)-96}"


def position(alphabet):
   return "Position of alphabet: %s" % ("abcdefghijklmnopqrstuvwxyz".find(alphabet) + 1)


def position(c):
   return f"Position of alphabet: {'_abcdefghijklmnopqrstuvwxyz'.index(c)}"


print(position("a"), "Position of alphabet: 1")
print(position("z"), "Position of alphabet: 26")
print(position("e"), "Position of alphabet: 5")