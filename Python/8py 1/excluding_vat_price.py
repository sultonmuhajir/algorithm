"""
|--------------------------------------------------------------------------
| Calculate Price Excluding VAT
|--------------------------------------------------------------------------
|
"""

def excluding_vat_price(price):
   return round(price/1.15, 2) if price != None else -1 


def excluding_vat_price(price):
   try:
      return round(price / 1.15, 2)
   except TypeError:
      return -1


def excluding_vat_price(price):
   return -(not price) or round(price/1.15, 2)


print(excluding_vat_price(230.00), 200.00)
print(excluding_vat_price(123), 106.96)