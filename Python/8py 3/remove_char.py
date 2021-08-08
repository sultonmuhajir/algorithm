"""
|--------------------------------------------------------------------------
| Remove First and Last Character
|--------------------------------------------------------------------------
|
"""

def remove_char(s):
   temp = s.replace(s[0], "", 1)
   return temp[:len(temp)-1]


remove_char = lambda x:x[not():-(not())]


def remove_char(s):
   return s[1 : -1]


def remove_char(s):
   s = list(s)
   s.pop()
   s.pop(0)
   return ''.join(s)


def remove_char(s):
   return s.replace(s[0:],s[1:-1]) 


print(remove_char('eloquent'), 'loquen')
print(remove_char('country'), 'ountr')
print(remove_char('person'), 'erso')
print(remove_char('place'), 'lac')
print(remove_char('ok'), '')
print(remove_char('ooopsss'), 'oopss')
print(remove_char('olcsrs'), 'lcsr')