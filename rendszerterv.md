# Rendszerterv

A rendszer célja aktuális regionális időjárási adatok hozzáférésének biztosítása.
A felhasználónak lehetőséget ad bizonyos települések időjárási adatainak elmentésére.
Kizárólag PC-ről elérhető webes felület van tervben.

## A rendszer célja

A Weather webapplikáció célja az, hogy a felhasználók számára könnyen és gyorsan hozzáférhetővé tegye az időjárási információkat.
A webalkalmazás lehetővé teszi a felhasználók számára, hogy egyszerűen megkeressék a kívánt helyszínt a kereső funkció használatával, és biztosítja az időjárási adatok megjelenítését kártyák formájában.
Az első kártya kiemelt módon mutatja be az aktuális hőmérsékletet, míg a további kártya grafikusan ábrázolja a négy napos előrejelzést, segítve a felhasználókat a jövőbeli időjárás megértésében.

A webalkalmazás fókuszában a felhasználói élmény és az egyszerűség áll, így mindenki könnyedén használhatja bármely platformon, legyen az számítógép, tablet vagy telefon. 
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

| Funkció      | Feladat                        | Prioritás | Becslés (h) | Eltelt Idő (h) | Hátralévő idő (h) |
|--------------|--------------------------------|-----------|-------------|----------------|-------------------|
| KövSpec      |                                | 0         | 4           | 1              | 3                 |
| FunkSpec     |                                | 0         | 4           | 1              | 3                 |
| Rendszerterv |                                | 0         | 4           | 1              | 3                 |
| WebApp       | Felület stílus elkészítése     | 1         | 8           | 0              | 8                 |
|              | Felület Controller Elkészítése | 2         | 6           | 0              | 6                 | 


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

## Követelmények



## Funkcionális terv

### Menühierarchia
```mermaid
flowchart TD
  Menu --> dataCard[Data Card]
  Menu --> search([Search])
```
```mermaid
flowchart TD
    func([Funkció])
    menu[Menü]
```
## Fizikai környezet

- Az alkalmazás kizárólag PC-ről használt webes felületre készül.
- Van tűzfal a hálózaton és minden portot engedélyez
- Nincs monetizált komponens
- Fejleszői eszközök:
  - Jetbrains Intellij IDEA
  - Visual Studio Code
  - Paint.NET

## Implementációs terv

A webes felület elkészítése HTML, CSS, JavaScript és TypeScript nyelveken történik, az Angular keretrendszer segítségével. A kódot több különálló fájlban készítjük el, hogy növeljük az átláthatóságot és a könnyebb fejlesztést. A HTML felel a felület struktúrájáért, a CSS a stílusért, míg a JavaScript és TypeScript a dinamikus funkcionalitásért.

A webes felület képes lesz kommunikálni a [Weather API](https://openweathermap.org/api) által nyújtott végpontokkal, ami lehetővé teszi az naprakész időjárási adatok lekérdezését.

## Tesztterv

A tesztelések célja a rendszer és komponensei megfelelő működésének ellenőrzése, vizsgálata.

## Telepítési terv

- Android/IOS: nincs tervben
- Webes alkalmazás: Az alkalmazás megtekintéséhez szükséges **egy** az ajánlott böngészők közül:
Google Chrome, Mozilla Firefox, Opera 


