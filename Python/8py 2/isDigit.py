"""
|--------------------------------------------------------------------------
| Is it a number?
|--------------------------------------------------------------------------
|
"""

def isDigit(string):
   try:
      float(string)
      return True
   except:
      return False
   

def isDigit(string):
   return string.lstrip('-').replace('.','').isdigit()


from re import match
def isDigit(string):
   return bool(match(r"^[-+]?\d+\.?\d*?$", string))


print(isDigit("s2324"), False)
print(isDigit("-234.4"), True)