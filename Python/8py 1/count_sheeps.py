"""
|--------------------------------------------------------------------------
| Counting sheep...
|--------------------------------------------------------------------------
|
"""

def count_sheeps(sheep):
   return len(list(filter(lambda i: i == True, sheep)))

   
def count_sheeps(a):
   res = 0
   for i in a:
      if i == True:
         res += 1
   return res

   
def count_sheeps(sheep):
   return sheep.count(True)

   
def count_sheeps(sheep):
   return len([x for x in sheep if x])

   
array1 = [True,  True,  True,  False,
          True,  True,  True,  True ,
          True,  False, True,  False,
          True,  False, False, True ,
          True,  True,  True,  True ,
          False, False, True,  True ];
print(result := count_sheeps(array1), 17)