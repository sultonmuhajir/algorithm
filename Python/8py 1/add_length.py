"""
|--------------------------------------------------------------------------
| Add Length
|--------------------------------------------------------------------------
|
"""

def add_length(str_):
   return [f"{i} {len(i)}" for i in str_.split(' ')]


def add_length(str_):
   res = []
   for word in str_.split():
      res.append(word + ' ' + str(len(word)))
   return res


def add_length(str_):
   return ['{} {}'.format(word, len(word)) for word in str_.split()]


print(add_length('apple ban'),["apple 5", "ban 3"])
print(add_length('you will win'),["you 3", "will 4", "win 3"])
print(add_length('you'),["you 3"])
print(add_length('y'),["y 1"])