"""
|--------------------------------------------------------------------------
| 101 Dalmatians - squash the bugs, not the dogs!
|--------------------------------------------------------------------------
|
"""

def how_many_dalmatians(n):
   return "Hardly any" if n <= 10 else "More than a handful!" if n <= 50 else "101 DALMATIONS!!!" if n >= 101 else "Woah that's a lot of dogs!"


def how_many_dalmatians(n):
   dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
   return dogs[(n>10)+(n>50)+(n==101)]


def how_many_dalmatians(n):
   DOGS = ((100, '101 DALMATIONS!!!'), (50, 'Woah that\'s a lot of dogs!'), (10, 'More than a handful!'), (0, 'Hardly any'))
   return next(msg for total_dogs, msg in DOGS if n > total_dogs)


def how_many_dalmatians(n):
   dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"]
   return dogs[0] if n <= 10 else dogs[1] if n <=50 else dogs[3] if n == 101 else dogs[2]


print(how_many_dalmatians(26), "More than a handful!")
print(how_many_dalmatians(8), "Hardly any")
print(how_many_dalmatians(14), "More than a handful!")
print(how_many_dalmatians(80), "Woah that's a lot of dogs!")
print(how_many_dalmatians(100), "Woah that's a lot of dogs!")
print(how_many_dalmatians(50), "More than a handful!")
print(how_many_dalmatians(10), "Hardly any")
print(how_many_dalmatians(101), "101 DALMATIONS!!!")