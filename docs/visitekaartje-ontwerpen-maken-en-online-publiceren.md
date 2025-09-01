# Your Tribe - Visitekaartje

## Visitekaartje ontwerpen, maken en online publiceren (Maandag)

_In de workshop S01W1-02-Visitekaartje wordt stap voor stap uitgelegd wat je moet doen._

<!-- Uitleg opdracht, aanpak per fases van de DLC en bronnen. -->

De eerste dag gaan we meteen aan de slag! Je gaat een eerse versie van je eigen visitekaartje ontwerpen en maken. Daarbij leer je hoe we bij FDND werken, hoe we opdrachten aanpakken met de development-lifecycle en hoe we GitHub gebruiken.

### Aanpak

Bij FDND gebruiken we voor de fasering van opdrachten een projectmethodiek (Scrum) die in de beroepspraktijk standaard is. Scrum hanteert een projectcyclus die de development-lifecycle (DLC) wordt genoemd.  Voor deze opdracht doorloop je alle fases van de Development-Lifecycle; [analyseren](#analyseren-30-min), [ontwerpen](#ontwerpen-60-min), [bouwen](#bouwen-60-min), [integreren](#integreren-15-min) en [testen](#testen-15-min).
Volg onderstaande fases om jouw visitekaartje gestructureerd te ontwerpen, aan te passen en op GitHub te publiceren.

<img width="930" alt="image" src="https://github.com/user-attachments/assets/1a4ecffb-5695-473a-9670-1ad15d8a8ddb">




## Analyseren (30 min)

In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen.

### Aanpak analysefase

1. Lees alle instructies van deze leertaak zorgvuldig door.
2. Bekijk de verschillende fases van de Development Lifecycle en wat je per fase gaat doen.
3. Bespreek wat je aan werk verwacht en maak aantekeningen. (Wat komt je bekend voor, wat heb je al vaker gedaan of wat lijkt je lastig?)



## Ontwerpen (60 min)

Bij de start van de ontwerpfase weet je wat het doel en het resultaat van je project zijn. In de ontwerpfase neem je ontwerpbeslissingen en zorg je dat je precies weet wat je moet gaan bouwen.  

Nu wordt het tijd om te kijken hoe het resultaat eruit zou kunnen zien. 

Dit is een belangrijk moment in het project.
(Voor veel opdrachtgevers geldt dat ze nu pas duidelijk krijgen hoe het resultaat eruit zal zien. En dat is een moment waarop veel opdrachtgevers veel duidelijker kunnen aangeven wat ze wel en niet willen.)

### Aanpak ontwerpfase

1. Schets jezelf in je boekje met daarbij woorden en/of elementen die iets over jou zeggen. Wat wil je over jezelf vertellen? Waar ben je geboren? Waar woon je nu? Wat is je lievelingseten? Heb je een bijbaan? Zit je op een sport? Heb je ambities? Waar wil je goed in worden? Wat zou een leraar van je vorige school over jou vertellen? En wat zeggen je vrienden?
2. Stel jezelf voor aan je collega’s met behulp van je tekeningen. Bespreek samen welk idee geschikt is om uit te werken. 
3. Schets een definitieve versie van je visitekaartje. Deze schets toont in grote lijnen hoe je visitekaartje er uit moet komen te zien. Geef wat tekstuele hints over kleurgebruik en/of animaties die je zou willen maken. Misschien kun je nog iets toevoegen naar aanleiding van het gesprek met je collega’s?
  
<img width="856" alt="image" src="https://user-images.githubusercontent.com/1391509/132128256-8fde0aeb-d022-44bc-b666-563d6fb12f88.png">




## Bouwen (60 min)

In de bouwfase realiseer je de beslissingen uit de ontwerpfase in HTML, CSS en JS.

### Aanpak bouwfase

Op basis van je ontwerpschets ga je bedenken hoe je je ontwerp in code kan bouwen. Je zet je project op in GitHub en kopieert de _repository_ naar jouw computer. Je begint met de content in HTML, voegt CSS toe voor de vormgeving en JS voor de interactie.

De code schrijf je in een _code-editor_ zoals VSCodium. Alle code van je project zet je op GitHub, zodat docenten en studiegenoten kunnen zien wat je hebt gedaan. 

### 0. Inrichten computer

Voordat je kan beginnen met het bouwen van het visitekaartje moet je je computer inrichten. Al je werk en code komt op GitHub te staan, daarom moet je eerst een GitHub account aanmaken, de GitHub Desktop app installeren en heb je een code-editor nodig.

1. Maak een GitHub account aan op https://github.com
2. Download en installeer de GitHub Desktop App op https://github.com/apps/desktop
3. Installeer een code-editor. Misschien heb je al een code-editor van een vooropleiding, gebruik die dan. Als je nog geen code-editor hebt raden we VSCodium aan: https://vscodium.com/



### 1. Forken en Downloaden van de leertaak

Zorg eerst dat je de leertaak naar je eigen account kopieert; dat is dan jouw _repository_ en daar ga je je eigen code in maken.
  
1. Fork deze _repository_ naar je eigen GitHub account. Als je een _repository_ forkt dan kopieer je de leertaak naar je eigen GitHub account. Dan kun je aan de opdracht gaan werken.

<img width="626" alt="image" src="https://github.com/user-attachments/assets/61b03b95-fa79-4637-98b9-4e67bf4e9bde">

2. Klik op Create fork om de repository naar jouw account te kopiëren. 

<img width="638" alt="image" src="https://github.com/user-attachments/assets/ccb82a1f-344c-4fee-98c5-a83d08db818f">

3. Download de code naar jouw computer. Nu gaan we de code downloaden naar jouw computer. 
Open de repository met de GitHub Desktop app.

<img width="626" alt="image" src="https://github.com/user-attachments/assets/b30e0d73-e1dc-4823-9b2c-926af89f118c">

4. Kies een goede locatie op je laptop waar je de repository heen wilt kopiëren. Dit is ook de plek waar je met de code gaat werken. Het is aan te raden een folder aan te maken in 'Documenten', waar je de _repo's_ bewaart. Geef de folder bijvoorbeeld de naam 'FDND', hier kun je alle repo's bewaren waar je aan gaat werken tijdens de opleiding.

<img width="751" alt="image" src="https://github.com/user-attachments/assets/c38c1e2a-4aea-412c-b98d-6fca41d5b0d0">


#### Materiaal Forken en Downloaden

  - [GitHub](https://github.com)
  - [GitHub Desktop](https://desktop.github.com)
  - [VSCodium](https://vscodium.com/)
 
### 2. HTML
  
HyperText Markup Language (HTML) is de taal waarin webpagina's zijn opgemaakt, die vervolgens bekeken kunnen worden op het World Wide Web. In het HTML document staat de inhoud van het ontwerp gestructureerd met HTML elementen. In het HTML document van het visitekaartje, ```index.html```, staat alle inhoud die je op de webpagina ziet. 

<img width="997" alt="image" src="https://user-images.githubusercontent.com/1391509/188332988-359fa04e-2638-4313-bf9a-332968eae59e.png">


1. Open het ```index.html``` bestand van de leertaak op jouw computer in een code-editor.
2. Op regel 15 staat een ```<h1>...</h1>``` element met de naam Jane Doe. Voer hier jouw eigen naam in.
3. Op regel 17 staat ```<p><em>...</em></p>``` met daarin de *beschrijving* van Jane. Pas dit aan naar jouw eigen tekst.
4. Pas op dezelfde manier de vaardigheden aan op regels 42 en verder, en het motto op regel 52. Misschien wil je hier wel iets anders presenteren? Dat kan ook ...
5. In het voorbeeld staat een foto ```<img src="assets/creative-coder.png">``` op regel 39. Verander de foto met jouw mugshot.
6. Je kunt als je wilt ook de icoontjes vervangen voor iets wat beter bij jou past. Gebruik daarvoor de [Unicode Character Table](https://unicode-table.com/en/).

#### Materiaal HTML

- [Getting started with the Web @ MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [HTML: HyperText Markup Language @ MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Overzicht van HTML elementen @ MDN](https://developer.mozilla.org/nl/docs/Web/HTML/Element)
- [Learn HTML @ web.dev](https://web.dev/learn/html/)
- https://internetingishard.netlify.app

### 3. CSS
  
De vormgeving van een webpagina worden vastgelegd in Cascading Style Sheets (CSS), zoals de layout, achtergrondkleur, tekstkleur en grootte, randen, schaduwen, etc. De CSS staat in een los document en wordt aan de HTML pagina gekoppeld in het ```<head>``` element. je mag zelf weten hoe het CSS bestand heet. In ons voorbeeld heet het bestand ```style.css``` en staat het in de map ```styles```.

<img width="953" alt="image" src="https://user-images.githubusercontent.com/1391509/188333049-346d3f63-ebee-4cc1-9242-ee5ffbbabe73.png">

<img width="997" alt="image" src="https://user-images.githubusercontent.com/1391509/188333062-95cb57ce-36d1-42a3-9628-074d09b706c2.png">


  1. Kun je zien op welke regel in het HTML document het CSS bestand wordt gekoppeld?
  2. Open het ```styles/style.css``` bestand in een editor. 
  3. Op regel 28 en 29 wordt de achtergrondkleur vastgelegd in de regels:
```CSS
background: rgb(0,239,255);
background: linear-gradient(0deg, rgba(0,239,255,1) 40%, #4e54c8 100%);
```
  De eerste waarde stelt een kleur in met RGB notatie. Voer de RGB waarde voor jouw achtergrondkleur in. Als je het interessant vindt, mag je proberen de gradient naar je hand te zetten :)

  4. Op regel 15 staat ```color: #10214e```. Deze regel legt de normale tekstkleur van het bestand vast in hexadecimale notatie. Pas ook deze kleur aan naar jouw kleurenpalet.
  5. Zoek het bestand verder door en zet alle ```background``` en ```color``` declaraties naar jouw hand.
  6. In het bestand wordt ook de stijl bepaald van twee SVG iconen. De eigenschap die hier voor de kleur gebruikt wordt, is ```stroke```. Als je het tof vindt, kan je ook die kleuren aanpassen aan jouw kleurenpalet.

#### Materiaal CSS

- [CSS: Cascading Style Sheets @ MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Almanac @ CSS-tricks](https://css-tricks.com/almanac/)
- [Learn CSS @ web.dev](https://web.dev/learn/css/)
- [CSS Typography - Change Font, Size, Spacing & more @ YouTube](https://www.youtube.com/watch?v=RNakAX3rVVw)

### 4. JS
  
De interactie op de pagina wordt bepaald door JavaScript (JS). De JS code staat in een los document en moet ook in het HTML document worden gekoppeld. Dat kan in de ```<head>``` maar ook onder aan in het HTML document. je mag zelf weten hoe het JS bestand heet. In ons voorbeeld heet het file ```script.js``` en staat het in de map ```scripts```.

<img width="997" alt="image" src="https://user-images.githubusercontent.com/1391509/188333086-3fe55b95-3bba-4534-9691-31efe7ef6c47.png">

<img width="997" alt="image" src="https://user-images.githubusercontent.com/1391509/188333102-b036f6f8-4c76-427d-9b88-eb5fd323ff5d.png">


  1. Kun je zien op welke regel in het HTML document het JS document wordt gekoppeld?
  2. Open het ```scripts/script.js``` bestand in een editor. 
  3. Lees de regels code en het commentaar dat erbij is geschreven.
  4. Heb je zelf ook een interactie bedacht voor je visitekaartje? Hoe zou je dat kunnen maken?

#### Materiaal JS

- [What is JavaScript? @ MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [One thing about JavaScript @ CSS-tricks](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
- https://web.dev/learn/javascript



## Integreren (15 min)

In de integratiefase voer je de aanpassingen door, zodat iedereen ze kan zien.

### Aanpak integreerfase

Eerst voeg je de nieuwe code toe aan je lokale _repository_ (met een _Commit_). Daarna ga je de code uploaden naar de online _repository_ op GitHub (met een _Push_). Tot slot ga je je opdracht publiceren (_Live zetten_) met behulp van GitHub Pages. Als je dat hebt gedaan, staat je website online en heb je een URL. Nu kunnen anderen je werk ook zien.

### 1. Repository bijwerken

_Commit_ en _Push_ je code met behulp van de GitHub Desktop app.

1. Open de GitHub Desktop app.
2. Browse op je computer naar de repository van deze opdracht, your-tribe-profile-card.
3. Hier zie je alle wijzigingen die je hebt gemaakt (_Changes_).
4. Schrijf een titel waaraan je goed kan zien wat je hebt gewijzigd (dit is vereist).
5. Schrijf zo nodig ook een beschrijving waarin je uitlegt wat er is veranderd en waarom. Dit is vooral handig als je met meer mensen samenwerkt. 
6. _Commit_ je code aan je lokale _repository_; klik op [Commit to main]. Tip: stap 3 t/m 6 kun je herhalen om _meerdere_ kleine commits te maken, elk voor een specifiek onderdeel.

<img width="616" alt="image" src="https://user-images.githubusercontent.com/1391509/188333768-cc5cebd2-e5b8-4790-af68-437231661921.png">
  
7. Daarna kun je de wijzigingen uploaden naar de online _repository_ op GitHub. Klik op [Push origin]

<img width="644" alt="image" src="https://user-images.githubusercontent.com/1391509/188333798-02e1009b-da27-40f7-839a-f9a09e5c0707.png">

8. Als je je _repository_ hebt bijgewerkt, kun je op de GitHub website je wijzigingen zien van je online _repository_, als je op _commits_ klikt.

### 2. Online publiceren

Als je je code hebt geüpdatet naar je online _repository_ kun je je website publiceren.

1. Klik op ⚙️ Settings van je online _repository_ om naar de instellingen te gaan. 
2. Klik in het linkermenu op *Pages*. Hier staan de instellingen om je code online te hosten.
3. Selecteer bij *Branch* de **Main branch** en klik op Save:

<img width="498" alt="image" src="https://user-images.githubusercontent.com/1391509/188333827-9307580d-62bb-46aa-b5ff-30ae66ed6285.png">

4. Als het goed is gegaan, kun je binnen enkele momenten jouw visitekaartje online bekijken.

#### Materiaal integratiefase

- [Wat is GitHub? Hier een heldere uitleg!](https://programmeerplaats.nl/wat-is-github/)
- [Creating a GitHub pages site @ GitHub](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site#creating-your-site)
- [How To Publish Your HTML With GitHub Pages](https://anilemrah.medium.com/how-to-publish-your-html-with-github-pages-8f3f854e7d4)

## Testen (15 min)

In de testfase controleer je of jouw aanpassingen werken zoals bedoeld. Dit kan een technische test zijn, maar ook een test met gebruikers of een presentatie bij de opdrachtgever, om te bespreken of de opdracht goed is.

### Aanpak testfase

Het is handig als je de URL van jouw visitekaartje toevoegt aan de 'About' van je _repository_. Zo kunnen andere mensen ook makkelijk jouw visitekaartje bekijken.

### 1. URL toevoegen aan de repository

1. Voeg de url van je visitekaartje toe aan de About op de eerste pagina van je online _repository_. Edit de About sectipn door op het tandwiel te klikken. 

![image](https://github.com/user-attachments/assets/105cb42a-ff29-43ac-a7ce-09579618ef71)


2. Voeg de URL van je visitekaartje toe en klik op _Save_

![image](https://github.com/user-attachments/assets/8906e71d-53f2-43f1-95d7-114d5dc04550)


3. Post de url van je visitekaartje in Teams in het kanaal 'Sprint 01 - Your Tribe'

### 2. Testen en feedback krijgen

1. Feedback op je design of code verzamel je in GitHub door middel van _Issues_. Klasgenoten, docenten of anderen kunnen dan tips en opmerkingen schrijven die je later kan verbeteren

![image](https://github.com/user-attachments/assets/dc9eac4d-10f4-4be3-97a2-eef2ca9969f8)

2. Zet Issues aan bij de 'Settings' van je _repository_ 

![image](https://github.com/user-attachments/assets/22c2497e-36e1-4096-acc3-3f9686c22d8e)

3. Laat jouw visitekaartje testen door klasgenoten
4. Laat je klasgenoten issues met tips schrijven
5. Als je nieuwe ideeën hebt, of je ziet dat er iets anders kan tijdens de test, kan je zelf issues bij je eigen repository schrijven als todo-lijst
6. Ga vanmiddag verder met het verbeteren van de issues. Dit is _iteratief werken_!
