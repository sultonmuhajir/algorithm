"""
|--------------------------------------------------------------------------
| Are You Playing Banjo?
|--------------------------------------------------------------------------
|
"""

def are_you_playing_banjo(name):
	return f'{name} plays banjo' if name[0].lower() == 'r' else f'{name} does not play banjo'


def areYouPlayingBanjo(name):
	return name + (' plays' if name[0].lower() == 'r' else ' does not play') + " banjo"


def areYouPlayingBanjo(name):
	return f"{name} {['does not play', 'plays'][name[0] in 'Rr']} banjo"


def areYouPlayingBanjo(name):
	return "{} {} banjo".format(name, "plays" if name.lower().startswith('r') else "does not play") 


print(are_you_playing_banjo("Martin"), "martin does not play banjo");
print(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
print(are_you_playing_banjo("bravo"), "bravo does not play banjo")
print(are_you_playing_banjo("rolf"), "rolf plays banjo")