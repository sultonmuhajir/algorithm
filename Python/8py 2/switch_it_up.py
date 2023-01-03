"""
|--------------------------------------------------------------------------
| Switch it Up!
|--------------------------------------------------------------------------
|
"""

def switch_it_up(number):
   if number == 1:
      return 'One'
   elif number == 2:
      return 'Two'
   elif number == 3:
      return 'Three'
   elif number == 4:
      return 'Four'
   elif number == 5:
      return 'Five'
   elif number == 6:
      return 'Six'
   elif number == 7:
      return 'Seven'
   elif number == 8:
      return 'Eight'
   elif number == 9:
      return 'Nine'
   else:
      return 'Zero'


def switch_it_up(n):
   return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][n]


def switch_it_up(number):
   number_converter={0:"Zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"}
   return number_converter[number]


def switch_it_up(number):
   dict = {
   1: "One",
   2: "Two",
   3: "Three",
   4: "Four",
   5: "Five",
   6: "Six",
   7: "Seven",
   8: "Eight",
   9: "Nine",
   0: "Zero"}
   return dict.get(number)


print(switch_it_up(0), "Zero")
print(switch_it_up(9), "Nine")