"""
|--------------------------------------------------------------------------
| If you can't sleep, just count sheep!!
|--------------------------------------------------------------------------
|
"""

def count_sheep(n):
   res = ''
   for i in range(1, n+1):
      res += f'{i} sheep...'
   return res


def count_sheep(n):
   return ''.join(f"{i} sheep..." for i in range(1,n+1))


def count_sheep(n):
   return "".join("%d sheep..." % (i + 1) for i in range(n))


def count_sheep(n):
   return "".join("{} sheep...".format(i) for i in range(1, n+1))


def count_sheep(n):
   return ''.join(f'{x+1} sheep...' for x in range(n))


print(count_sheep(1), "1 sheep...");
print(count_sheep(2), "1 sheep...2 sheep...")
print(count_sheep(3), "1 sheep...2 sheep...3 sheep...")