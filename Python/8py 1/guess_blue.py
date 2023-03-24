"""
|--------------------------------------------------------------------------
| Thinkful - Number Drills: Blue and red marbles
|--------------------------------------------------------------------------
|
"""

def guess_blue(bs, rs, bp, rp):
   return (bs-bp) / ((bs-bp)+(rs-rp))


guess_blue = lambda bs, rs, bp, rp: (bs-bp)/(bs+rs-bp-rp)


def guess_blue(blue_start, red_start, blue_pulled, red_pulled):
   remaining_blue = blue_start - blue_pulled
   remaining_red = red_start - red_pulled
   total_remaining = remaining_blue + remaining_red
   return remaining_blue / total_remaining


print(guess_blue(5, 5, 2, 3), 0.6)
print(guess_blue(5, 7, 4, 3), 0.2)
print(guess_blue(12, 18, 4, 6), 0.4)