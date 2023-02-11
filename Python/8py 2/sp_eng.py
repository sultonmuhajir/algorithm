"""
|--------------------------------------------------------------------------
| Do you speak "English"?
|--------------------------------------------------------------------------
|
"""

def sp_eng(sentence): 
   return 'english' in sentence.lower()


def sp_eng(sentence): 
   if str.upper(sentence).find("ENGLISH") != -1: return True
   else: return False


from re import findall, search
def sp_eng(sentence): 
   return 1 if findall(r'(?i)english', sentence) else 0


def sp_eng(sentence): 
   return search(r'english',sentence.lower()) != None


print(sp_eng("english"), True)
print(sp_eng("egnlish"), False)
print(sp_eng("1234egn lis;h"), False)
print(sp_eng("1234english ;k"), True)
print(sp_eng("English"), True)
print(sp_eng("eNgliSh"), True)
print(sp_eng("1234#$%%eNglish ;k9"), True)
print(sp_eng("EGNlihs"), False)
print(sp_eng("1234englihs**"), False)