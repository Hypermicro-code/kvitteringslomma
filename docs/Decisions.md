# Kvitteringslomma – Decisions

## 2026-03-16

### Teknologi

App bygges med:

- React Native
- Expo
- SQLite lokal lagring

Begrunnelse:
Offline-first, rask utvikling.

---

### Metadatafelt

Kvitteringer har følgende felter:

- Utsteder
- Dato
- Beløp
- Notat

Alle felt er valgfrie.

---

### Arkivvisning

Arkivet vises som liste, ikke kort.

Begrunnelse:
Bedre lesbarhet og raskere scanning.

## 2026-03-16

### Deling

Kvitteringslomma skal bruke telefonens native delingsmeny for eksport og deling av enkeltkvitteringer.

Begrunnelse:
- kjent brukeropplevelse
- mindre kode
- privacy-vennlig
- passer appens enkle filosofi

---

### Produktretning

Kvitteringsdeling mellom personer er vurdert som en viktig fremtidig funksjon.

Begrunnelse:
- løser et ekte problem ved bruktkjøp og salg
- kvitteringen kan følge varen
- gir naturlig nettverkseffekt
