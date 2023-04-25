"""
|--------------------------------------------------------------------------
| Return to Sanity
|--------------------------------------------------------------------------
|
"""

def mystery():
   res = {'sanity': 'Hello'}
   return res


mystery = lambda: {'sanity': 'Hello'}


def mystery():
   return {'sanity': 'Hello'}


print(mystery(), {'sanity': 'Hello'}, 'Mystery has not returned to sanity')