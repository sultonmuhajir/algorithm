"""
|--------------------------------------------------------------------------
| UEFA EURO 2016
|--------------------------------------------------------------------------
|
"""

def uefa_euro_2016(teams, scores):
   res = f'{teams[0]} won!' if scores[0] > scores[1] else f'{teams[1]} won!' if scores[0] < scores[1] else 'teams played draw.'
   return f'At match {teams[0]} - {teams[1]}, {res}'


uefa_euro_2016=lambda t,s:f"At match {t[0]} - {t[1]}, "+(("teams played draw."*(s[0]==s[1]))or f"{t[s[0]<s[1]]} won!")


def uefa_euro_2016(teams, scores):
   return f"At match {teams[0]} - {teams[1]}, {'teams played draw.' if scores[0] == scores[1] else teams[scores.index(max(scores))] + ' won!'}"


print(uefa_euro_2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!")
print(uefa_euro_2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!")
print(uefa_euro_2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.")
print(uefa_euro_2016(['Albania', 'Switzerland'], [1, 2]), "At match Albania - Switzerland, Switzerland won!")
print(uefa_euro_2016(['Republic of Ireland', 'Sweden'], [0, 0]), "At match Republic of Ireland - Sweden, teams played draw.")