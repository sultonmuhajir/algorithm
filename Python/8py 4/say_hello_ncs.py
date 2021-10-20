"""
|--------------------------------------------------------------------------
| Welcome to the City
|--------------------------------------------------------------------------
|
"""

def say_hello(name, city, state):
   return f"Hello, {' '.join(name)}! Welcome to {city}, {state}!"


def say_hello(name, city, state):
   return "Hello, {}! Welcome to {}, {}!".format(" ".join(name), city, state)


def say_hello(name, city, state):
   return 'Hello, ' + ' '.join(name) + '! Welcome to ' + city + ', ' + state + '!'


print(say_hello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!','Hello, John Smith! Welcome to Phoenix, Arizona!')
print(say_hello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!',)
print(say_hello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')