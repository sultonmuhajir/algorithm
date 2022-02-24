"""
|--------------------------------------------------------------------------
| Lario and Muigi Pipe Problem
|--------------------------------------------------------------------------
|
"""

def pipe_fix(nums):
   res = []
   for i in range(min(nums), max(nums)+1):
      res.append(i)
   return res


def pipe_fix(nums):
   return list(range(nums[0], nums[-1] + 1))


def pipe_fix(num):
   return range(min(num), max(num)+1)


def pipe_fix(l):
   return [x for x in range(min(l), max(l)+1)]


print(pipe_fix([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9])
print(pipe_fix([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
print(pipe_fix([6, 9]), [6, 7, 8, 9])
print(pipe_fix([-1, 4]), [-1, 0, 1, 2, 3, 4])
print(pipe_fix([1, 2, 3]), [1, 2, 3])