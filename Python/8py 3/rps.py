"""
|--------------------------------------------------------------------------
| Rock Paper Scissors!
|--------------------------------------------------------------------------
|
"""

def rps(p1, p2):
   if (p1 == 'scissors' and p2 == 'paper') or (p1 == 'paper' and p2 == 'rock') or (p1 == 'rock' and p2 == 'scissors'):
      return 'Player 1 won!'
   elif (p2 == 'scissors' and p1 == 'paper') or (p2 == 'paper' and p1 == 'rock') or (p2 == 'rock' and p1 == 'scissors'):
      return 'Player 2 won!'
   else:
      return 'Draw!'


rps = lambda a, b: ['Draw!', 'Player 1 won!', 'Player 2 won!'][('srp'.index(a[0]) - 'srp'.index(b[0])) % 3]


def rps(p1, p2):
   beats = {'rock': 'scissors', 'scissors': 'paper', 'paper': 'rock'}
   if beats[p1] == p2:
      return "Player 1 won!"
   if beats[p2] == p1:
      return "Player 2 won!"
   return "Draw!"


def rps(p1, p2):
   hand = {'rock':0, 'paper':1, 'scissors':2}
   results = ['Draw!', 'Player 1 won!', 'Player 2 won!']
   return results[hand[p1] - hand[p2]]


def rps(p1, p2):
   d1 = [('paper','rock'), ('rock', 'scissors'), ('scissors', 'paper')]
   return 'Draw!' if p1 == p2 else "Player {} won!".format(1 if (p1, p2) in d1 else 2)


print(rps('scissors', 'paper'), 'Player 1 won!')
print(rps('scissors', 'rock'), 'Player 2 won!')
print(rps('paper', 'paper'), 'Draw!')