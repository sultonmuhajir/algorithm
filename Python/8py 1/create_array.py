"""
|--------------------------------------------------------------------------
| Unfinished Loop - Bug Fixing #1
|--------------------------------------------------------------------------
|
"""

def create_array(n):
   res = []
   for i in range(1, n+1):
      res.append(i)
   return res


def create_array(n):
   return [i for i in range(1,n+1)]


def create_array(n):
   res=[]
   i=1
   while i<=n:
      res+=[i]
      i+= 1
   return res


def create_array(n):
   return list(range(1,n + 1))


print(create_array(1),[1])
print(create_array(2),[1,2])
print(create_array(3),[1,2,3])
print(create_array(4),[1,2,3,4])
print(create_array(5),[1,2,3,4,5])