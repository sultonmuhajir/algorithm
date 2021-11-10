"""
|--------------------------------------------------------------------------
| Filter out the geese
|--------------------------------------------------------------------------
|
"""

def goose_filter(birds):
   return list(filter(lambda i: i != "African" and i != "Roman Tufted" and i != "Toulouse" and i != "Pilgrim" and i != "Steinbacher", birds))


geese = {"African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"}
def goose_filter(birds):
    return[x for x in birds if x  not in geese]


def goose_filter(birds):
   return list(filter(lambda x: x not in geese, birds))


def goose_filter(birds):
   for j in geese:    
      for i in birds:    
         if i == j:
            birds.remove(i)
   return birds


print(goose_filter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"])