"""
|--------------------------------------------------------------------------
| Name Shuffler
|--------------------------------------------------------------------------
|
"""

def name_shuffler(str_):
   return " ".join(list(reversed(str_.split(" "))))


def name_shuffler(str_):
   return ' '.join(str_.split(' ')[::-1])


def name_shuffler(str_):
   return '%s %s' % tuple(str_.split(' ')[::-1])


print(name_shuffler('john McClane'),'McClane john')
print(name_shuffler('Mary jeggins'),'jeggins Mary')
print(name_shuffler('tom jerry'),'jerry tom')