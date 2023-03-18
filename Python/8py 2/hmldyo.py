"""
|--------------------------------------------------------------------------
| How many lightsabers do you own?
|--------------------------------------------------------------------------
|
"""

def how_many_light_sabers_do_you_own(name=None):
   return 18 if name == 'Zach' else 0


def how_many_light_sabers_do_you_own(name = ''):
   return [0, 18][int(name == "Zach")]


def how_many_light_sabers_do_you_own(name=""):
   return {'Zach': 18}.get(name, 0)


def how_many_light_sabers_do_you_own(name=""):
   return 18 * (name == "Zach")


print(how_many_light_sabers_do_you_own("Zach"), 18)
print(how_many_light_sabers_do_you_own(), 0)
print(how_many_light_sabers_do_you_own("zach"), 0)