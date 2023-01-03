"""
|--------------------------------------------------------------------------
| Simple Fun #1: Seats in Theater
|--------------------------------------------------------------------------
|
"""

def seats_in_theater(tot_cols, tot_rows, col, row):
   return (tot_cols - col + 1) * (tot_rows - row)


seats_in_theater = lambda *a:-~(a[0]-a[2])*(a[1]-a[3])


def seats_in_theater(tot_cols, tot_rows, col, row):
   front_cols = tot_cols - col + 1
   front_rows = tot_rows - row
   return front_cols * front_rows


print(seats_in_theater(16,11,5,3) , 96)
print(seats_in_theater(1,1,1,1) , 0)
print(seats_in_theater(13,6,8,3) , 18)
print(seats_in_theater(60,100,60,1) , 99)
print(seats_in_theater(1000,1000,1000,1000) , 0)