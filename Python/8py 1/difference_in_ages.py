"""
|--------------------------------------------------------------------------
| Find the Difference in Age between Oldest and Youngest Family Members
|--------------------------------------------------------------------------
|
"""

def difference_in_ages(ages):
   return (min(ages), max(ages), max(ages)-min(ages))


def difference_in_ages(ages):
   x, y = min(ages), max(ages)
   return x, y, y-x


def difference_in_ages(ages):
   age = sorted(ages)
   return (age[0], age[-1], (age[-1]-age[0]))


print(difference_in_ages([0, 110]), (0, 110, 110))
print(difference_in_ages([33, 33, 33]), (33, 33, 0))