"""
|--------------------------------------------------------------------------
| Drink about
|--------------------------------------------------------------------------
|
"""

def people_with_age_drink(age):
   return 'drink toddy' if age < 14 else 'drink coke' if age < 18 else 'drink beer' if age < 21 else 'drink whisky'


people_with_age_drink = lambda a, d=['toddy','coke','beer','whisky']: 'drink '+d[(a>13)+(a>17)+(a>20)]


def people_with_age_drink(age):
   return 'drink ' + ('toddy' if age < 14 else 'coke' if age < 18 else 'beer' if age < 21 else 'whisky')


def people_with_age_drink(age):
   for a in [[21,'whisky'],[18,'beer'],[14,'coke'],[0,'toddy']]:
      if age >= a[0]:
         return "drink {0}".format(a[1])


def people_with_age_drink(age):
   dic = {tuple(range(0,14)):"drink toddy", tuple(range(14,18)):"drink coke", tuple(range(18,21)):"drink beer"}
   return  dic.get(max(i if age in i else (0,0) for i in dic), "drink whisky") 


print(people_with_age_drink(22), 'drink whisky')