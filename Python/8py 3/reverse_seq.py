"""
|--------------------------------------------------------------------------
| Reversed sequence
|--------------------------------------------------------------------------
|
"""

def reverse_seq(n):
   res = []
   for i in range(n):
      res.append(n)
      n -= 1
   return res


def reverseseq(n):
   return range(n, 0, -1)


def reverseseq(n):
   return [x for x in range(n,0,-1)]


def reverse_seq(n):
   l = [x for x in range(1,n+1)]
   l.reverse()
   return l


def reverse_seq(n): 
   return list(reversed(range(1,n+1)))


print(reverse_seq(5),[5,4,3,2,1])