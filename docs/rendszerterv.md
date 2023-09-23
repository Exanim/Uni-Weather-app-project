# Rendszerterv

## A rendszer célja

A rendszer célja aktuális regionális időjárási adatok hozzáférésének biztosítása.
A felhasználónak lehetőséget ad bizonyos települések időjárási adatainak elmentésére.
A Weather webapplikáció célja az, hogy a felhasználók számára könnyen és gyorsan hozzáférhetővé tegye az időjárási információkat.

A webalkalmazás lehetővé teszi a felhasználók számára, hogy egyszerűen megkeressék a kívánt helyszínt a kereső funkció használatával, és biztosítja az időjárási adatok megjelenítését kártyák formájában.
Az első kártya kiemelt módon mutatja be az aktuális hőmérsékletet, míg a további kártya grafikusan ábrázolja a négy napos előrejelzést, segítve a felhasználókat a jövőbeli időjárás megértésében.

A webalkalmazás fókuszában a felhasználói élmény és az egyszerűség áll, így mindenki könnyedén
használhatja bármely platformon, legyen az számítógép, tablet vagy telefon.
Az ingyenes elérhetőség lehetővé teszi bárki számára, hogy naprakész időjárási adatokhoz jusson.
A webalkalmazás kártya alapú megjelenítésével a felhasználók gyorsan és könnyen áttekinthetik az időjárási információkat.

## Projektterv

### Projekt szerepkörök

| Név           | Szerepkör  | Feladat           |
|---------------|------------|-------------------|
| Gyenes Balázs | Programozó | Frontend Controll |
| Baráth Simon  | Programozó | N/A               |
| Brázda Martin | Programozó | Frontend Style    |
| Deák Erik     | Programozó | N/A               |

### Ütemterv

- Projekt kezdet: ***2023. szeptember 20.***
- Frontend fejlesztés kezdete: ***2023. szeptember 21.***
- Tesztelés kezdete: ***2023. szeptember 24.***
- Végleges verzió kiadása: ***2023. szeptember 24.***

| Funkció      | Feladat                        | Prioritás | Becslés (h) | Eltelt Idő (h) | Hátralévő idő (h) |
|--------------|--------------------------------|-----------|-------------|----------------|-------------------|
| KövSpec      |                                | 0         | 4           | 3              | 1                 |
| FunkSpec     |                                | 0         | 4           | 3              | 1                 |
| Rendszerterv |                                | 0         | 4           | 3              | 1                 |
| WebApp       | Felület stílus elkészítése     | 1         | 8           | 4              | 4                 |
|              | Felület Controller Elkészítése | 2         | 6           | 0              | 6                 | 

### Mérfölkövek
1. Projekt kezdete - ***2023. szeptember 20.***
1. Alapvető HTML template elkészítése - ***2023. szeptember 20.***
2. HTML template-hez tartozó CSS fájl konfigurálása - ***2023. szeptember 20.***
3. A napok kártyáinak és a teljes alkalmazás szétválasztása különböző template fájlokra - ***2023. szeptember 21.***
4. Kártyalogika megfogalmazása - ***2023. szeptember 21.***
5. Alkalmazáslogika megfogalmazása előre beégetett próbaadatokkal - ***2023. szeptember 21.***
6. Geoadat lekérése külső API-ról városnév alapján - ***2023. szeptember 21.***
7. Geoadat szűrése úgy, hogy a megfelelő output érkezzen a front-endre - ***2023. szeptember 21.***
8. Geoadat elküldése egy különálló API-nak - ***2023. szeptember 21.***
9. A különálló API-ból származó előrelátható 40 időjáráselőrejelzés rekordjának szűrése úgy, hogy csak
a szükséges információt kapja meg a front-end - ***2023. szeptember 22.***
10. A szűrt információ kiküldése a komponensek felé úgy, hogy közben a beégetett adatot kitöröljük,
majd lecseréljük az API hívásból származó adattal azt - ***2023. szeptember 22.***

## Üzleti folyamatok modellje

### Üzleti szereplők

1. Felhasználó: Az alacsony jogosultágokkal rendelkező felhasználó, aki használja az alkalmazást az időjárás lekérdezéséhez.
2. Adminisztrátor: Adminisztrátorok magasabb jogosultsági szintel rendelkező felhasználók az alábbi feladatok ellátása végett:
   
   - Problémák kezelése: Jelenlegi problémák, panaszok, visszajelzések kezelése.
   - Renszerkarbantartás: Biztonsági mentések rendeltetés szerű készítése, a rendszer teljesítményének optimalizálása.
   - Kommunikáció: Rendszeres kommunikálás a felhasználókkal: válasz felhasználók kéréseire, kérdéseire.

### Üzleti folyamatok

1. **Város Lekérdezése:** Adott város időjárási adatainak lekérdezése
Az eseményt az alkalmazás felhasználói felülete indítja.

   - Input: Felhasználói input
   - Output: Lekérdezni kívánt város időjárási adatai 5 napra előrejósolva
   - Szereplők: Felhasználó

2. **Backend Adatfeldolgozás:** A rendszer által lekért időjárási adatok feldolgozása és továbbítása a
frontend felé.
Az eseményt a Backend API indítja.
    - Input: Időjárási adatok
    - Output: Feldolgozott időjárási adatok
    - Szereplők: Backend API, Felhasználó

## Követelmények

### Funkcionális követelmények

> ### Megtekinteni kivánt város adatainak megjelenítése
>
> *Röviden*: Az alkalmazásnak könnyen értelmezhető módon kell megjelenítenie az adatokat.
>
> Célunk, hogy minden felhasználó könnyen és akadálymentesen hozzáférjen az időjárási adatokhoz.

> ###  Tetszőleges város adatainak lekérdezése
>
> *Röviden*: Az alkalmazásnak akadálymentes módszert kell adnia a felhasználónak az általa kiválasztott város időjárási adatainak megjelenítésére.
>
> Célunk, hogy minden felhasználó képes legyen váltogatni tetszőleges városok adatai között.

### Nemfunkcionális követelmények

> ### A webalkalmazás gyors és reszponzív működése.
>*Röviden*: Célunk, hogy az alkalmazásunk működése során semmilyen sebességi
> valamint eszközkülönbségi tényező ne folyásolja be a felhasználói élményt.
>
> ### Kompatibilitás különböző böngészőkkel.
> *Röviden*: Célunk, hogy a felhasználó az általa preferált böngészőben tőlünk függetlenül is futtatni tudja
> az alkalmazásunkat.

### Törvényi előírások, szabványok
- Adatvédelmi jogszabályok betartása.
- GDPR követelmények teljesítése.

## Funkcionális terv

### Rendszerszereplők

- Felhasználók: A rendszer végfelhasználói, akik használják az alkalmazást.

### Rendszer használati esetek és lefutásaik

#### Város keresése

   - A felhasználó megadja a keresett város nevét.

   - A rendszer lekéri a város időjárási adatait.

   - Az adatok megjelenítése a felhasználónak.

### Határ osztályok
- Felhasználói felület: A webes alkalmazás felhasználói felülete.

- Backend API: Az időjárási adatok lekérdezéséért és feldolgozásáért felelős komponens.

### Menühierarchia
```mermaid
flowchart TD
  Menu --> dataCard[Data Card]
  Menu --> search([Search])
  search --> searchMenu[Search Menu]
```
```mermaid
flowchart TD
    func([Funkció])
    menu[Menü]
```

### Képernyőterv:
- Keresési sáv
- Keresőgomb nagyító megjelenítéssel
- Város keresési eredmények
- Időjárás részletek
![](../kepernyotervek/sc-plan-v2.png)

## Rendszerarchitechtúra

Az alkalmazás a következő részekből fog állni:

- **Frontend:** Felhasználói felület, amely a böngészőben fut és lehetővé teszi a felhasználók számára az
időjárási adatok megtekintését és a városok keresését.

- **Backend:** Az időjárási adatok lekérdezéséért és feldolgozásáért felelős rész, az OpenWeather API,
mely biztosítja a frontend felé az adatokat.

## Felhasználói felület tervezési minták
- Az alkalmazás felhasználói felülete könnyen értelmezhető és felhasználóbarát lesz, hogy a felhasználók gyorsan megtalálják az időjárási információkat.

## Backend API
- Az alkalmazás az OpenWeather RESTful API- ját használja, hogy a front-enden történő interakciókat
és megjelenítések fel legyenek dolgozva.
- Ez az API képes visszaküldeni az aktuális időjárselőrejelzési adatokat megfelelő HTTP kérésekre.

## Tesztterv
A tesztelések célja a rendszer és komponensei megfelelő működésének ellenőrzése, vizsgálata. A tesztelések
magukban foglalják a frontend és backend egységteszteket, valamint az integrációs teszteket a rendszer
egészének ellenőrzésére.

## Fizikai környezet

- Az alkalmazás kizárólag PC-ről használt webes felületre készül.
- Van tűzfal a hálózaton és minden portot engedélyez
- Nincs monetizált komponens
- Fejleszői eszközök:
  - Jetbrains Intellij IDEA
  - Visual Studio Code
  - Paint.NET
  - Node.JS
  - Angular

## Absztrakt domain modell

Az alkalmazás absztrakt domain modelljének leírása.

- Felhasználók: A rendszerben regisztrált felhasználók.
- Városok: Az alkalmazás által kezelt városok és az azokhoz tartozó időjárási adatok.
- Adminisztrátorok: Az adminisztrátori jogosultsággal rendelkező felhasználók.

## Implementációs terv

A webes felület HTML, CSS és TypeScript nyelveken fog elkészülni a [Weather API](https://openweathermap.org/api)-t felhasználva.
A rendszer fájlrendszere jelentősen szét lesz szórva az egyszerűbb kiegészítés és a könnyebb értelmezés végett.

A webes felület elkészítése HTML, CSS, JavaScript és TypeScript nyelveken történik, az Angular keretrendszer
segítségével. A kódot több különálló fájlban készítjük el, hogy növeljük az átláthatóságot és a könnyebb
fejlesztést. A HTML felel a felület struktúrájáért, a CSS a stílusért, míg a JavaScript és TypeScript a dinamikus
funkcionalitásért.

A webes felület képes lesz kommunikálni a [Weather API](https://openweathermap.org/api) által nyújtott végpontokkal, ami lehetővé teszi a
naprakész időjárási adatok lekérdezését.

## Tesztterv

A tesztelések célja a rendszer és komponensei megfelelő működésének ellenőrzése, vizsgálata.

## Telepítési terv

- Android/IOS: nincs tervben
- Webes alkalmazás: Az alkalmazás megtekintéséhez szükséges **egy** az ajánlott böngészők közül:
Google Chrome, Mozilla Firefox, Opera
