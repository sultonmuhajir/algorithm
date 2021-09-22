"""
|--------------------------------------------------------------------------
| You only need one - Beginner
|--------------------------------------------------------------------------
|
"""

def check(seq, elem):
   return elem in seq


from operator import contains as check


def check(s_eq, e_lem):
   return s_eq.count(e_lem) > 0


def check(seq, elem):
   return any(x == elem for x in seq)


print(check([66, 101], 66), True)
print(check([101, 45, 75, 105, 99, 107], 107), True)
print(check(['t', 'e', 's', 't'], 'e'), True)
print(check(['what', 'a', 'great', 'kata'], 'kat'), False)