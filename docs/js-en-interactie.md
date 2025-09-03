# Your Tribe - Visitekaartje

## JavaScript en Interactie (Donderdag)

_In de workshop S01W1-07-JS-en-Interactie wordt uitgelegd wat je moet doen._

De afgelopen dagen hebben we ons ondergedompeld in HTML en CSS. Maar er is nog een belangrijke taal voor een frontender: JavaScript. Een programmeertaal die we als derde laag op het Web kunnen inzetten. Nadat we ons fundament in gestructureerde HTML hebben opgezet, en met CSS de browser een aantal styling hints hebben gegeven, kunnen we met JavaScript (JS) in veel gevallen nog extra functionaliteit en interactie toevoegen.

💡 HTML, CSS en JS hebben alledrie andere regels, omdat het totaal verschillende talen zijn. Als je in HTML en CSS per ongeluk een tikfout maakt, negeert een browser die vaak. De browser gaat gewoon door met de rest van de pagina. In JS gaat het bij een tikfout iets sneller mis. Zodra de browser een fout in JS tegenkomt, wordt de rest niet meer uitgevoerd.

### Aanpak

We gaan net als dinsdag via de developer tools in je browser kort met JS spelen. Net als dat je de live DOM (Document Object Model) en styling kunt inspecteren en veranderen, kun je ook JS interactief uitvoeren op een webpagina.

### Individuele opdrachten

1. Open de developer tools op bijvoorbeeld je visitekaartje, door een element te inspecteren met je rechtermuisknop.

<img src="https://github.com/user-attachments/assets/bffe3e9e-bb70-4f9b-8b02-f9727b7dbc9c" width="400">

2. Ga naar het tabblad _Console_ in je developer tools, waar je JavaScript kunt typen.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/20759257-fd67-46f8-b02f-377df64abca7">

Dit zijn screenshots uit Firefox. De interface verschilt iets per browser, maar allemaal hebben ze een Console met vergelijkbare functionaliteit.

3. JavaScript is goed in rekenen. Probeer bijvoorbeeld eens twee getallen op te tellen, door `5 + 9` in te typen in je _Console_, gevolgd door een Enter.

<img width="487" alt="image" src="https://github.com/user-attachments/assets/14a8e361-1a27-4c3a-a297-16ac6353a948">

Gaaf, misschien wel je eerste stukje JavaScript ooit!

4. Probeer eens `'5' + '9'` uit te voeren..

<img width="358" alt="image" src="https://github.com/user-attachments/assets/4eed8bce-becb-475b-b5ce-5f98103c6c92">

Blijkbaar doet JavaScript verschillende dingen met getallen (_Numbers_) en tekst (_Strings_). Voor nu niet heel relevant, maar dit is één van de regels binnen JavaScript.

5. Wat gebeurt er als we per ongeluk—of expres—iets verkeerd doen? Wat als we `vijf + negen` uitvoeren? Of gewoon `blabla`?

<img width="389" alt="image" src="https://github.com/user-attachments/assets/dbe15c7b-afeb-438d-8f5f-491192c894f1">

Dan krijgen we een foutmelding van JavaScript, omdat dit onbekende termen zijn. Dit gaat vast nog vaker gebeuren, en er is altijd een verklaring voor. Voor nu gaan we door met leukere dingen.

6. Voer `document.body` uit in de Console.

<img width="387" alt="image" src="https://github.com/user-attachments/assets/7457f8d7-5b92-4efb-9fa6-66a8fdbb0a0e">

Je krijgt nu een _referentie_ naar het `<body>` element uit je pagina. Blijkbaar is dit iets speciaals. Met JavaScript kun je het Document Object Model (DOM) vragen stellen, dingen laten doen, of veranderen.

7. Voer `document.Body` uit in de Console.

<img width="382" alt="image" src="https://github.com/user-attachments/assets/1dac7155-857e-43c8-a07b-41a9bfb35596">

Die is “undefined”, dus blijkbaar is het in JavaScript belangrijk dat je goed let op hoofdletters en kleine letters. Een tikfout is snel gemaakt, en ook voor een _undefined_ is altijd een verklaring.

8. Voer `document.querySelector('body')` uit in de Console.

<img width="356" alt="image" src="https://github.com/user-attachments/assets/de618876-bfa9-4961-a637-01f2b2d15a81">

Dit is dus een andere manier om een referentie naar ons `<body>` element te krijgen, maar eentje die veel flexibeler is. Met `document.querySelector()` kun je elke CSS selector gebruiken om een element op te zoeken.

9. Probeer een andere CSS selector uit, bijvoorbeeld door `document.querySelector('h1')` uit te voeren. Wees niet bang voor tikfouten, maar probeer het opnieuw als het niet lukt. (Tip: met pijltje omhoog op je toetsenbord kun je in de Console door vorige opdrachten springen)

<img width="465" alt="image" src="https://github.com/user-attachments/assets/53079324-a194-4d40-ad8b-c1c28758ea83">

10. Verander de inhoud van je pagina door `document.querySelector('body').textContent = 'JS is tof!'` uit te voeren in de Console.

En refresh daarna de pagina :)

Al deze opdrachten kunnen ook via [een script](https://github.com/fdnd-task/your-tribe-profile-card/blob/main/scripts/script.js) uitgevoerd worden. De browser voert elke regel dan stap voor stap uit, als alles goed gaat. Via JavaScript en het Document Object Model kun je bijvoorbeeld elementen opzoeken, naar _events_ luisteren (zoals een _click_ event of een _keyboard_ event), _functies_ uitvoeren zodra zo'n event plaatsvindt, en eigenschappen van de DOM veranderen. Vaak doen we dat laatste door een `class` op een bepaald element te veranderen, zodat er door CSS andere styling toegepast kan worden. HTML, CSS en JS werken op deze manier dus hand in hand.

### Extra opdrachten, voor als je er zin in hebt

1. Bespreek met je buur wat een haalbare, leuke extra _interactie_ in je eigen visitekaartje zou kunnen zijn. Enkele ideeën:
 - Verander de styling als je op een knop klikt, door een class op een element [aan te passen](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/); maak iets groter, opvallender, of laat je kaartje flippen.
 - [Verander een stukje tekst](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#examples) als je op een knop klikt.
 - [Speel een geluidje af](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) als je op een knop klikt. Combineer dit bijvoorbeeld met [een `<audio>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
2. Maak een issue aan op je eigen repository, bedenk een goede titel voor je interactie, en beschrijf deze kort. Voeg ook een [breakdown schets](https://github.com/fdnd-task/your-tribe-profile-card/blob/main/docs/breakdown-schets.md) toe.
3. Vraag feedback op je issue en je breakdown schets. Misschien krijg je wel tips of extra bronnen over hoe je jouw probleem aan kunt pakken.

   _Om iemand te taggen typ je `@` met de GitHub handle:_
<img width="838" height="317" alt="image" src="https://github.com/user-attachments/assets/c42d276b-8361-4c0c-87a1-237682d8bbe4" />

_GitHub handles van jouw docenten:_

| Squad 1i |       | Squad 1J      |       |
| -------- | -------- | -------- | -------- |
| Koop | @KoopReynders | Krijn | @KrijnHoetmer | 
| Joost | @joostf | Cyd | @cydstumpel |
|   |  | Sanne  | @shooft |
|   |  | Suus | @suustenvoorde |

💪 Als je wilt, kun je je interactie ook bouwen. Maak je ook hierbij niet te druk over of het lukt, maar zie elke stap als een verbetering. Vergeet niet je werk via GitHub [te integreren](https://github.com/fdnd-task/your-tribe-profile-card/blob/main/docs/visitekaartje-ontwerpen-maken-en-online-publiceren.md#integreren-15-min) en [te testen](https://github.com/fdnd-task/your-tribe-profile-card/blob/main/docs/visitekaartje-ontwerpen-maken-en-online-publiceren.md#testen-15-min) als het live staat.

💡 Hiermee heb je weer een _iteratie_ op je werk gemaakt, en nog een keer de _development lifecycle_ gevolgd: je hebt een probleem _geanalyseerd_, je hebt een oplossing _ontworpen_, en misschien _gebouwd_ en uiteindelijk _geïntegreerd_ en _getest_. Op naar de volgende iteratie.

### Bronnen en materiaal

- [What is JavaScript? MDN beginner's JavaScript course](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Hey designers, if you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/)

## JS Fundamentals

Om jullie zelfstandig meer met programmeren en JavaScript te laten werken dit semester, staat de deeltaak [JS Fundamentals](https://github.com/fdnd-task/js-fundamentals) op het programma.

Wil je doorgaan met interactief leren programmeren? Kijk dan alvast eens naar [LearnProgramming.online](https://learnprogramming.online/) en kom vanaf volgende week op donderdagen langs bij Jad, de maker van deze cursus.

💪 Heb je al wat ervaring met programmeren, en wil je werken aan je JavaScript skills? Ga dan aan de slag met [LearnJavaScript.online](https://learnjavascript.online/) en laat je vanaf volgende week donderdag begeleiden door Jad, die ook deze cursus gemaakt heeft.

