"""
|--------------------------------------------------------------------------
| Are they opposite?
|--------------------------------------------------------------------------
|
"""

def is_opposite(s1,s2):
   return "".join([i.upper() if i.islower() else i.lower() for i in s1]) == s2 and s1 != ""


def is_opposite(s1, s2):
   return bool(s1) and s1.swapcase() == s2


def is_opposite(s1,s2):
   return s1 == s2.swapcase() if s1 else False


print(is_opposite("ab","AB") , True);
print(is_opposite("aB","Ab") , True);
print(is_opposite("aBcd","AbCD") , True);
print(is_opposite("AB","Ab") , False);
print(is_opposite("","") , False);