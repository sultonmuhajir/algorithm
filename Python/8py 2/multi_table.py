"""
|--------------------------------------------------------------------------
| Multiplication table for number
|--------------------------------------------------------------------------
|
"""

def multi_table(number):
   return '\n'.join(list(map(lambda i: f'{i} * {number} = {i*number}', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))


def multi_table(number):
   table = ["{0} * {1} = {2}".format(i, number, i * number) for i in range(1, 11)]
   return '\n'.join(table)


def multi_table(number):
   result = ''
   for i in range(1, 11):
      result += f'{i} * {number} = {i*number}\n'
   return result.rstrip()


def multi_table(n):
   return '\n'.join(f'{i} * {n} = {i*n}' for i in range(1, 11))


print(multi_table(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')
print(multi_table(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10')