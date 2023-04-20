"""
|--------------------------------------------------------------------------
| Pirates!! Are the Cannons ready!??
|--------------------------------------------------------------------------
|
"""

def cannons_ready(gunners):
   return "Shiver me timbers!" if "nay" in gunners.values() else "Fire!"


def cannons_ready(gunners):
   for i in gunners:
      if gunners[i] == 'nay':
         return 'Shiver me timbers!'
   return 'Fire!'


def cannons_ready(g):
   return ['Fire!','Shiver me timbers!']['nay' in g.values()]


a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'}
b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'}
print(cannons_ready(a),'Fire!')
print(cannons_ready(b),'Shiver me timbers!')