"""
|--------------------------------------------------------------------------
| Count the Monkeys!
|--------------------------------------------------------------------------
|
"""

def monkey_count(n):
   res = [];
   for i in range(1, n+1):
      res.append(i)
   return res


monkey_count = lambda n: list(range(1, n+1))


def monkey_count(n):
   return range(1, n+1)


def monkey_count(n):
   return [x for x in range(1,n+1)]


def monkey_count(n):
   L=[]
   L.extend(range(1,n+1))
   return(L)


print(monkey_count(5), [1, 2, 3, 4, 5])
print(monkey_count(3), [1, 2, 3])