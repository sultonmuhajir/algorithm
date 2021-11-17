"""
|--------------------------------------------------------------------------
| Removing Elements
|--------------------------------------------------------------------------
|
"""

def remove_every_other(my_list):
   res = []
   for i in range(len(my_list)):
      if i % 2 == 0:
         res.append(my_list[i])
   return res


def remove_every_other(my_list):
   return my_list[::2]


def remove_every_other(my_list):
   return [v for c,v in enumerate(my_list) if not c%2]


def remove_every_other(my_list):
   return [my_list[i] for i in range(0,len(my_list),2)]


print(remove_every_other(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again'])
print(remove_every_other([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9])