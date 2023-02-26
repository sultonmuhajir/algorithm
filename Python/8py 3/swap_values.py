"""
|--------------------------------------------------------------------------
| Swap Values
|--------------------------------------------------------------------------
|
"""

def swap_values(args): 
   temp = args[0]
   args[0] = args[1]
   args[1] = temp


def swap_values(args): 
   args[0], args[1] = args[1], args[0]


def swap_values(args): 
   args.reverse()


print(swap_values([1, 2]))
print(swap_values([1, 2]))