Kvitteringslomma – UX Flow v1
Mål

Brukeren skal kunne gå fra:

å stå med en papirkvittering i hånden
til
å ha den trygt lagret i appen

med så få steg som mulig.

Hovedregelen er:

ingen unødvendige stopp
ingen tung utfylling
ingen “app-støy”

1. Primær brukerreise

Dette er hovedflyten i appen.

Open app
↓
Camera opens
↓
Snap receipt
↓
Preview
↓
Optional info
↓
Save
↓
Receipt stored
↓
Archive
↓
Open later / export / share

Dette er kjernen i hele produktet.

2. Appens hovedområder

Kvitteringslomma v1 består egentlig av bare tre hovedområder:

A. Fangst

Der kvitteringen tas bilde av og lagres.

B. Arkiv

Der brukeren finner igjen kvitteringer.

C. Detalj

Der brukeren ser én kvittering og kan eksportere eller dele.

Det betyr at appen i praksis er:

kamera

arkiv

detaljvisning

Det er en fin og liten appstruktur.

3. Startpunkt
Når appen åpnes

Appen skal åpne direkte i:

Camera Screen

Dette er viktig fordi produktløftet er:

raskere enn kamerarullen

Brukeren skal ikke måtte åpne en meny først.

4. Camera Screen
Formål

Ta bilde av kvitteringen så raskt som mulig.

Innhold

kameravisning

stor snap-knapp

liten knapp til arkiv

evt. knapp for galleri senere, men ikke nødvendig i første versjon

Handlinger

Snap

Go to Archive

UX-regel

Dette skal være appens raskeste skjerm.

Ingen tekstfelt her.

5. Etter bilde: Preview Screen

Når brukeren har tatt bilde, sendes de til:

Preview Screen

Her skal brukeren bare ta én beslutning:

er bildet godt nok?

eller skal jeg ta nytt?

Innhold

stort bilde

knapp: Ta nytt

knapp: Fortsett

UX-regel

Ingen metadata ennå.
Bare vurdering av bildet.

6. Receipt Info Screen

Når brukeren trykker Fortsett, kommer de til:

Receipt Info Screen

Dette er skjermen for valgfrie metadata.

Felter

Utsteder

Dato

Beløp

Notat

Viktig prinsipp

Alle felter er valgfrie.

Det betyr:

Hvis bruker bare vil lagre bildet og gå videre, skal det gå helt fint.

Knapper

Lagre

evt. Tilbake

UX-regel

Denne skjermen må ikke føles som et skjema.
Den må føles som et lite tillegg.

7. Lagret-kvittering-øyeblikket

Når brukeren trykker Lagre:

bildet lagres lokalt

metadata lagres lokalt

brukeren får en tydelig bekreftelse

Deretter sendes brukeren til:

Archive Screen

eller til detaljvisning, men for v1 anbefaler jeg:

gå til Archive

Hvorfor:
Det gir følelsen av at kvitteringen faktisk er arkivert.

8. Archive Screen

Dette er appens “trygghetsrom”.

Brukeren kommer hit for å:

se at kvitteringen faktisk finnes

finne gamle kvitteringer

åpne detaljer

Innhold

Liste med rader:

Utsteder

Dato

Beløp

Hvis felt mangler:

vis f.eks. “Uten navn” eller tom verdi ryddig formatert

Handlinger

trykk på rad → åpne detalj

knapp for ny kvittering → tilbake til kamera

UX-regel

Listen må være enkel og rask å lese.

9. Detail Screen

Når bruker trykker på en rad i arkivet, åpnes:

Detail Screen

Dette er stedet for:

full visning

kontroll

eksport

Innhold

kvitteringsbilde

Utsteder

Dato

Beløp

Notat

Knapper

Eksporter PDF

Del bilde

evt. senere: Rediger

For v1 kan redigering vente hvis du vil holde det stramt.

10. Sekundære brukerreiser

Dette er de andre viktige flytene.

A. Finne igjen en kvittering
Open app
↓
Go to Archive
↓
Scroll list
↓
Tap receipt
↓
View details

Dette er trolig den nest viktigste flyten etter lagring.

B. Eksportere en kvittering
Open app
↓
Archive
↓
Open receipt
↓
Export PDF / Share image
C. Ta nytt bilde hvis det ble dårlig
Camera
↓
Snap
↓
Preview
↓
Retake
↓
Camera

Dette må være helt sømløst.

11. Beslutninger vi bør låse nå

Her er noen viktige UX-beslutninger som gjør byggingen lettere.

1. Appen åpner i kamera

Låses.

2. Metadata er valgfrie

Låses.

3. Etter lagring går bruker til arkiv

Min anbefaling: låses.

4. Arkiv er listevisning, ikke kortvisning

Låses.

5. Detaljskjerm har eksport og deling

Låses.

12. Tomtilstander

Vi bør definere disse tidlig.

Tomt arkiv

Hvis ingen kvitteringer finnes:

Ingen kvitteringer lagret ennå

[ Ta første bilde ]

Dette er bedre enn en tom liste.

Manglende metadata

Hvis bruker ikke fyller inn Utsteder:

vis f.eks.

Uten navn

eller

Kvittering

Jeg anbefaler:

Kvittering

Det ser ryddigere ut.

13. Feiltilstander

Disse bør være enkle.

Kamera ikke tilgjengelig

Vis enkel melding:

kamera krever tillatelse

knapp for å prøve igjen

Lagring feiler

Vis toast eller melding:

“Kunne ikke lagre kvitteringen”

Ikke lag komplisert feilhåndtering i v1.

14. UX-prioritetene i riktig rekkefølge

Når vi bygger, bør vi optimalisere for dette:

1. Hastighet i lagring

Det viktigste.

2. At ting føles trygt lagret

Nest viktigst.

3. At det er lett å finne igjen

Tredje viktigst.

4. Eksport

Viktig, men etter lagring og gjenfinning.

15. Anbefalt navigasjonsmodell

For v1 ville jeg holdt det veldig enkelt:

Stack navigation
Camera
→ Preview
→ Info
→ Archive
→ Detail

Og en liten snarvei til arkiv fra kamera.

Ikke bottom tabs i første versjon, med mindre du vil ha:

Kamera

Arkiv

Men egentlig holder det med en veldig enkel topp-/ikonløsning.

16. Den konkrete flyten jeg anbefaler å bygge
v1 flow
App opens
↓
CameraScreen
↓
Take photo
↓
PreviewScreen
↓
Continue
↓
ReceiptInfoScreen
↓
Save
↓
ArchiveScreen
↓
Tap item
↓
DetailScreen

Dette er den riktige første byggeflyten.

17. Byggerekkefølge

For å gjøre dette effektivt:

Steg 1

Bygg ArchiveScreen med dummy data

Steg 2

Bygg DetailScreen

Steg 3

Bygg ReceiptInfoScreen

Steg 4

Bygg PreviewScreen

Steg 5

Bygg CameraScreen

Det høres kanskje bakvendt ut, men det er mye lettere å bygge kamera inn i en ferdig appstruktur enn å starte med kamera.
