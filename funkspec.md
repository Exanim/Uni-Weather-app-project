# Funkcionális specifikáció

### Jelenlegi helyzet leírása
Rohanó információéhes világunk óhatatlanul vágyik arra, hogy a környező történésekről mindent - és ezalatt értsd:
MINDENT - tudnia kell a benne élő embereknek. A mi alkalmazásunk ebben segít és szükséges információkat közöl az
egyénnek, melyek nélkülözhetetlenek ahhoz, hogy ki tudja tenni a lábát a házból úgy, hogy soha nem érik meglepetések, ha
időjárásról van szó. Megannyi baleset történik a világban az időjárás miatt, hiszen az anyatermészetet nem tudjuk
becsapni, de tudunk hozzá alkalmazkodni. Évente többezren halnak meg egy egyszerű megfázásban, ezt pedig nem
megengedhető. Ha egy vastagabb kabát választ el az életünk megszűnésétől, akkor inkább válasszuk a kabátot, mintsem a
halált. Tehát az alkalmazásunk nem más mint egy időjárás monitoring alkalmazás. Különböző városok időjárásának
megfigyelésére alkalmas. Jelen és jövőbeli időjárás megfigyelése. Az időjárásmegjelenítés tartalmazza a hőmérséklet,
szél és egyéb időjárással kapcsolatos státusz megosztását / megjelenítését. Csak meg kell nyitnia alkalmazásunkat,
beírni az Ön városát és máris öltözködhet az igényei szerint!
Számos forrásból tudunk tájékozódni az időjárásról. Többek között a TV-ből, az alapértelmezett vagy az általunk
letöltött telefonos applikációnkon vagy esetleg webes böngészőn keresztül. A felsorolt források különböző naprakész
adatokból dolgoznak, de szinte mindegyikükben közös, hogy figyelemelterelő reklámok, egyértelmű hátrányok, vagy havi
feliratkozói díjazás csökkentik a felhasználói élményt.

### Követelménylista
- Kártya jellegű megjelenítés, ahol a mai és a következő 4 nap előre látható / jelenlegi időjárása megjelenik
- A kártyák tartalmazzanak egy napocskát, amennyiben az idő napos, valamint egy felhőt, amennyiben felhős
- Ezen felül, amennyiben az idő esős, a felhőcskékből láthatóan csepegjenek esőcseppek
- ...amennyiben borús, fekete legyen a felhő
- Az égen látható információ egy fehér karikában jelenjen meg
- A kártyák tartalmazzák továbbá az adott napot, melyre megjelenik az időjárás a fehér karika alatt
- Mindezek alatt, a kártya alján jelenjen meg a páratartalom százalékosan valamint a széljárás ereje

  
### A rendszer céljai és nem céljai
- Egy olyan felület létrehozása, amelye intuitívan kezelhető
- Órákra bontott információ az aznapi hőmérsékletekről
- Jelenlegi szélerősség a felhasználó által választott településeken

Nem céljai:
- Hosszú távú előrejelzés
- Műholdas hőtérkép a hideg és meleg frontokról
- Óceáni áramlatok műholdas térképen való ábrázolása

 
### Vágyálomrendszer leírása
Ingyenes weboldalunk célja, hogy ügyfeleink átlátható, naprakész, percre pontos információhoz jussanak, hogy ne érhessék
meglepetések utazás, kirándulás esetében. És, hogy tudják, mikor hogyan kell öltözködniük és mit kell magukkal vinniük
az utazásokra. Az alkalmazásnak könnyen üzemeltethetőnek kell lennie. Az online megjelenítésnek lehetőleg reszponzívnak
kell lennie, hogy mobil / tablet illetve számítógép eszközökön is szépen, jól láthatóan megjelenített legyen. Elvárt a
platformfüggetlenség, nem elfogadható, ha csak egy operációs rendszeren futtatható az alkalmazás.


### Igényelt üzleti folyamatok leírás
- Reklámmentesen és bejelentkezés nélkül hozzáfér a felhasználó a kívánt információhoz
- Az ügyfél manuálisan megadja helyadatait vagy az eszköz helyadatait felhasználva automatikusan beállítja a rendszer
- Internet elérés esetén lekéri a napi előrejelzést a beállított helyszínekre, ami magába foglalja az órákra bontott hőmérsékletet, az idő természetét, pl: felhős, napos, esős


### Képernyőtervek
![](https://github.com/Exanim/Uni-Weather-app-project/blob/main/kepernyotervek/design%20plan.png)