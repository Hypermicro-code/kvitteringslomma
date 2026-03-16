Kvitteringslomma – Build Plan v1
Prosjekt

Produkt: Kvitteringslomma
Organisasjon: Morning Coffee Labs
Versjon: MVP v1
Mål: Første fungerende kvitteringsarkiv-app

1. Hovedmål

Bygge en mobilapp der brukeren kan:

Ta bilde av en kvittering

Lagre den lokalt

Finne den igjen i et arkiv

Åpne og eksportere kvitteringen

Appen skal være:

rask

enkel

offline-first

uten konto

2. Teknisk plattform
App

React Native + Expo

Biblioteker

Kamera

expo-camera

Filhåndtering

expo-file-system

Database

expo-sqlite

PDF

expo-print

Deling

expo-sharing
3. Prosjektstruktur

Repo:

kvitteringslomma

Mappeoppsett:

src

screens
  CameraScreen
  PreviewScreen
  ReceiptInfoScreen
  ArchiveScreen
  DetailScreen

components
  ReceiptRow

data
  receiptsRepo

models
  Receipt

utils
4. Datamodell

Receipt

id
image_path
issuer
date
amount
note
created_at

Beskrivelse:

Felt	Beskrivelse
id	unik identifikator
image_path	lokal filsti til kvitteringsbildet
issuer	utsteder
date	dato
amount	beløp
note	notat
created_at	tidspunkt lagret
5. Database

SQLite tabell:

receipts

Schema:

CREATE TABLE receipts (
  id TEXT PRIMARY KEY,
  image_path TEXT,
  issuer TEXT,
  date TEXT,
  amount REAL,
  note TEXT,
  created_at TEXT
);
6. UX Flow

Primær flyt:

Open app
↓
CameraScreen
↓
Take photo
↓
PreviewScreen
↓
ReceiptInfoScreen
↓
Save
↓
ArchiveScreen
↓
DetailScreen
7. Byggerekkefølge

Utviklingen skjer i følgende rekkefølge.

Steg 1 – Prosjektopprettelse

Opprett Expo-prosjekt.

npx create-expo-app kvitteringslomma

Gå inn i prosjektet:

cd kvitteringslomma

Installer avhengigheter:

npx expo install expo-camera
npx expo install expo-file-system
npx expo install expo-sqlite
npx expo install expo-print
npx expo install expo-sharing
Steg 2 – Grunnstruktur

Opprett mapper:

src/screens
src/components
src/data
src/models
src/utils

Opprett første filer:

ArchiveScreen
DetailScreen
CameraScreen
PreviewScreen
ReceiptInfoScreen
Steg 3 – Archive Screen

Dette er første UI-skjerm.

Formål:

vise liste over kvitteringer

Foreløpig med dummy data.

Eksempel:

Oslo Taxi
Clas Ohlson
Power
Steg 4 – ReceiptRow komponent

Opprett komponent for én rad i arkivet.

Viser:

Utsteder
Dato
Beløp

Dette gjør UI ryddig.

Steg 5 – Detail Screen

Opprett detaljvisning.

Viser:

bilde

metadata

eksportknapper

Foreløpig kan bildet være dummy.

Steg 6 – Database

Opprett:

receiptsRepo

Funksjoner:

initDatabase
saveReceipt
getReceipts
getReceiptById
Steg 7 – ReceiptInfo Screen

Opprett skjerm for metadata.

Felter:

Utsteder
Dato
Beløp
Notat

Knapp:

Save
Steg 8 – Preview Screen

Vis bildet etter kamera.

Handlinger:

Retake
Continue
Steg 9 – Camera Screen

Integrer kamera.

Funksjoner:

åpne kamera

ta bilde

lagre midlertidig bilde

Send bilde til PreviewScreen.

Steg 10 – Lagring

Når bruker trykker Save:

bildet flyttes til receipts-mappe

metadata lagres i database

bruker sendes til ArchiveScreen

Steg 11 – Arkivkobling

ArchiveScreen henter kvitteringer fra database.

Liste oppdateres automatisk.

Steg 12 – Eksport

DetailScreen får knapper:

Export PDF
Share Image

PDF genereres med:

expo-print
8. Testscenarier

Før MVP anses ferdig skal følgende fungere:

Scenario 1
Åpne app
↓
Ta bilde
↓
Lagre kvittering
↓
Se kvittering i arkiv
Scenario 2
Åpne arkiv
↓
Åpne kvittering
↓
Se bilde og metadata
Scenario 3
Åpne kvittering
↓
Eksporter PDF
9. Tomtilstander

Hvis arkivet er tomt:

Vis melding:

Ingen kvitteringer lagret ennå

[ Ta første bilde ]
10. Første fungerende versjon

MVP anses ferdig når følgende fungerer:

kamera

lagring

arkiv

detaljvisning

eksport

11. Estimert utviklingstid

MVP:

1–3 uker

avhengig av utviklingstempo.

12. Neste steg etter MVP

Mulige utvidelser:

OCR

søk

batch eksport

kvitteringsdeling

skybackup
