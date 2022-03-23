"""
|--------------------------------------------------------------------------
| Fake Binary
|--------------------------------------------------------------------------
|
"""

def fake_bin(x):
   res = []
   for i in range(len(x)):
      res.append('0') if int(x[i]) < 5 else res.append('1')
   return ''.join(res)


def fake_bin(x):
   return ''.join('0' if c < '5' else '1' for c in x)


import string
def fake_bin(s):
   return s.translate(string.maketrans('0123456789', '0000011111'))


def fake_bin(x):
   return ''.join([str(int(i) // 5) for i in x])


def fake_bin(x):
   map = str.maketrans('123456789', '000011111')
   return x.translate(map)


print(fake_bin('45385593107843568'), '01011110001100111')
print(fake_bin('509321967506747'), '101000111101101')
print(fake_bin('366058562030849490134388085'), '011011110000101010000011011')