"""
|--------------------------------------------------------------------------
| 8kyu interpreters: HQ9+
|--------------------------------------------------------------------------
|
"""

def HQ9(code):
   LINES = "{0} of beer on the wall, {0} of beer.\nTake one down and pass it around, {1} of beer on the wall."
   SONG = '\n'.join(LINES.format("{} bottles".format(n), "{} bottle".format(n-1)+"s"*(n!=2)) for n in range(99,1,-1) )
   SONG += """
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall."""
   return {'H': 'Hello World!', 'Q': 'Q', '9': SONG}.get(code, None)


def HQ9(code):
   lyrics = '99 bottles of beer on the wall, 99 bottles of beer.\n'
   for i in range(98, 1, -1):
      lyrics += 'Take one down and pass it around, {} bottles of beer on the wall.\n'.format(i)
      lyrics += '{} bottles of beer on the wall, {} bottles of beer.\n'.format(i, i)
   lyrics += 'Take one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
   mapper = {'H': 'Hello World!', 'Q': code, '9': lyrics}
   return mapper.get(code, None)


def HQ9(code):
   nums = list(map(str, range(99, 0, -1))) + ['no more', '99']
   bofb = lambda x, w=True: f"{x} bottle{'s' * (x != '1')} of beer{' on the wall' * w}"
   take, store = 'Take one down and pass it around', 'Go to the store and buy some more'
   phrases = [(f"{take if x != '99' else store}, {bofb(x)}.", f"{bofb(x).capitalize()}, {bofb(x, 0)}.") for x in nums]
   lyrics = '\n'.join(f"{x[1]}\n{y[0]}" for x, y in zip(phrases, phrases[1:]))
   return {'H': 'Hello World!', 'Q': 'Q', '9': lyrics}.get(code, None)


print(HQ9('H'))
print(HQ9('Q'))
print(HQ9('9'))
print(HQ9('X'))