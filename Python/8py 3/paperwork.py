"""
|--------------------------------------------------------------------------
| Beginner Series #1 School Paperwork
|--------------------------------------------------------------------------
|
"""

def paperwork(n, m):
   return 0 if n < 0 or m < 0 else n * m


paperwork = lambda m,n: m*n if m>0 and n>0 else 0


def paperwork(n, m):
   if m<0 or n<0:
      return 0
   else:
      return n*m


def paperwork(n, m):
   return max(n, 0)*max(m, 0)


paperwork = lambda a,b: a*b if min(a,b)>0 else 0


def paperwork(n, m):
   return n * m if min((n, m)) > 0 else 0


print(paperwork(5,5), 25)
print(paperwork(5,-5), 0)