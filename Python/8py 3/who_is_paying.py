"""
|--------------------------------------------------------------------------
| Who is going to pay for the wall?
|--------------------------------------------------------------------------
|
"""

def who_is_paying(name):
   return [[name, name[:2]],[name]][len(name)<=2]


def who_is_paying(name):
   return [name] * (len(name) > 2) + [name[:2]]


def who_is_paying(name):
   return [name,name[0:2]] if len(name)>2 else [name]


print(who_is_paying("Mexico"),["Mexico", "Me"])
print(who_is_paying("Melania"),["Melania", "Me"])
print(who_is_paying("Melissa"),["Melissa", "Me"])
print(who_is_paying("Me"),["Me"])
print(who_is_paying(""), [""])
print(who_is_paying("I"), ["I"])