"""
|--------------------------------------------------------------------------
| Duck Duck Goose
|--------------------------------------------------------------------------
|
"""

def duck_duck_goose(players, goose):
   return players[(goose - 1) % len(players)].name


def duck_duck_goose(players, goose):
   return players[~-goose % len(players)].name


def duck_duck_goose(players, goose):
   return [goosey.name for goosey in players * goose][goose - 1]