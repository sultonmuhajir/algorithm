"""
|--------------------------------------------------------------------------
| I love you, a little , a lot, passionately ... not at all
|--------------------------------------------------------------------------
|
"""

def how_much_i_love_you(nb_petals):
   return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nb_petals % 6]


def how_much_i_love_you(nb_petals):
   dict = {1:'I love you',
         2:'a little',
         3:'a lot',
         4:'passionately',
         5:'madly',
         0:'not at all'}
   return dict.get(nb_petals % 6)


def how_much_i_love_you(nb_petals):
   return "I love you,a little,a lot,passionately,madly,not at all".split(',')[~-nb_petals%6]


print(how_much_i_love_you(7),"I love you")
print(how_much_i_love_you(3),"a lot")
print(how_much_i_love_you(6),"not at all")