"""
|--------------------------------------------------------------------------
| Crash Override
|--------------------------------------------------------------------------
|
"""

def alias_gen(f_name, l_name):
   try:
      return f"{FIRST_NAME[f_name[0].upper()]} {SURNAME[l_name[0].upper()]}"
   except:
      return "Your name must start with a letter from A - Z."
    

from re import findall
def alias_gen(f, l):
   if findall(r'\b\d', f+' '+l): 
      return 'Your name must start with a letter from A - Z.'
   else: 
      return f'{FIRST_NAME[f[0].upper()]} {SURNAME[l[0].upper()]}'
   

def alias_gen(f_name, l_name):
   if f_name[0].isalpha() and l_name[0].isalpha():
      return "{} {}".format(FIRST_NAME[f_name[0].upper()], SURNAME[l_name[0].upper()])
   else:
      return "Your name must start with a letter from A - Z."
   

print(alias_gen("Mike", "Millington"), "Malware Mike")
print(alias_gen("Fahima", "Tash"), "Function T-Rex")
print(alias_gen("Daisy", "Petrovic"), "Data Payload")
print(alias_gen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.")
print(alias_gen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.")