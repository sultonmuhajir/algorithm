"""
|--------------------------------------------------------------------------
| Quarter of the year
|--------------------------------------------------------------------------
|
"""

def quarter_of(month):
   return 1 if month<=3 else 2 if month<=6 else 3 if month<=9 else 4


def quarter_of(month):
   return (month + 2) // 3


def quarter_of(month):
   return (month-1) // 3 + 1 


from math import ceil
def quarter_of(month):
   return ceil(month / 3)


print(quarter_of(3), 1)
print(quarter_of(8), 3)
print(quarter_of(11), 4)