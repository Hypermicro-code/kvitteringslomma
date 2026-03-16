# Kvitteringslomma – Architecture

## MVP architecture

Kvitteringslomma bygges som en offline-first mobilapp.

### Prinsipper

- lokal lagring
- ingen konto
- ingen backend
- ingen automatisk datadeling
- native deling kun når bruker selv velger det

### Lokal datamodell

Hver kvittering består av:

- id
- image_path
- issuer
- date
- amount
- note
- created_at

Kvitteringsbilder lagres lokalt på enheten.
Metadata lagres i lokal database.

---

## Deling

Kvitteringslomma skal støtte enkel deling av enkeltkvitteringer.

### Deling i MVP

I MVP skjer deling via telefonens native delingsmeny.

Bruker kan dele:

- kvitteringsbilde
- PDF

Dette er alltid bruker-initiert deling.

Appen sender ikke data automatisk til servere eller tredjeparter.

---

## Fremtidig deling mellom personer

Kvitteringslomma skal senere støtte en mer målrettet delingsflyt for situasjoner som:

- bruktkjøp
- videresalg
- overføring av garantiunderlag

Eksempel:

Selger deler kvittering med kjøper.

Kjøper kan:
- motta kvitteringen
- lagre den i sin egen Kvitteringslomma
- bruke den senere ved garanti eller reklamasjon

### Prinsipp

Kvitteringen skal kunne følge varen.

Dette kan gi en naturlig nettverkseffekt:

- selger bruker appen for å sende kvittering
- kjøper laster ned appen for å motta og lagre
- kjøper tar appen i bruk videre

Denne funksjonen er ikke del av MVP, men er en viktig del av produktretningen.
