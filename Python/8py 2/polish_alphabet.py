"""
|--------------------------------------------------------------------------
| Polish alphabet
|--------------------------------------------------------------------------
|
"""

def correct_polish_letters(st): 
   x = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z',
   }
   return ''.join([x.get(char, char) for char in st])


def correct_polish_letters(st): 
   return st.translate(st.maketrans("ąćęłńóśźż", "acelnoszz"))


print(correct_polish_letters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
print(correct_polish_letters("Lech Wałęsa"),"Lech Walesa");
print(correct_polish_letters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie")