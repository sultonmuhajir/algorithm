"""
|--------------------------------------------------------------------------
| Alan Partridge II - Apple Turnover
|--------------------------------------------------------------------------
|
"""

def apple(x):
   return 'It\'s hotter than the sun!!' if int(x) ** 2 > 1000 else 'Help yourself to a honeycomb Yorkie for the glovebox.'


def apple(x):
   if int(x)*int(x) > 1000:
      return "It's hotter than the sun!!"
   else:
      return "Help yourself to a honeycomb Yorkie for the glovebox."


def apple(x):
   return ["It's hotter than the sun!!", "Help yourself to a honeycomb Yorkie for the glovebox."][int(x)**2 < 1000]


print(apple('50'), "It's hotter than the sun!!")
print(apple(4), "Help yourself to a honeycomb Yorkie for the glovebox.")
print(apple("12"), "Help yourself to a honeycomb Yorkie for the glovebox.")
print(apple(60), "It's hotter than the sun!!")