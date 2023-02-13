"""
|--------------------------------------------------------------------------
| Define a card suit
|--------------------------------------------------------------------------
|
"""

def define_suit(card):
   if 'C' in card: return 'clubs'
   if 'S' in card: return 'spades'
   if 'D' in card: return 'diamonds'
   if 'H' in card: return 'hearts'


def define_suit(card):
   return {'C':'clubs', 'S':'spades', 'D':'diamonds', 'H':'hearts'}[card[-1]]


def define_suit(card):
   return {'C':'clubs', 'D':'diamonds', 'H':'hearts', 'S':'spades'}.get(card[-1])


print(define_suit('3C'), 'clubs')
print(define_suit('QS'), 'spades')
print(define_suit('9D'), 'diamonds')
print(define_suit('JH'), 'hearts')