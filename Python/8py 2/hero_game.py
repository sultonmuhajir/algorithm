"""
|--------------------------------------------------------------------------
| Grasshopper - Terminal Game #1
|--------------------------------------------------------------------------
|
"""

class Hero:
   def __init__(self, name="Hero"):
      self.name = name
      self.position = "00"
      self.health = 100
      self.damage = 5
      self.experience = 0


class Hero(object):
   def __init__(self, name = 'Hero'):
      self.name, self.position, self.health, self.damage, self.experience = name, '00', 100, 5, 0