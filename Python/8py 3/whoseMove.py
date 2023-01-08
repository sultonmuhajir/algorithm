"""
|--------------------------------------------------------------------------
| Simple Fun #261: Whose Move
|--------------------------------------------------------------------------
|
"""

def whoseMove(lastPlayer, win):
   return "white" if lastPlayer == "black" and win == False or lastPlayer == "white" and win == True else "black"


def whoseMove(lastPlayer, win):
   return ["white", "black"][(lastPlayer == "black") == win]


def whoseMove(lastPlayer, win):
   return lastPlayer if win else 'white' if lastPlayer == 'black' else 'black'


def whoseMove(lastPlayer, win):
   return {"white", "black"}.difference({lastPlayer}).pop() if not win else lastPlayer


print(whoseMove('black', False),'white')
print(whoseMove('white', False),'black')
print(whoseMove('black', True),'black')
print(whoseMove('white', True),'white')