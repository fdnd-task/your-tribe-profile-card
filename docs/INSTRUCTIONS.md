
![image](https://user-images.githubusercontent.com/1391509/188114337-54f6a9eb-dc0c-42e9-a455-6ac636edb7c6.jpeg)

# Visitekaartje

Je maakt op basis van een voorbeeld een eigen visitekaartje.

## Context

Deze leertaak hoort bij sprint 1 "Your Tribe". Dit is een deeltaak die je individueel uitvoert.

In het S01W1-02-Visitekaartje wordt stap voor stap behandeld wat je moet doen.

## Briefing

Elke frontender bij [FDND](https://fdnd.nl) stelt zichzelf binnen de tribe voor door middel van een visitekaartje. 

Maak een visitekaartje op basis van [dit voorbeeld](https://github.com/fdnd-task/your-tribe-profile-card/tree/main/example) en publiceer dat via Github pages.


## Doel van deze opdracht

Na het volgen van deze leertaak heb je zelf een visitekaartje ontworpen en gemaakt. Je leert werken volgens de met de Development Lifecycle. Je hebt hiervoor een aantal eigen ontwerpbeslissingen gemaakt en HTML (voor de structuur), CSS (voor de vormgeving) en JS (voor de interactie) gebruikt om het ontwerp te bouwen. Tot slot heb je jouw visitekaartje gepubliceerd via GitHub pages en met een aantal klasgenoten getest of het werkt zoals je bedoelde.



## Werkwijze

Dit is een *voorbeeld* taak die wordt behandeld in het bijhorende college. Deze opdracht gaat over alle fases van de **development-lifecycle** [analyseren](#analyseren), [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren) en [testen](#testen).

Volg onderstaand fases om jouw visitekaartje gestructureerd te ontwerpen, aan te passen en op Github te publiceren.

### Analyseren

In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren en formuleer je een aantal uitgangspunten waar je ontwerp aan moet voldoen.


#### Aanpak analysefase

1. Lees de instructies van deze leertaak zorgvuldig door.
2. Bekijk de verschillende fases van de Development Lifecycle en wat je per fase gaat doen.
3. Bespreek wat je aan werk verwacht en maak aantekening. (wat komt je bekend voor, wat heb je al vaker gedaan of wat lijkt je lastig)


### Ontwerpen

Bij de start van de ontwerpfase weet je wat het doel en het resultaat van je project zijn. In de ontwerpfase neem je ontwerp- beslissingen en zorg je dat je precies weet wat je moet gaan bouwen.  

Nu wordt het tijd om te kijken hoe het resultaat eruit zou kunnen zien. 

Dit is een belangrijk moment in het project.
(Voor veel opdrachtgevers geldt dat ze nu pas duidelijk krijgen hoe het resultaat eruit zal zien. En dat is een moment waarop veel opdrachtgevers veel duidelijker kunnen aangeven wat ze wel en niet willen.)
  

#### Aanpak ontwerpfase

1. Schets in je boekje! (Wat wil je over jezelf vertellen? Waar ben je geboren? Waar woon je nu? Wat is je lievelingseten? Heb je een bijbaan? Zit je op een sport? Heb je ambities? Waar wil je goed in worden? Wat zou een leraar van je vorige school over jou vertellen? En wat zeggen je vrienden?)
2. Stel jezelf voor aan je collega’s met behulp van je tekeningen. Bespreek samen welk idee geschikt is om uit te werken. 
3. Schets een definitieve versie van je visitekaartje. Deze schets toont in grote lijnen hoe je visitekaartje er uit moet komen te zien. Geef wat tekstuele hints over kleurgebruik en/of animaties die je zou willen maken. Misschien kun je nog iets toevoegen naar aanleiding van het gesprek met je collega’s?
  
<img width="856" alt="image" src="https://user-images.githubusercontent.com/1391509/132128256-8fde0aeb-d022-44bc-b666-563d6fb12f88.png">

#### Materiaal ontwerpfase

- Pen en papier


### Bouwen

In de bouwfase realiseer je de beslissingen uit de ontwerpfase in HTML, CSS en JS.

Op basis van je ontwerpschets ga je bedenken hoe je je ontwerp in code kan bouwen. Je zet je project op in Github en kopieert de repository naar jouw computer. Je begint met de content in HTML, voegt CSS toe voor de vormgeving en JS voor de interactie.

De code schrijf je in een _code-editor_ zoals Visual Studio Code. Alle code van je project zet je op Github zodat docenten en studiegenoten kunnen zien wat je hebt gedaan. 


#### Aanpak

#### 1. Forken en Downloaden

Zorg eerst dat je de leertaak naar je eigen account kopieert, dan is dan jouw repo en daar ga je je eigen code in maken.
  
1. Fork deze _repository_ naar je eigen Github account.
2. Download de code naar jouw computer. 
3. Je begint met de content in HTML, voegt CSS toe voor de vormgeving en JS voor de interactie.

#### Materiaal Forken en Downloaden

  - [Github](https://github.com)
  - [Github Desktop](https://desktop.github.com)
  - [Visual Studio Code](https://code.visualstudio.com)
 

#### 2. HTML
  
HTML is de taal waarmee webpagina's zijn gemaakt die bekeken kunnen worden op het World Wide Web. In het HTML document staat de inhoud van het ontwerp gestructureerd met HTML elementen. In het HTML document van het visitekaartje ```/index.html``` staat alle inhoud die je op de webpagina ziet. 

![image](https://user-images.githubusercontent.com/1391509/188098612-1c334266-33e5-42c9-913c-337a5fc05ae9.png)


1. Open het ```/index.html``` bestand in een editor.
2. Op regel 13 staat een ```<h1>...</h1>``` element met de naam Jane Doe. Voer hier jouw eigen naam in.
3. Op regel 14 staan ```<p><em>...</em></p>``` met daarin de *beschrijving* van Jane. Pas dit aan naar jouw eigen tekst.
4. Pas op dezelfde manier de vaardigheden op regels 36 en verder en het motto op regel 42 aan. 
5. In het voorbeeld staat een foto ```<img src="assets/creative-coder.png">``` op regel 34. Verander de foto met jouw mugshot.
6. Je kunt als je wilt ook de icoontjes vervangen voor iets wat beter bij jouw past, gebruik daarvoor de [Unicode Character Table](https://unicode-table.com/en/).

  
#### Materiaal HTML
- [Getting started with the Web op MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [HTML: HyperText Markup Language op MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Overzicht van HTML elementen @ MDN](https://developer.mozilla.org/nl/docs/Web/HTML/Element)
- [HTML semantics @ YouTube](https://www.youtube.com/watch?v=n9T2B91hHRM)



#### 3. CSS
  
De vormgeving van een webpagina worden vastgelegd in CSS, zoals de layout, achtergrondkleur, tekstkleur en grootte, randen, schaduwen etc). De CSS staat in een los document en wordt aan de HTML pagina gekoppeld in het ```<head>``` element. je mag zelf weten hoe het CSS file heet. In ons voorbeeld heet het file ```/style.css``` en staat het in de map ```/style/```.

![image](https://user-images.githubusercontent.com/1391509/188120479-5c504b54-edcf-4ef5-85af-a93ad56a4953.png)

![image](https://user-images.githubusercontent.com/1391509/188121078-2cd96229-ca3d-42b3-af0c-16a97e1ea00b.png)


  0. Kun je
 zien op welke regel in het HTML document het CSS document wordt gekoppeld?
  1. Open het ```/styles/style.css``` bestand in een editor. 
  2. Op regel 24 en 25 wordt de achtergrondkleur vastgelegd in de regels:
```
background: rgb(0,239,255);
background: linear-gradient(0deg, rgba(0,239,255,1) 40%, #4e54c8 100%);
```
  De eerste waarde stelt een kleur in met RGB notatie. Voer de RGB waarde  voor jouw achtergrondkleur in. Als je het interessant vindt mag je proberen de gradient naar je hand te zetten ;)

  3. Op regel 13 staat ```color: #10214e```, deze regel legt de normale tekstkleur van het bestand vast in hexadecimale notatie. Pas ook deze kleur aan naar jouw kleurenpalet.
  4. Zoek het bestand verder door en zet alle ```background``` en ```color``` declaraties naar jouw hand.
  5. In het bestand wordt ook de stijl bepaald van twee SVG afbeeldingen. De declaraties die hier voor gebruikt worden zijn ```stroke``` en ```fill```. Als je het tof vindt kan je ook die kleuren aanpassen aan jouw kleurenpalet!

#### Materiaal CSS

- [CSS: Cascading Style Sheets op MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Almanac @ CSS-tricks](https://css-tricks.com/almanac/)
- [CSS Typography - Change Font, Size, Spacing & more @ YouTube](https://www.youtube.com/watch?v=RNakAX3rVVw)


#### 4. JS
  
De interactie op de pagina wordt bepaald door Javascript (JS). De JS code staat in een los document en moet ook in het HTML document worden gekoppeld. Dat kan in de ```<head>``` maar ook onder aan in het HTML document. je mag zelf weten hoe het JS file heet. In ons voorbeeld heet het file ```/script.js``` en staat het in de map ```/script/```.

![image](https://user-images.githubusercontent.com/1391509/188120577-0d78cdb1-ef74-4527-9531-a8d92e2a0874.png)

![image](https://user-images.githubusercontent.com/1391509/188120536-c0e137ec-3e6d-4eea-a4a6-20db0cb187ec.png)

  0. Kun je zien op welke regel in het HTML document het JS document wordt gekoppeld?
  1. Open het ```/script/script.js``` bestand in een editor. 
  2. Schrijf achter elke regel wat die doet.
  3. Heb je zelf ook een interactie bedacht voor je visitekaartje? Hoe zou je dat kunnen maken?

#### Materiaal JS

- [What is JavaScript? op MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [One thing about JavaScript @ CSS-tricks](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)






### Integreren

In de integratiefase voer je de aanpassingen door zodat iedereen ze kan zien.

Eerst voeg je de nieuwe code toe aan je lokale _repository_ zodat Github weet wat de nieuwste versie is. Daarna ga je de code uploaden naar de online _repository_ op Github. Tot slot ga je je opdracht publiceren met behulp van Github Pages. Als je dat hebt gedaan staat je website online en hebb je een url, nu kunnen anderen je werk ook zien. 


#### Aanpak

1. Open de Github-Desktop App 
2. Browse naar de repo van deze opdracht FDND-visitekaartje-duplicate
3. Hier zie je alle wijzigingen die je hebt gemaakt [changes].
4. Schrijf een titel waaraan je goed kan zien wat je hebt gewijzigd (dit is verplicht)
5. Schrijf zo nodig ook een beschrijving waarin je kan uitleggen wat er is veranderd en waarom. Dit is vooral handig als je met meer mensen samen werkt. 
6. _Commit_ je code aan je lokale _repository_, klik op [Commit to Master]

https://user-images.githubusercontent.com/1391509/132139986-7c852111-0ced-463e-bb7a-60fd7b7f5670.png![image](https://user-images.githubusercontent.com/1391509/188100380-5573d459-da72-43e6-9258-0776e6d34cc6.png)

  
7. Daarna kun je de wijzigingen uploaden naar de online _repository_ op Github. Klik op [Push origin]

https://user-images.githubusercontent.com/1391509/132140000-a79a7daa-4a28-473f-94bc-0ca8b8cb2fc5.png![image](https://user-images.githubusercontent.com/1391509/188100408-aadcab3e-acb5-4708-bb22-aefd371a52da.png)


8. Nu kun je je website publiceren. Selecteer Setting van je online _repository_ om naar de instellingen te gaan. 
9. Klik in het linkermenu op *Pages*. Als het goed is zie je hetzelfde als in onderstaande screenshot:

https://github.com/fdnd-task-archive/your-tribe-fdnd-visitekaartje-duplicate/blob/main/docs/gh-pages1.png![image](https://user-images.githubusercontent.com/1391509/188101048-f78bed9c-2771-4d24-a766-5ddb77e259b5.png)

10. Selecteer bij *Source* de **Master branch** en klik op Save:

https://github.com/fdnd-task-archive/your-tribe-fdnd-visitekaartje-duplicate/blob/main/docs/gh-pages2.png![image](https://user-images.githubusercontent.com/1391509/188101128-5e92f513-bf3d-4861-b30e-a175733a865b.png)

11. Als het goed is gegaan kan je binnen enkele momenten jouw visitekaartje bekijken via de URL: [https://username.github.io/fdnd-visitekaartje-duplicate/](https://username.github.io/fdnd-visitekaartje-duplicate/).
12. Bekijk jouw visitekaartje even uitgebreid, ga daarna verder met de volgende fase.



#### Materiaal integratiefase

- [Wat is GitHub? Hier een heldere uitleg!](https://programmeerplaats.nl/wat-is-github/)
- [Creating a Github pages site @ Github](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site#creating-your-site)
- [How To Publish Your HTML With Github Pages @ Github](https://anilemrah.medium.com/how-to-publish-your-html-with-github-pages-8f3f854e7d4)

### Testen

In de testfase controleer je of jouw aanpassingen werken zoals bedoeld. Dit kan een technische-test zijn, maar ook een test met gebruikers of een presentatie bij de opdrachtgever om te bespreken of de opdracht goed is.


#### Aanpak

1. Laat jouw visitekaartje testen door een paar klasgenoten en jouw docent. 
2. Maak aantekeningen van de test. 
3. Ben je tevreden met het resultaat? Zo niet herhaal dan bovenstaande stappen.



## Criteria

Focus sprint # - De focus van deze sprint ligt op ...

Deze deeltaak hoort bij het gedragscriterium:  
...

Deze opdracht is done als:

- [ ] ...
- [ ] ...
- [ ] ...

