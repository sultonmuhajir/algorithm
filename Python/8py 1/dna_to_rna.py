"""
|--------------------------------------------------------------------------
| DNA to RNA Conversion
|--------------------------------------------------------------------------
|
"""

def dna_to_rna(dna):
   return 'U'.join(dna.split('T'))


def DNAtoRNA(dna):
   return dna.replace('T', 'U')


import re
def DNAtoRNA(dna):
   return re.sub('T', 'U', dna)


def DNAtoRNA(dna):
   return dna.translate(dna.maketrans("T", "U"))


print(dna_to_rna("TTTT"), "UUUU")
print(dna_to_rna("GCAT"), "GCAU")
print(dna_to_rna("GACCGCCGCC"), "GACCGCCGCC")