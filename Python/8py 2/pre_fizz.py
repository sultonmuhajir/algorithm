"""
|--------------------------------------------------------------------------
| Pre-FizzBuzz Workout #1
|--------------------------------------------------------------------------
|
"""

def pre_fizz(n):
   return [i for i in range(1, n+1)]


def pre_fizz(n):
   return list(range(1, n+1))


def pre_fizz(n):
   return [i+1 for i in range(n)]


def pre_fizz(n):
   res = []
   for i in range(1, n+1):
      res.append(i)
   return res


print(pre_fizz(1), [1])
print(pre_fizz(2), [1,2])
print(pre_fizz(3), [1,2,3])
print(pre_fizz(4), [1,2,3,4])
print(pre_fizz(5), [1,2,3,4,5])