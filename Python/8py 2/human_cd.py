"""
|--------------------------------------------------------------------------
| Cat years, Dog years
|--------------------------------------------------------------------------
|
"""

def human_years_cat_years_dog_years(x):
   return [
      x,
      15 if x == 1 else 24 if x == 2 else 24 + (x - 2) * 4 if x > 2 else 0,
      15 if x == 1 else 24 if x == 2 else 24 + (x - 2) * 5 if x > 2 else 0
   ]


def human_years_cat_years_dog_years(n):
   return [n, 15 if n == 1 else 4 * (n + 4), 15 if n == 1 else 5 * n + 14]


def human_years_cat_years_dog_years(x):
   return [x, 16 + 4 * x, 14 + 5 * x] if x > 1 else [1,15,15]


print(human_years_cat_years_dog_years(1), [1,15,15])
print(human_years_cat_years_dog_years(2), [2,24,24])
print(human_years_cat_years_dog_years(10), [10,56,64])