"""
|--------------------------------------------------------------------------
| L1: Bartender, drinks!
|--------------------------------------------------------------------------
|
"""

def get_drink_by_profession(param):
   x = param.lower()
   if x == 'jabroni':
      return "Patron Tequila"
   elif x == "school counselor":
      return "Anything with Alcohol"
   elif x == "programmer":
      return "Hipster Craft Beer"
   elif x == "bike gang member":
      return "Moonshine"
   elif x == "politician":
      return "Your tax dollars"
   elif x == "rapper":
      return "Cristal"
   else:
      return "Beer"


def get_drink_by_profession(param):
   return {
      "Jabroni": "Patron Tequila",
      "School Counselor": "Anything with Alcohol",
      "Programmer": "Hipster Craft Beer",
      "Bike Gang Member": "Moonshine",
      "Politician": "Your tax dollars",
      "Rapper": "Cristal"
   }.get(param.title(), "Beer")


def get_drink_by_profession(param):
   param = param.lower().title()
   L = ["Jabroni", "School Counselor",  "Programmer", "Bike Gang Member",  "Politician", "Rapper"]
   L1 =["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"]
   if param in L :
      n = L.index(param)
      return L1[n]
   else : return "Beer"


def get_drink_by_profession(param):
   types = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"]
   drinks = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal"]
   d = dict(zip([t.lower() for t in types], drinks))
   return d.get(param.lower(), 'Beer')


print(get_drink_by_profession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'")
print(get_drink_by_profession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'")
print(get_drink_by_profession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'")