"""
|--------------------------------------------------------------------------
| A Strange Trip to the Market
|--------------------------------------------------------------------------
|
"""

def is_lock_ness_monster(string):
   return "tree fiddy" in string or "3.50" in string or "three fifty" in string


from re import search
def is_lock_ness_monster(string):
   return bool(search(r'three fifty|tree fiddy|3\.50', string))


def is_lock_ness_monster(string):
   return any(i in string for i in ('tree fiddy', 'three fifty', '3.50'))


print(is_lock_ness_monster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"), True)
print(is_lock_ness_monster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."), False)