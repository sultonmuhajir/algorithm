"""
|--------------------------------------------------------------------------
| Convert boolean values to strings 'Yes' or 'No'.
|--------------------------------------------------------------------------
|
"""

def bool_to_word(boolean):
   return "Yes" if boolean == True else "No"

   
bool_to_word = lambda b: b and "Yes" or "No"


def bool_to_word(bool):
   if bool:
      return 'Yes'
   else:
      return 'No'

      
bool_to_word = {True: 'Yes', False: 'No'}.get


def bool_to_word(bool):
   return ['No', 'Yes'][bool]

   
print(bool_to_word(True), 'Yes')
print(bool_to_word(False), 'No')