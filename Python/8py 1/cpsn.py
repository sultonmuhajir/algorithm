"""
|--------------------------------------------------------------------------
| Count of positives / sum of negatives
|--------------------------------------------------------------------------
|
"""

def count_positives_sum_negatives(arr):
   if arr == []:
      return []
   neg = 0
   lisneg = list(filter(lambda x: x < 0, arr))
   lispos = list(filter(lambda x: x > 0, arr))
   for i in range(len(lisneg)):
      neg += lisneg[i]
   return [len(lispos), neg]


count_positives_sum_negatives = lambda arr: [len([e for e in arr if e>0]), sum(e for e in arr if e<0)] if arr else []


def count_positives_sum_negatives(arr):
   pos = sum(1 for x in arr if x > 0)
   neg = sum(x for x in arr if x < 0)
   return [pos, neg] if len(arr) else []


def count_positives_sum_negatives(arr):
   return [len([x for x in arr if x > 0]), sum(filter(lambda x: x < 0, arr))] if len(arr) != 0 else []


print(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65])
print(count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),[8,-50])
print(count_positives_sum_negatives([1]),[1,0])
print(count_positives_sum_negatives([-1]),[0,-1])
print(count_positives_sum_negatives([0,0,0,0,0,0,0,0,0]),[0,0])
print(count_positives_sum_negatives([]),[])