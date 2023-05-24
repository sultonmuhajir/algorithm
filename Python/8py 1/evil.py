"""
|--------------------------------------------------------------------------
| Evil or Odious
|--------------------------------------------------------------------------
|
"""

def evil(n):
   return "It's Odious!" if bin(n).count('1') % 2 else "It's Evil!"


def evil(n):
   return "It's %s!" % ["Evil","Odious"][bin(n).count("1")%2]


def evil(n):
   return 'It\'s {}!'.format(('Evil', 'Odious')[bin(n).count('1') % 2])


print(evil(1),"It's Odious!")
print(evil(2),"It's Odious!")
print(evil(3),"It's Evil!")