"""
|--------------------------------------------------------------------------
| Grasshopper - Messi Goals
|--------------------------------------------------------------------------
|
"""

la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5
total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals


la_liga_goals, champions_league_goals, copa_del_rey_goals, total_goals = 43, 10, 5, 58


la_liga_goals, champions_league_goals, copa_del_rey_goals = 43, 10, 5
total_goals = sum([la_liga_goals, champions_league_goals, copa_del_rey_goals])


print(total_goals, 58)