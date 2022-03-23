"""
|--------------------------------------------------------------------------
| Get Planet Name By ID
|--------------------------------------------------------------------------
|
"""

def get_planet_name(id):
   return {
      1 : 'Mercury',
      2 : 'Venus',
      3 : 'Earth',
      4 : 'Mars',
      5 : 'Jupiter',
      6 : 'Saturn',
      7 : 'Uranus',
      8 : 'Neptune',
   }.get(id, '')


def get_planet_name(id):
   return ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"][id-1]


def get_planet_name(id):
   planets = {
      1: "Mercury",
      2: "Venus",
      3: "Earth",
      4: "Mars",
      5: "Jupiter",
      6: "Saturn",
      7: "Uranus", 
      8: "Neptune",
   }
   return planets[id]


def get_planet_name(id):
   return [0, "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"][id]


print(get_planet_name(2), 'Venus')
print(get_planet_name(5), 'Jupiter')
print(get_planet_name(3), 'Earth')
print(get_planet_name(4), 'Mars')
print(get_planet_name(8), 'Neptune')
print(get_planet_name(1), 'Mercury')