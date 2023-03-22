"""
|--------------------------------------------------------------------------
| For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
|--------------------------------------------------------------------------
|
"""

def quote(fighter):
   if fighter.lower() == "conor mcgregor": return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
   else: return "I am not impressed by your performance."


def quote(fighter):
   return {'george saint pierre': 'I am not impressed by your performance.',
      'conor mcgregor': "I'd like to take this chance to apologize.. To absolutely NOBODY!"}.get(fighter.lower())


def quote(fighter):
   return ["I am not impressed by your performance.",\
   "I'd like to take this chance to apologize.. To absolutely NOBODY!"][fighter.lower() == 'conor mcgregor']


print(quote('george saint pierre'), "I am not impressed by your performance.")
print(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
print(quote('George Saint Pierre'), "I am not impressed by your performance.")
print(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")