"""
|--------------------------------------------------------------------------
| Dollars and Cents
|--------------------------------------------------------------------------
|
"""

def format_money(amount):
   x = '{:.2f}'.format(amount)
   return f'${x}'


def format_money(amount):
   return '${:.2f}'.format(amount)


def format_money(amount):
   return '$%0.2f' % amount


def format_money(amount):
   return f'${amount:.2f}'


print(format_money(39.99), '$39.99')