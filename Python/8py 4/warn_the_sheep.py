"""
|--------------------------------------------------------------------------
| A wolf in sheep's clothing
|--------------------------------------------------------------------------
|
"""

def warn_the_sheep(queue):
   x = list(reversed(queue)).index("wolf")
   return "Pls go away and stop eating my sheep" if x == 0 else f"Oi! Sheep number {x}! You are about to be eaten by a wolf!"


def warn_the_sheep(queue):
   return 'Pls go away and stop eating my sheep' if queue[-1] == 'wolf' else f'Oi! Sheep number {queue[::-1].index("wolf")}! You are about to be eaten by a wolf!'


def warn_the_sheep(queue):
   n = len(queue) - queue.index('wolf') - 1
   return f'Oi! Sheep number {n}! You are about to be eaten by a wolf!' if n else 'Pls go away and stop eating my sheep'


print(warn_the_sheep(['sheep', 'wolf', 'sheep']), 'Oi! Sheep number 1! You are about to be eaten by a wolf!')
print(warn_the_sheep(['sheep', 'sheep', 'wolf']), 'Pls go away and stop eating my sheep')