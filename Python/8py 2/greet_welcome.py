"""
|--------------------------------------------------------------------------
| Welcome!
|--------------------------------------------------------------------------
|
"""

def greet(language):
   db = {
      'english': 'Welcome',
      'czech': 'Vitejte',
      'danish': 'Velkomst',
      'dutch': 'Welkom',
      'estonian': 'Tere tulemast',
      'finnish': 'Tervetuloa',
      'flemish': 'Welgekomen',
      'french': 'Bienvenue',
      'german': 'Willkommen',
      'irish': 'Failte',
      'italian': 'Benvenuto',
      'latvian': 'Gaidits',
      'lithuanian': 'Laukiamas',
      'polish': 'Witamy',
      'spanish': 'Bienvenido',
      'swedish': 'Valkommen',
      'welsh': 'Croeso'
   }
   try: return db[language] 
   except: return "Welcome"


def greet(language):
   return db.get(language, "Welcome")


def greet(language):
   if language in db.keys():
      return (db[language])
   else:
      return ('Welcome')


print(greet('english'), 'Welcome')
print(greet('dutch'), 'Welkom')
print(greet('IP_ADDRESS_INVALID'), 'Welcome')
print(greet(''), 'Welcome')
print(greet(2), 'Welcome')