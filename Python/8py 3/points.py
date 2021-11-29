"""
|--------------------------------------------------------------------------
| Total amount of points
|--------------------------------------------------------------------------
|
"""

def points(games):
   res = 0
   for i in range(len(games)):
      score = games[i].split(':')
      res += 3 if score[0] > score[1] else 1 if score[0] == score[1] else 0
   return res


def points(a):
   return sum((x >= y) + 2 * (x > y) for x, y in (s.split(":") for s in a))


def points(games):
   return sum([0,1,3][1+(g[0]>g[2])-(g[0]<g[2])] for g in games)


def points(games):
   result = 0
   for item in games:
      result += 3 if item[0] > item[2] else 0     
      result += 1 if item[0] == item[2] else 0
   return result


def points(games):
   return sum(3 if x > y else 0 if x < y else 1 for x, y in (score.split(":") for score in games))


print(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']), 30)
print(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']), 10)
print(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']), 0)
print(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']), 15)