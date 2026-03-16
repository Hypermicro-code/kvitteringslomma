Kvitteringslomma – Project Setup Document
Prosjekt

Navn: Kvitteringslomma
Organisasjon: Morning Coffee Labs
Produkttype: Mobilapp
Plattform: Android først (iOS mulig senere)

1. Produktformål

Kvitteringslomma er et lite, raskt og ryddig verktøy for å lagre kvitteringer digitalt.

Appen skal gjøre det mulig å:

Ta bilde av en kvittering

Lagre den raskt

Finne den igjen senere

Eksportere eller dele den ved behov

Appen er ikke et økonomisystem.

Den er et kvitteringsarkiv.

2. Designprinsipper

Kvitteringslomma følger tre kjerneprinsipper.

Capture first

Å lagre en kvittering skal være raskere enn å ta vare på papiret.

Minimal friksjon

Kvitteringer skal kunne lagres med kun bilde.

Alle metadata er valgfrie.

Offline first

Alle kvitteringer lagres lokalt på enheten.

Ingen konto er nødvendig.

3. MVP Scope

Følgende funksjoner inngår i MVP v1.

Kamera

Appen åpner direkte i kamera.

Brukeren kan:

ta bilde av kvittering

retake hvis nødvendig

Preview

Etter bildet er tatt vises en forhåndsvisning.

Bruker kan:

ta nytt bilde

gå videre

Kvitteringsinformasjon

Brukeren kan legge til metadata.

Felter:

Utsteder

Dato

Beløp

Notat

Alle felter er valgfrie.

Lagring

Når kvitteringen lagres:

bildet lagres lokalt

metadata lagres i lokal database

Arkiv

Alle kvitteringer vises i en liste.

Eksempel:

Utsteder        Dato        Beløp
Oslo Taxi       12 Mar      345
Clas Ohlson     03 Jun      1299
Power           01 Jan      599

Listen viser:

utsteder

dato

beløp

Detaljvisning

Når en kvittering åpnes vises:

kvitteringsbilde

utsteder

dato

beløp

notat

Eksport

Kvitteringen kan eksporteres som:

PDF

bilde

deling via telefon

PDF inneholder:

kvitteringsdata

kvitteringsbilde

Én kvittering per side.

4. Funksjoner som ikke er med i MVP

For å holde prosjektet lite er følgende funksjoner utsatt:

konto

skybackup

synkronisering mellom enheter

avansert OCR

AI

kategorier

budsjettering

økonomifunksjoner

bedriftsintegrasjoner

5. Teknisk stack
App

React Native + Expo

Dette gir:

rask utvikling

native mobilopplevelse

enkel tilgang til kamera og filsystem

Biblioteker

Kamera

expo-camera

Fil-lagring

expo-file-system

Lokal database

expo-sqlite

PDF generering

expo-print

Deling

expo-sharing
6. Lokal lagring

Appen bruker lokal SQLite database.

Database tabell
receipts

Felter:

id
image_path
issuer
date
amount
note
created_at
Bildearkiv

Bilder lagres lokalt.

Eksempelstruktur:

/receipts/

receipt_20260316_001.jpg
receipt_20260316_002.jpg
receipt_20260316_003.jpg
7. Appstruktur

Prosjektstruktur:

kvitteringslomma

src
 ├─ screens
 │
 │   CameraScreen
 │   PreviewScreen
 │   ArchiveScreen
 │   DetailScreen
 │
 ├─ components
 │
 │   ReceiptRow
 │
 ├─ data
 │
 │   receiptsRepo
 │
 ├─ models
 │
 │   Receipt
 │
 └─ utils
8. Skjermbilder
Camera Screen
---------------------
      Camera
---------------------

[ Snap receipt ]
Preview Screen
---------------------
       Preview
---------------------

[ receipt image ]

Retake      Continue
Add Info Screen
---------------------
Receipt info
---------------------

Utsteder  [_____]

Dato      [_____]

Beløp     [_____]

Notat     [_____]

[ Save ]
Archive Screen
---------------------
Receipts
---------------------

Oslo Taxi       12 Mar      345
Clas Ohlson     03 Jun      1299
Power           01 Jan      599
Detail Screen
---------------------
Receipt
---------------------

Utsteder
Dato
Beløp
Notat

[ kvitteringsbilde ]

Export
Share
9. Milepæler

Prosjektet bygges i små steg.

Milepæl 1

Kamera → bilde → lagre bilde

Funksjoner:

åpne kamera

ta bilde

lagre bilde lokalt

Ingen metadata ennå.

Milepæl 2

Arkiv

Funksjoner:

liste over kvitteringer

åpne detaljvisning

Milepæl 3

Metadata

Felter:

utsteder

dato

beløp

notat

Milepæl 4

Eksport

Funksjoner:

generere PDF

dele kvittering

10. Første utviklingssteg

Opprett prosjekt:

npx create-expo-app kvitteringslomma

Installer avhengigheter:

npx expo install expo-camera
npx expo install expo-file-system
npx expo install expo-sqlite
npx expo install expo-print
npx expo install expo-sharing
11. Første kodeoppgave

Start med Archive Screen.

Bruk dummy data:

Oslo Taxi
Clas Ohlson
Power

Dette etablerer:

layout

navigasjon

UI-struktur

Kamera kobles på senere.

12. Estimert utviklingstid

MVP kan bygges på:

1–3 uker

avhengig av utviklingstempo.

13. Versjon

Dette dokumentet definerer:

Kvitteringslomma v1 – MVP

Alle senere funksjoner vurderes etter at denne versjonen fungerer stabilt.
