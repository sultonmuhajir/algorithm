"""
|--------------------------------------------------------------------------
| CSV representation of array
|--------------------------------------------------------------------------
|
"""

def to_csv_text(array):
   return "\n".join(",".join(str(j) for j in i) for i in array)


def toCsvText(array) :
   return(str(array).replace('],', '\n').replace('[', '').replace(']', '').replace(' ', ''))  


def toCsvText(array) :
   return '\n'.join(','.join(map(str, i)) for i in array) 


print(
   to_csv_text([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
   ]),
   "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
);