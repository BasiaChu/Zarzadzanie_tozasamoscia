#zadanie 1
import base64


def szyfrowanie(text):
    zakodowane_bity = base64.b64encode(text.encode('utf-8'))
    return zakodowane_bity.decode('utf-8')


tekst = "Ala ma kota."
zaszyfrowany_tekst = szyfrowanie(tekst)
print("Oryginalny tekst to: " + tekst)
print("Zaszyfrowany tekst to: " + zaszyfrowany_tekst)


#zadanie 2
import random
import string


def generator_hasła():
    znaki = string.ascii_letters + string.digits + string.punctuation
    haslo = ''.join(random.choice(znaki) for _ in range(8))

    while not (any(c.isupper() for c in haslo) and
               any(c.islower() for c in haslo) and
               any(c.isdigit() for c in haslo) and
               any(c in string.punctuation for c in haslo) and
               not any(slowo in haslo for slowo in ["haslo", "123"])):
        haslo = ''.join(random.choice(znaki) for _ in range(8))

    return haslo


bezpieczne_haslo = generator_hasła()
print("Wygenerowane bezpieczne hasło to: " + bezpieczne_haslo)

