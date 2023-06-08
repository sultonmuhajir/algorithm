"""
|--------------------------------------------------------------------------
| Color Ghost
|--------------------------------------------------------------------------
|
"""

from random import choice, randint, randrange
class Ghost:
   def __init__(self):
      colors = ['red', 'yellow', 'purple', 'white']
      self.color = choice(colors)


class Ghost(object):
   def __init__(self):
      self.color = ['white', 'yellow', 'purple', 'red'][randint(0, 3)]


class Ghost(object):
   def __init__ (self):
      self.color = ["white",'yellow','purple','red'][randrange (4)]