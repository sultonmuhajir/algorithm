"""
|--------------------------------------------------------------------------
| Name on billboard
|--------------------------------------------------------------------------
|
"""

def billboard(name, price=30):
   return sum([price for i in name])


def billboard(name, price=30):
   return len(name) / (1/price)


def billboard(name, price=30):
   res = 0
   for i in name: res += price
   return res


print(billboard("Jeong-Ho Aristotelis"), 600)
print(billboard("Abishai Charalampos"), 570)
print(billboard("Idwal Augustin"), 420)
print(billboard("Hadufuns John",20), 260)
print(billboard("Zoroaster Donnchadh"), 570)
print(billboard("Claude Miljenko"), 450)
print(billboard("Werner Vigi",15), 165)
print(billboard("Anani Fridumar"), 420)
print(billboard("Paolo Oli"), 270)
print(billboard("Hjalmar Liupold",40), 600)
print(billboard("Simon Eadwulf"), 390)