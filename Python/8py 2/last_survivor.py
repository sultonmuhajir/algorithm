"""
|--------------------------------------------------------------------------
| Last Survivor
|--------------------------------------------------------------------------
|
"""

def last_survivor(letters, coords): 
   for i in coords:
      letters = letters[0:i] + letters[i+1:len(letters)]
   return letters


def last_survivor(letters, coords): 
   return ([letters] + [letters := letters[:i] + letters[i+1:] for i in coords])[-1]


def last_survivor(letters, coords): 
   l=[x for x in letters]
   [l.pop(x) for x in coords]
   return l[0]  


def last_survivor(letters, coords): 
   for i in coords:
      letters = letters[:i] + letters[i+1:]
   return letters  


print(last_survivor('abc', [1, 1]), 'a')
print(last_survivor('kbc', [0, 1]), 'b')
print(last_survivor('zbk', [2, 1]), 'z')
print(last_survivor('c', []), 'c')