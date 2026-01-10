// Organizace informací - Databáze otázek
// 246 otázek rozdělených do tématických bloků

const QUESTIONS = [
    // Tematický blok 1: Teorie a Základní pojmy (1-5)
    {
        id: 1,
        category: "ÚVOD | PROČ třídíme",
        question: "Jaký je vztah mezi znakem a věcí v sémiotickém trojúhelníku?",
        answers: [
            "Přímý a kauzální (znak vzniká z podstaty věci).",
            "Zprostředkovaný přes pojem a arbitrární (nahodilý).",
            "Pevně daný gramatickými pravidly daného jazyka.",
            "Vizuální, závislý na formátu informačního nosiče."
        ],
        correct: 1,
        hint: "Zamysli se nad tím, zda slovo 'stůl' má něco společného s fyzickým stolem.",
        explanation: "Znak nemá bezprostřední vztah k věci, vazba je zprostředkovaná přes pojem a má arbitrární povahu."
    },
    {
        id: 2,
        category: "ÚVOD | PROČ třídíme",
        question: "Která definice nejlépe vystihuje 'znalost' v hierarchii data-informace-znalost?",
        answers: [
            "Zaznamenaná symbolická reprezentace reálného světa.",
            "Data s přiděleným významem, ale bez kontextu.",
            "Informace s přiděleným kontextem a propojením v mysli subjektu.",
            "Soubor všech dokumentů v paměťové instituci."
        ],
        correct: 2,
        hint: "Znalost vyžaduje něco víc než jen informaci - souvisí s pochopením.",
        explanation: "Znalosti jsou informace s přiděleným kontextem, propojené s poznatky (např. o Řípu) v mozku."
    },
    {
        id: 3,
        category: "ÚVOD | PROČ třídíme",
        question: "Co představuje Popperův 'Svět 3' (P-III)?",
        answers: [
            "Svět fyzických objektů a jevů.",
            "Svět subjektivního vědomí a myšlenkových procesů.",
            "Svět záznamů na digitálních médiích, nikoliv však analogových.",
            "Sdruženou oblast reprezentující zaznamenané lidské poznání."
        ],
        correct: 3,
        hint: "P-III souvisí s tím, co lidstvo vytvořilo a zaznamenalo.",
        explanation: "P-III reprezentuje komunikační nástroje a zaznamenané lidské poznání."
    },
    {
        id: 4,
        category: "ÚVOD | PROČ třídíme",
        question: "Informační deprivace (neuróza) je definována jako:",
        answers: [
            "Objektivní nedostatek informačních zdrojů v dané lokalitě.",
            "Subjektivní psychický stav způsobený neschopností zpracovat nadbytek informací nebo najít ty relevantní.",
            "Technické selhání přenosu dat v informačním systému.",
            "Ztráta dat v důsledku poškození nosiče."
        ],
        correct: 1,
        hint: "Jde o psychologický, nikoli technický problém.",
        explanation: "Jde o subjektivní důsledek informační exploze vedoucí ke stresu a neschopnosti rozhodování."
    },
    {
        id: 5,
        category: "ÚVOD | PROČ třídíme",
        question: "Co je hlavním účelem obsahové analýzy dokumentu?",
        answers: [
            "Vytvoření formálního bibliografického záznamu (autor, název).",
            "Zjištění, o čem dokument pojednává, za účelem jeho reprezentace.",
            "Překlad dokumentu do jiného přirozeného jazyka.",
            "Fyzické uložení dokumentu do správného regálu."
        ],
        correct: 1,
        hint: "Souvisí s pochopením obsahu, ne s formálními údaji.",
        explanation: "Cílem je zjištění obsahu a jeho následná reprezentace (indexace/klasifikace)."
    },
    // Tematický blok 2: Selekční jazyky (6-10)
    {
        id: 6,
        category: "ČÍM třídíme I.",
        question: "Jaký je zásadní rozdíl mezi systematickým (SSJ) a předmětovým (PSJ) selekčním jazykem?",
        answers: [
            "SSJ používá slova, PSJ používá číselné kódy.",
            "SSJ řadí pojmy tematicky (hierarchicky), PSJ abecedně.",
            "SSJ je vždy postkoordinovaný, zatímco PSJ je prekoordinovaný.",
            "SSJ se používá jen v archivech, PSJ jen v knihovnách."
        ],
        correct: 1,
        hint: "Jeden systém je založen na logickém třídění, druhý na abecedě.",
        explanation: "Systematické jsou uspořádány tematicky, předmětové fungují na abecedním principu."
    },
    {
        id: 7,
        category: "ČÍM třídíme I.",
        question: "Co je typickou vlastností 'postkoordinovaného' selekčního jazyka?",
        answers: [
            "Pojmy jsou spojeny do složitých celků už při tvorbě slovníku (např. 'dovozní daň na auta').",
            "Uživatel kombinuje jednoduché pojmy až v okamžiku vyhledávání (např. 'daň' + 'auto').",
            "Používá se výhradně pro řazení knih na regálech.",
            "Neumožňuje použití boolských operátorů."
        ],
        correct: 1,
        hint: "Post = po, koordinace = spojení. Kdy se pojmy spojují?",
        explanation: "Pojmy jsou rozděleny na složky a kombinují se až při vyhledávání."
    },
    {
        id: 8,
        category: "ČÍM třídíme I.",
        question: "Který z následujících systémů je příkladem prekoordinovaného systematického jazyka?",
        answers: [
            "Klíčová slova z názvu.",
            "Unitermy Mortimera Taubeho.",
            "Deweyho desetinné třídění (DDC).",
            "Deskriptorový tezaurus."
        ],
        correct: 2,
        hint: "Hledej klasifikační systém s číselnými kódy.",
        explanation: "DDC (a MDT, LCC) jsou uvedeny jako příklady prekoordinovaných systematických SJ."
    },
    {
        id: 9,
        category: "ČÍM třídíme I.",
        question: "Co označuje termín 'notace' v kontextu klasifikačních systémů?",
        answers: [
            "Slovní vyjádření obsahu dokumentu.",
            "Kód (znak), který reprezentuje třídu a její vztahy v systému.",
            "Poznámka pod čarou v bibliografickém záznamu.",
            "Seznam vyloučených termínů (stop-slov)."
        ],
        correct: 1,
        hint: "Je to značka nebo kód, který reprezentuje kategorii.",
        explanation: "Notace poskytuje univerzální jazyk pro identifikaci třídy, základem je kód."
    },
    {
        id: 10,
        category: "ČÍM třídíme I.",
        question: "Jaký typ notace představuje zápis 'A11.1.01'?",
        answers: [
            "Lineární notace.",
            "Hierarchická notace.",
            "Binární notace.",
            "Čistě alfabetická notace."
        ],
        correct: 1,
        hint: "Všimni si, jak se zápis postupně rozšiřuje.",
        explanation: "Notace, která se postupně rozšiřuje a odráží strukturu vnoření, je hierarchická."
    },
    // Tematický blok 3: Tezaury a Vztahy (11-15)
    {
        id: 11,
        category: "ČÍM třídíme II.",
        question: "Zkratka 'UF' (Used For) se v tezaurech používá pro:",
        answers: [
            "Označení nadřazeného termínu (Broader Term).",
            "Odkaz od deskriptoru k zakázanému ekvivalentu (nedeskriptoru).",
            "Označení souvisejícího termínu (Related Term).",
            "Definování rozsahu platnosti termínu (Scope Note)."
        ],
        correct: 1,
        hint: "UF = Used For, tedy 'používáno místo'.",
        explanation: "Jde o vztah ekvivalence, 'UF' značí termíny, které deskriptor nahrazuje."
    },
    {
        id: 12,
        category: "ČÍM třídíme II.",
        question: "Jaký sémantický vztah je mezi pojmy 'Les' a 'Strom'?",
        answers: [
            "Generický (rod-druh).",
            "Partitivní (celek-část).",
            "Ekvivalentní (synonymum).",
            "Homonymní (stejné znění, jiný význam)."
        ],
        correct: 1,
        hint: "Je strom druhem lesa, nebo jeho součástí?",
        explanation: "Strom je součástí lesa, jde o vztah celek-část (partitivní)."
    },
    {
        id: 13,
        category: "ČÍM třídíme II.",
        question: "Co je to 'homografie'?",
        answers: [
            "Slova znějí stejně, ale píší se jinak.",
            "Slova se píší stejně, ale vyslovují se odlišně.",
            "Slova mají opačný význam (antonyma).",
            "Slova mající stejný etymologický základ."
        ],
        correct: 1,
        hint: "Graf = psaní. Homo = stejný.",
        explanation: "Homografie je jev, kdy se jednotka píše stejně, ale vyslovuje odlišně."
    },
    {
        id: 14,
        category: "ČÍM třídíme II.",
        question: "Co je úkolem 'relátoru' v řízeném slovníku?",
        answers: [
            "Spojovat dva různé deskriptory do fráze.",
            "Rozlišit význam homonym (formálně shodných jednotek).",
            "Určit gramatický rod slova.",
            "Vyjádřit počet výskytů slova v textu."
        ],
        correct: 1,
        hint: "Relátor je v závorce za slovem - proč tam je?",
        explanation: "Relátor je výraz v závorce k rozlišení homonym, např. Myš (hlodavec) vs Myš (hardware)."
    },
    {
        id: 15,
        category: "ČÍM třídíme II.",
        question: "Která z následujících možností NENÍ typickým příkladem synkategorematického substantiva?",
        answers: [
            "Umělé (ve spojení umělé květiny).",
            "Čokoládová (ve spojení čokoládová vejce).",
            "Nemocnice (ve spojení fakultní nemocnice).",
            "Ojeté (ve spojení ojeté vozy)."
        ],
        correct: 2,
        hint: "Synkategorematická slova popírají členství v původní třídě.",
        explanation: "Synkategorematická substantiva popírají členství v dané třídě (čokoládové vejce není vejce). Nemocnice je plnovýznamová."
    },
    // Tematický blok 4: Konkrétní systémy a Historie (16-20)
    {
        id: 16,
        category: "Univerzální systémy organizace informací",
        question: "Kdo je autorem systému UNITERM?",
        answers: [
            "Melvil Dewey.",
            "Shiyali Ramamrita Ranganathan.",
            "Mortimer Taube.",
            "Paul Otlet."
        ],
        correct: 2,
        hint: "Vznikl v 50. letech 20. století v USA.",
        explanation: "Unitermy zavedl v 50. letech Mortimer Taube."
    },
    {
        id: 17,
        category: "Univerzální systémy organizace informací",
        question: "Co znamená zkratka PMEST v Dvojtečkovém třídění?",
        answers: [
            "Primary, Main, Elementary, Secondary, Tertiary.",
            "Personality, Matter, Energy, Space, Time.",
            "People, Machines, Engineering, Science, Technology.",
            "Physics, Mathematics, Economics, Sociology, Theology."
        ],
        correct: 1,
        hint: "Jsou to základní fasety - kategorie pro analýzu tématu.",
        explanation: "PMEST je formulace faset: Osobnost, Látka, Energie, Prostor, Čas."
    },
    {
        id: 18,
        category: "Univerzální systémy organizace informací",
        question: "Který klasifikační systém využívá 'enumerativní' (výčtový) charakter a je orientován pragmaticky na americké reálie?",
        answers: [
            "MDT (Mezinárodní desetinné třídění).",
            "LCC (Library of Congress Classification).",
            "Dvojtečkové třídění.",
            "EuroVoc."
        ],
        correct: 1,
        hint: "Je to systém největší americké knihovny.",
        explanation: "LCC je pragmatický, enumerativní systém orientovaný na americké reálie."
    },
    {
        id: 19,
        category: "Univerzální systémy organizace informací",
        question: "Co je systém AGROVOC?",
        answers: [
            "Klasifikace ekonomických činností EU.",
            "Tezaurus pro zemědělství a výživu vytvořený FAO.",
            "Systém pro třídění matematických schémat.",
            "Databáze patentů."
        ],
        correct: 1,
        hint: "AGRO = zemědělství, VOC = slovník.",
        explanation: "AGROVOC je tezaurus pro jídlo a zemědělství vytvořený pod OSN/FAO."
    },
    {
        id: 20,
        category: "Univerzální systémy organizace informací",
        question: "Klasifikace NACE je primárně určena pro:",
        answers: [
            "Třídění matematické literatury.",
            "Statistické sledování ekonomických činností.",
            "Popis architektonických prvků.",
            "Digitální humanitní vědy (Digital Humanities)."
        ],
        correct: 1,
        hint: "Používají ji statistické úřady.",
        explanation: "NACE je klasifikace ekonomických činností využívaná statistickými úřady."
    },
    // Tematický blok 5: Indexace a Metriky vyhledávání (21-25)
    {
        id: 21,
        category: "JAK třídíme I.",
        question: "Jaký je vzorec pro výpočet PŘESNOSTI (Precision)?",
        answers: [
            "a/(a+b) (relevantní nalezené / všechny relevantní).",
            "a/(a+c) (relevantní nalezené / všechny nalezené).",
            "(a+d)/(a+b+c+d) (celková správnost).",
            "c/(c+d) (nerelevantní nenalezené)."
        ],
        correct: 1,
        hint: "Přesnost měří, kolik z nalezených je skutečně relevantních.",
        explanation: "Přesnost je počet vyhledaných relevantních děleno počtem všech vyhledaných dokumentů."
    },
    {
        id: 22,
        category: "JAK třídíme I.",
        question: "Pokud se při vyhledávání zvyšuje úplnost (Recall), co se obvykle děje s přesností (Precision)?",
        answers: [
            "Zvyšuje se také.",
            "Snižuje se (vztah je nepřímo úměrný).",
            "Zůstává neměnná.",
            "Klesá na nulu."
        ],
        correct: 1,
        hint: "Představ si houpačku - když jedna strana jde nahoru...",
        explanation: "Poměr mezi úplností a přesností je nepřímo úměrný. Čím více záznamů najdeme, tím menší je přesnost."
    },
    {
        id: 23,
        category: "JAK třídíme I.",
        question: "Konzistence indexace mezi dvěma indexátory se vypočítá jako:",
        answers: [
            "Součet všech přidělených znaků dělený dvěma.",
            "Počet shodných znaků dělený celkovým počtem jedinečných přidělených znaků.",
            "Počet shodných znaků dělený počtem znaků prvního indexátora.",
            "Rozdíl mezi počtem znaků prvního a druhého indexátora."
        ],
        correct: 1,
        hint: "Měříme shodu - kolik znaků se shoduje z celkového počtu.",
        explanation: "Vzorec je C=a/b, kde a je počet shodných a b celkový počet jedinečných znaků."
    },
    {
        id: 24,
        category: "JAK třídíme I.",
        question: "Mezi faktory, které negativně ovlivňují kvalitu indexace, patří 'opominutí hledisek'. O jaký typ chyby jde?",
        answers: [
            "Chyba snižující především přesnost vyhledávání.",
            "Chyba snižující především úplnost vyhledávání.",
            "Chyba formálního charakteru bez vlivu na vyhledávání.",
            "Chyba v syntaxi notace."
        ],
        correct: 1,
        hint: "Pokud chybí deskriptor, dokument nebude nalezen.",
        explanation: "Chybějící deskriptory (opominutí) vedou k tomu, že dokument není nalezen, což snižuje úplnost."
    },
    {
        id: 25,
        category: "JAK třídíme I.",
        question: "Co je to KWIC rejstřík?",
        answers: [
            "Rejstřík autorů seřazený podle data narození.",
            "Keyword In Context – permutovaný rejstřík klíčových slov uprostřed kontextu.",
            "Keyword Out of Context – klíčová slova vytažená mimo text.",
            "Knowledge Weight Index – váhování důležitosti slov."
        ],
        correct: 1,
        hint: "KWIC = Keyword In Context.",
        explanation: "KWIC znamená Keyword in Context, jde o rotovaný rejstřík."
    },
    // Tematický blok 6: Pokročilé koncepty (26-35)
    {
        id: 26,
        category: "JAK třídíme II.",
        question: "Co znamená termín 'Ontologie' v kontextu moderní organizace informací?",
        answers: [
            "Věda o bytí v klasické filosofii bez vztahu k IT.",
            "Typ pojmového modelu pro počítačové zpracování, tvořený třídami a vlastnostmi.",
            "Seznam všech knih vydaných v jednom roce.",
            "Zastaralý typ lístkového katalogu."
        ],
        correct: 1,
        hint: "V informatice jde o formální model domény.",
        explanation: "Ontologie je pojmový model domény pro počítačové zpracování a automatické odvozování."
    },
    {
        id: 27,
        category: "JAK třídíme II.",
        question: "Co je to 'Taxonomie'?",
        answers: [
            "Věda zabývající se teorií a praxí klasifikace (původně organismů).",
            "Systém pro měření daní v ekonomii.",
            "Seznam klíčových slov bez jakékoliv struktury.",
            "Metoda plnotextového vyhledávání."
        ],
        correct: 0,
        hint: "Taxon = třída, nomos = zákon.",
        explanation: "Taxonomie se zabývá klasifikací, původně organismů, v infovědě hierarchickým tříděním."
    },
    {
        id: 28,
        category: "JAK třídíme II.",
        question: "Jaký je rozdíl mezi extraktem a abstraktem?",
        answers: [
            "Extrakt je psaný autorem, abstrakt knihovníkem.",
            "Extrakt je výběr konkrétních vět přímo z dokumentu, abstrakt je shrnutí vlastními slovy.",
            "Extrakt je delší než referát.",
            "Mezi pojmy není rozdíl."
        ],
        correct: 1,
        hint: "Extrakt = vytažení, abstrakt = shrnutí.",
        explanation: "Extrakt je výběr konkrétních částí (vět) z dokumentu, abstrakt je shrnutí."
    },
    {
        id: 29,
        category: "JAK třídíme II.",
        question: "Co znamená 'granularita' v organizaci informací?",
        answers: [
            "Fyzická zrnitost papíru starých tisků.",
            "Úroveň podrobnosti identifikace jednotlivých složek informačního objektu.",
            "Počet chyb v databázi na tisíc záznamů.",
            "Rychlost odezvy vyhledávacího systému."
        ],
        correct: 1,
        hint: "Granule = zrnko. Jak podrobně něco rozdělíme?",
        explanation: "Granularita označuje úroveň podrobnosti identifikace složek."
    },
    {
        id: 30,
        category: "JAK třídíme II.",
        question: "Která metoda čtení se nazývá 'kurzorické'?",
        answers: [
            "Důkladné slovo od slova.",
            "Rychlé pročítání pro zachycení podstatných pasáží a klíčových slov.",
            "Výběrové hledání konkrétní známé informace.",
            "Čtení pouze abstraktu a závěru."
        ],
        correct: 1,
        hint: "Kurzor = běžec. Jde o rychlé procházení textu.",
        explanation: "Kurzorické čtení je rychlé pročítání k zachycení podstaty."
    },
    {
        id: 31,
        category: "JAK třídíme II.",
        question: "Pokud mám dokument o 'dovozní dani na ojetá auta' a systém mi přidělí jeden kód 336.1, jde o přístup:",
        answers: [
            "Prekoordinovaný.",
            "Postkoordinovaný.",
            "Extenzivní.",
            "Plnotextový."
        ],
        correct: 0,
        hint: "Jeden kód pro složený pojem = spojeno předem.",
        explanation: "Složený pojem je vyjádřen jediným znakem, to je prekoordinace."
    },
    {
        id: 32,
        category: "JAK třídíme II.",
        question: "'Backbone thesaurus' slouží primárně k:",
        answers: [
            "Klasifikaci anatomie obratlovců.",
            "Propojení různých systémů v humanitních vědách (jako 'páteř').",
            "Detailnímu popisu technických norem.",
            "Náhradě za DDC v amerických knihovnách."
        ],
        correct: 1,
        hint: "Backbone = páteř. Je to propojovací systém.",
        explanation: "Je to obecný tezaurus pro humanitní vědy, slouží jako propojovací systém."
    },
    {
        id: 33,
        category: "JAK třídíme II.",
        question: "Vztah mezi pojmy 'Pes' a 'Jezevčík' je:",
        answers: [
            "Partitivní (celek-část).",
            "Generický (rod-druh).",
            "Asociační.",
            "Polysémický."
        ],
        correct: 1,
        hint: "Je jezevčík část psa, nebo druh psa?",
        explanation: "Jezevčík je druhem psa (hierarchie rod-druh)."
    },
    {
        id: 34,
        category: "JAK třídíme II.",
        question: "Co znamená zkratka GLAM?",
        answers: [
            "Global Libraries and Museums.",
            "Galleries, Libraries, Archives, Museums.",
            "General Language Archive Method.",
            "Graphic Literature and Media."
        ],
        correct: 1,
        hint: "Jsou to čtyři typy paměťových institucí.",
        explanation: "Zkratka pro paměťové instituce: Galerie, Knihovny, Archivy, Muzea."
    },
    {
        id: 35,
        category: "JAK třídíme II.",
        question: "Kdy používáme 'invertovaný slovosled' v předmětovém hesle?",
        answers: [
            "Vždy, když je heslo v angličtině.",
            "Abychom dostali podstatné jméno na první místo pro lepší řazení (např. Dvořák, Antonín).",
            "Pouze u zeměpisných názvů.",
            "V systémech, které nepodporují diakritiku."
        ],
        correct: 1,
        hint: "Jde o řazení podle významnějšího slova.",
        explanation: "Inverze se používá pro řazení podle významnějšího slova, typicky u jmen."
    },
    // Tematický blok 8: Typologie dokumentů (36-45)
    {
        id: 36,
        category: "CO třídíme",
        question: "Co je podle Arthura Schopenhauera (1851) důležitější než velikost knihovny?",
        answers: [
            "Počet vzácných rukopisů a prvotisků.",
            "Otevřenost knihovny široké veřejnosti.",
            "Její dokonalé uspořádání.",
            "Schopnost knihovny digitalizovat své fondy."
        ],
        correct: 2,
        hint: "Malá, ale dobře uspořádaná knihovna...",
        explanation: "Nejbohatší, ale neuspořádaná knihovna neposkytne tolik užitku jako knihovna malá, ale dobře uspořádaná."
    },
    {
        id: 37,
        category: "CO třídíme",
        question: "Jaký je rozdíl mezi 'explicitní' a 'tacitní' znalostí?",
        answers: [
            "Explicitní je v počítači, tacitní je na papíře.",
            "Explicitní lze vyjádřit a zaznamenat, tacitní je skrytá v mysli (zkušenost).",
            "Explicitní je veřejná, tacitní je tajná.",
            "V dokumentu není tento rozdíl definován."
        ],
        correct: 1,
        hint: "Tacitní = tichá, nevyslovená.",
        explanation: "Znalosti se dělí na explicitní a tacitní (skryté, vázané na subjekt)."
    },
    {
        id: 38,
        category: "CO třídíme",
        question: "V příkladu informačních objektů je uveden objekt 'Enuma Eliš'. Jaký je jeho nosič (médium)?",
        answers: [
            "Kámen.",
            "Hlína (hliněné tabulky).",
            "Papír.",
            "Digitální médium."
        ],
        correct: 1,
        hint: "Jde o starověký babylonský text.",
        explanation: "V tabulce příkladů je u Enuma Eliš uvedena hlína a klínové písmo."
    },
    {
        id: 39,
        category: "CO třídíme",
        question: "Co označuje pojem 'synkategorematické substantivum' v kontextu indexace?",
        answers: [
            "Slovo, které má více než pět slabik.",
            "Podstatné jméno, které samo o sobě nevyjadřuje třídu pojmů, ale popírá členství v ní.",
            "Slovo, které lze použít pouze v jednotném čísle.",
            "Odborný termín převzatý z latiny."
        ],
        correct: 1,
        hint: "Příklad: čokoládové vejce není vejce.",
        explanation: "Jsou to slova, která mění význam tak, že popírají původní třídu."
    },
    {
        id: 40,
        category: "CO třídíme",
        question: "Která z následujících definic nejlépe vystihuje 'informační objekt'?",
        answers: [
            "Generický pojem pro jakýkoli fyzický či virtuální objekt nesoucí libovolný typ či formát informace.",
            "Pouze digitální soubor uložený v databázi.",
            "Synonymum pro tištěnou knihu.",
            "Objekt, který byl zpracován bibliografem."
        ],
        correct: 0,
        hint: "Je to nadřazený, obecný pojem.",
        explanation: "Jde o nadřazený pojem zahrnující dokumenty, soubory i artefakty."
    },
    {
        id: 41,
        category: "JAK třídíme I.",
        question: "Co je cílem 'statarického čtení' při obsahové analýze?",
        answers: [
            "Rychlé prolistování pro zjištění struktury.",
            "Důkladné pročítání textu slovo od slova.",
            "Vyhledání konkrétního jména nebo data.",
            "Čtení pouze abstraktu a závěru."
        ],
        correct: 1,
        hint: "Statarický = stojící na místě, důkladný.",
        explanation: "Statarické čtení je definováno jako důkladné pročítání."
    },
    {
        id: 42,
        category: "JAK třídíme I.",
        question: "Jak se liší 'resumé' od 'abstraktu'?",
        answers: [
            "Resumé píše vždy recenzent, abstrakt autor.",
            "Resumé je kratší než anotace.",
            "Resumé se obvykle vyskytuje u monografií a přibližuje výsledky poznání autora v závěru díla.",
            "Abstrakt se používá pouze v beletrii."
        ],
        correct: 2,
        hint: "Resumé je typické pro monografie a vědecké práce.",
        explanation: "Resumé je typické pro monografie a shrnuje závěry, abstrakt je shrnutí obsahu na začátku."
    },
    {
        id: 43,
        category: "JAK třídíme I.",
        question: "Metoda 'kurzorického čtení' (diagonálního) slouží k:",
        answers: [
            "Hloubkové analýze gramatiky.",
            "Rychlému zachycení podstatných pasáží a klíčových slov.",
            "Čtení nahlas pro kontrolu srozumitelnosti.",
            "Překladu textu do jiného jazyka."
        ],
        correct: 1,
        hint: "Jde o rychlé, letmé čtení.",
        explanation: "Jde o rychlé pročítání pro identifikaci relevantních pojmů."
    },
    {
        id: 44,
        category: "JAK třídíme I.",
        question: "Pokud vytvoříme 'extrakt' dokumentu, co přesně uděláme?",
        answers: [
            "Napíšeme kritické zhodnocení textu.",
            "Vybereme konkrétní věty nebo části přímo z dokumentu a sestavíme z nich nový celek.",
            "Přeložíme název a klíčová slova.",
            "Vytvoříme seznam použité literatury."
        ],
        correct: 1,
        hint: "Extrakt = výtah, vytažení částí.",
        explanation: "Extrakt je výběr konkrétních částí (vět) z původního dokumentu."
    },
    {
        id: 45,
        category: "JAK třídíme I.",
        question: "Podle normy ČSN ISO 5963 se proces indexace skládá ze tří fází. Která mezi ně NEPATŘÍ?",
        answers: [
            "Analýza dokumentu.",
            "Určení obsahu (identifikace pojmů).",
            "Výběr lexikálních jednotek selekčního jazyka.",
            "Fyzické zabalení dokumentu do ochranné fólie."
        ],
        correct: 3,
        hint: "Indexace je intelektuální, ne fyzická činnost.",
        explanation: "Norma řeší analýzu, obsah a výběr znaků, nikoliv fyzické zpracování."
    },
    {
        id: 46,
        category: "JAK třídíme I.",
        question: "Co je považováno za 'sémantický rozklad' a proč se obvykle nedoporučuje?",
        answers: [
            "Rozklad sousloví 'lodní motor' na 'loď' a 'motor' (je doporučený).",
            "Rozklad pojmu na základě významu složek, který vede ke ztrátě smyslu (např. 'barometr' na 'tlak' + 'měření' + 'přístroj').",
            "Rozklad podle abecedy.",
            "Rozklad slovesa na kmen a koncovku."
        ],
        correct: 1,
        hint: "Barometr není jen 'přístroj na měření tlaku'.",
        explanation: "Sémantický rozklad (barometr = tlakoměr) je nevhodný, protože rozbíjí ustálený pojem."
    },
    {
        id: 47,
        category: "JAK třídíme I.",
        question: "Která chyba při indexaci je podle statistik nejčastější (cca 18,6 %)?",
        answers: [
            "Použití špatného rodu podstatného jména.",
            "Opominutí hledisek (chybějící deskriptory).",
            "Překlepy v názvu autora.",
            "Špatné zařazení do fondu."
        ],
        correct: 1,
        hint: "Když indexátor něco zapomene uvést...",
        explanation: "Opominutí hledisek je uvedeno jako nejčastější typ chyby."
    },
    {
        id: 48,
        category: "JAK třídíme I.",
        question: "Co se stane s výsledky vyhledávání, pokud indexátor udělá 'komplexní chybu snižující úplnost'?",
        answers: [
            "Uživatel najde příliš mnoho dokumentů.",
            "Uživatel nenajde relevantní dokument, protože chybí klíčové hledisko.",
            "Uživatel najde dokument, ale v jiném jazyce.",
            "Systém spadne."
        ],
        correct: 1,
        hint: "Úplnost = schopnost najít vše relevantní.",
        explanation: "Tento typ chyby vede k tomu, že záznam není nalezen (nižší úplnost)."
    },
    {
        id: 49,
        category: "JAK třídíme I.",
        question: "Výpočet konzistence indexace pro skupinu více než dvou indexátorů se provádí jako:",
        answers: [
            "Součet všech chyb.",
            "Průměr konzistenčních párů.",
            "Medián délky indexace.",
            "Náhodný výběr jednoho indexátora jako etalonu."
        ],
        correct: 1,
        hint: "Porovnáváme každého s každým a zprůměrujeme.",
        explanation: "U více indexátorů se počítá průměr konzistencí všech možných dvojic (párů)."
    },
    {
        id: 50,
        category: "JAK třídíme I.",
        question: "Který faktor NEPATŘÍ mezi 'pracovní podmínky' ovlivňující kvalitu indexace?",
        answers: [
            "Produktivita práce.",
            "Pracovní prostředí (světlo, hluk).",
            "Technické prostředky.",
            "Jazyková asymetrie (synonymie)."
        ],
        correct: 3,
        hint: "Jazyková asymetrie je vlastnost jazyka, ne pracovní podmínka.",
        explanation: "Jazyková asymetrie je faktor související se systémem/jazykem, nikoliv s pracovními podmínkami."
    },
    {
        id: 51,
        category: "Oborové a specializované systémy organizace informací",
        question: "Jakou notaci používá klasifikace MSC (Mathematics Subject Classification) na první úrovni?",
        answers: [
            "Čistě numerickou (00-99) s vynechávkami pro budoucí doplnění.",
            "Čistě abecední (A-Z).",
            "Hierarchickou desetinnou (jako MDT).",
            "Ikonickou (obrázky)."
        ],
        correct: 0,
        hint: "MSC používá dvouciferná čísla.",
        explanation: "MSC využívá binární notaci pro hlavní třídy (dvouciferná čísla) se záměrnými vynechávkami."
    },
    {
        id: 52,
        category: "Oborové a specializované systémy organizace informací",
        question: "Klasifikace NACE dělí ekonomické činnosti do specifických úrovní. Jaké to jsou?",
        answers: [
            "Kniha, Kapitola, Odstavec.",
            "Oddíl, Skupina, Třída.",
            "Říše, Kmen, Druh.",
            "Vesmír, Galaxie, Planeta."
        ],
        correct: 1,
        hint: "Jde o ekonomickou klasifikaci s logickou strukturou.",
        explanation: "NACE má strukturu: oddíl, skupina, třída."
    },
    {
        id: 53,
        category: "Oborové a specializované systémy organizace informací",
        question: "Mezinárodní klasifikace patentů (IPC) má specifickou strukturu notace na 4. úrovni. Čím je typická?",
        answers: [
            "Používá pouze římské číslice.",
            "Kombinuje numerickou notaci se separátorem (lomítkem).",
            "Je čistě slovní.",
            "Používá barvy pro odlišení oborů."
        ],
        correct: 1,
        hint: "Na 4. úrovni se používá lomítko.",
        explanation: "Čtvrtá úroveň IPC kombinuje čísla s lomítkem."
    },
    {
        id: 54,
        category: "Oborové a specializované systémy organizace informací",
        question: "K čemu slouží tezaurus 'Backbone Thesaurus'?",
        answers: [
            "K popisu anatomie páteře.",
            "Jako obecný propojovací systém (páteř) mezi různými tezaury v humanitních vědách.",
            "K indexaci pouze archeologických nálezů.",
            "Jako náhrada za Google Translate."
        ],
        correct: 1,
        hint: "Backbone = páteř, propojuje různé systémy.",
        explanation: "Je to 'páteřní' tezaurus pro propojení systémů v humanitních vědách."
    },
    {
        id: 55,
        category: "Oborové a specializované systémy organizace informací",
        question: "Co je hlavním problémem tezauru EuroVoc podle studijního materiálu?",
        answers: [
            "Je pouze v angličtině.",
            "Informační systém nezobrazuje uživateli nedeskriptory, i když je používá pro vyhledávání.",
            "Je příliš drahý na pořízení.",
            "Zabývá se pouze zemědělstvím."
        ],
        correct: 1,
        hint: "Uživatel nevidí všechny možnosti vyhledávání.",
        explanation: "Systém nezobrazuje nedeskriptory v rámci odstavce, což uživatele mate."
    },
    {
        id: 56,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co znamená zkratka AXI v kontextu budoucnosti organizace informací?",
        answers: [
            "Artificial X-ray Indexing.",
            "Artificial Explainable Intelligence (vysvětlitelná umělá inteligence).",
            "Automated XML Interface.",
            "Advanced Xerox Integration."
        ],
        correct: 1,
        hint: "Jde o AI, která vysvětluje své rozhodování.",
        explanation: "Jde o AI, která podává informace tak, že je patrné, jak k nim došla (vysvětlitelnost)."
    },
    {
        id: 57,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co je myšleno principem 'Black box' v uživatelských rozhraních budoucnosti?",
        answers: [
            "Uživatel musí zadat heslo do černé skříňky.",
            "Uživatel nevidí procesy na pozadí, zadá dotaz v přirozeném jazyce a dostane výsledek.",
            "Zařízení pro nahrávání indexace letadel.",
            "Systém, který nefunguje."
        ],
        correct: 1,
        hint: "Uživatel neví, co se děje uvnitř systému.",
        explanation: "Uživatel neví přesně, co se s dotazem děje, systém to řeší za něj."
    },
    {
        id: 58,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Jaká je role ontologií v budoucnosti organizace informací?",
        answers: [
            "Budou zcela nahrazeny klíčovými slovy.",
            "Jejich důležitost poroste, slouží k popisu skutečnosti pro počítačové zpracování.",
            "Jsou slepou vývojovou větví.",
            "Budou sloužit jen pro tisk katalogizačních lístků."
        ],
        correct: 1,
        hint: "Ontologie umožňují automatické odvozování znalostí.",
        explanation: "Ontologie jsou perspektivní pro sémantické systémy a automatické odvozování."
    },
    {
        id: 59,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co je to 'granularita' informace?",
        answers: [
            "Zrnitost tisku na papíře.",
            "Úroveň podrobnosti identifikace jednotlivých složek informačního objektu.",
            "Počet autorů jednoho dokumentu.",
            "Velikost datového souboru v bajtech."
        ],
        correct: 1,
        hint: "Jak jemně rozdělíme informační objekt na části?",
        explanation: "Definice granularity: úroveň podrobnosti identifikace složek."
    },
    {
        id: 60,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Jaký trend se očekává v oblasti 'jazykových technologií' (AI)?",
        answers: [
            "Úplně nahradí lidské indexátory do roku 2025.",
            "Budou sloužit jako paralelní (doplňková) metoda přístupu k dokumentům.",
            "Budou zakázány kvůli autorským právům.",
            "Budou se používat jen pro obrázky, ne pro text."
        ],
        correct: 1,
        hint: "AI doplňuje, ale nenahrazuje klasické metody.",
        explanation: "Očekává se, že zůstanou metodou paralelní k metodám klasickým."
    },
    {
        id: 61,
        category: "JAK třídíme II.",
        question: "Co znamená 'asymetrie jazyka' při vyhledávání v plném textu?",
        answers: [
            "Text je zarovnán doleva.",
            "Existuje více výrazů pro jeden pojem (synonymie) nebo jeden výraz pro více pojmů (homonymie).",
            "Některé jazyky se píší zprava doleva.",
            "Autor používá příliš mnoho přídavných jmen."
        ],
        correct: 1,
        hint: "Synonyma a homonyma komplikují vyhledávání.",
        explanation: "Asymetrie jazyka (synonymie, homonymie) způsobuje, že uživatel musí hádat slova autora."
    },
    {
        id: 62,
        category: "JAK třídíme II.",
        question: "Jaký problém řeší 'derivátor slovních tvarů'?",
        answers: [
            "Problém flexe (skloňování a časování) v plnotextovém vyhledávání.",
            "Problém s diakritikou.",
            "Problém s barvou písma.",
            "Derivaci matematických funkcí."
        ],
        correct: 0,
        hint: "Kůň, koně, konírna - všechno souvisí.",
        explanation: "Řeší různé tvary slov (kůň/koně/konírna)."
    },
    {
        id: 63,
        category: "JAK třídíme II.",
        question: "Co jsou to 'proximitní operátory'?",
        answers: [
            "Operátory, které určují, jak blízko sebe se musí nacházet hledaná slova v textu.",
            "Operátory pro sčítání čísel.",
            "Logické operátory AND a OR.",
            "Operátory pro vyhledávání podle data."
        ],
        correct: 0,
        hint: "Proximity = blízkost.",
        explanation: "Vychází z předpokladu, že čím blíže jsou slova u sebe, tím více spolu souvisí."
    },
    {
        id: 64,
        category: "JAK třídíme II.",
        question: "Jaký je rozdíl mezi 'výběrovou indexací' a 'úplnou indexací' (exhaustive)?",
        answers: [
            "Výběrová je levnější, úplná je dražší.",
            "Výběrová vybírá jen podstatná jména.",
            "Výběrová zachytí jen hlavní témata, úplná se snaží pokrýt všechna témata do hloubky.",
            "Úplná indexace znamená přepis celého textu."
        ],
        correct: 2,
        hint: "Exhaustive = vyčerpávající.",
        explanation: "Úplná (exhaustive) indexace jde do hloubky a přináší úplnější výsledky (vyšší Recall)."
    },
    {
        id: 65,
        category: "JAK třídíme II.",
        question: "Co je 'Vektorové vyhledávání'?",
        answers: [
            "Hledání obrázků ve formátu SVG.",
            "Reprezentace textu v prostoru, kde každý výraz je dimenzí a dokument je vektor.",
            "Vyhledávání podle směru psaní textu.",
            "Metoda řazení knih podle výšky hřbetu."
        ],
        correct: 1,
        hint: "Dokumenty a dotazy jsou matematické vektory.",
        explanation: "Dokumenty a dotazy jsou vektory v prostoru, měří se jejich úhlová vzdálenost."
    },
    {
        id: 66,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Kdy vzniklo Deweyho desetinné třídění (DDC)?",
        answers: [
            "1851.",
            "1876.",
            "1905.",
            "1933."
        ],
        correct: 1,
        hint: "V době rozmachu amerického knihovnictví.",
        explanation: "Melvil Dewey publikoval DDC v roce 1876."
    },
    {
        id: 67,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Kdy vzniklo Dvojtečkové třídění (CC) S. R. Ranganathana?",
        answers: [
            "1876.",
            "1933.",
            "1968.",
            "2000."
        ],
        correct: 1,
        hint: "Ve 30. letech 20. století v Indii.",
        explanation: "Ranganathan publikoval CC v roce 1933."
    },
    {
        id: 68,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Kdo je autorem výroku o 'informační explozi' a potřebě uspořádané knihovny z roku 1851?",
        answers: [
            "Melvil Dewey.",
            "Arthur Schopenhauer.",
            "Karel Popper.",
            "Mortimer Taube."
        ],
        correct: 1,
        hint: "Byl to německý filosof.",
        explanation: "Výrok pochází od filosofa Arthura Schopenhauera."
    },
    {
        id: 69,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Ve kterém desetiletí vznikly 'Unitermy' (předchůdce tezaurů)?",
        answers: [
            "90. léta 19. století.",
            "30. léta 20. století.",
            "50. léta 20. století.",
            "80. léta 20. století."
        ],
        correct: 2,
        hint: "Po druhé světové válce v USA.",
        explanation: "Mortimer Taube přišel s unitermy v 50. letech."
    },
    {
        id: 70,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co je typické pro 'Blissovo bibliografické třídění' (BC)?",
        answers: [
            "Je to nejrozšířenější systém na světě.",
            "Je založeno na filosofickém a fazetovém přístupu, je teoreticky kvalitní, ale minimálně rozšířené.",
            "Používá se výhradně pro beletrii.",
            "Nemá žádnou notaci."
        ],
        correct: 1,
        hint: "Teoreticky kvalitní, ale v praxi málo používaný.",
        explanation: "Blissovo třídění je teoreticky fundované (filosofické), ale v praxi málo rozšířené."
    },
    {
        id: 71,
        category: "ČÍM třídíme II.",
        question: "Co je 'lineární notace'?",
        answers: [
            "Znaky následují za sebou (A1, A2, A3) bez vyjádření vnitřní hierarchie.",
            "Znaky se větví jako strom (A, A1, A11).",
            "Notace psaná na jeden řádek.",
            "Notace používající čárový kód."
        ],
        correct: 0,
        hint: "Lineární = v řadě za sebou, bez struktury.",
        explanation: "Lineární notace je prostý výčet bez strukturálního vnoření."
    },
    {
        id: 72,
        category: "ČÍM třídíme II.",
        question: "Co znamená pojem 'pohostinnost notace' (expanzivita)?",
        answers: [
            "Schopnost knihovníka být milý k uživatelům.",
            "Schopnost systému přijímat nové předměty a třídy na správná místa v řadě.",
            "Možnost půjčit si knihu domů.",
            "Odolnost notace proti politickým změnám."
        ],
        correct: 1,
        hint: "Systém 'přijme' nové pojmy jako host.",
        explanation: "Expanzivita/pohostinnost znamená schopnost vkládat nové pojmy do stávající struktury."
    },
    {
        id: 73,
        category: "ČÍM třídíme II.",
        question: "Jaký typ notace používá systém, který kombinuje písmena a čísla (např. A65, ŽIII.X)?",
        answers: [
            "Numerická.",
            "Alfabetická.",
            "Alfanumerická (smíšená).",
            "Binární."
        ],
        correct: 2,
        hint: "Alfa = písmena, numerická = čísla.",
        explanation: "Kombinace písmen a čísel se nazývá alfanumerická nebo smíšená notace."
    },
    {
        id: 74,
        category: "ČÍM třídíme II.",
        question: "Co je 'separátor notace'?",
        answers: [
            "Člověk, který třídí knihy.",
            "Znak (např. tečka, dvojtečka), který odděluje části notace.",
            "Regál rozdělující místnost.",
            "Speciální software pro mazání dat."
        ],
        correct: 1,
        hint: "Separátor = oddělovač.",
        explanation: "Separátor (např. v MDT nebo IPC) odděluje části kódu."
    },
    {
        id: 75,
        category: "ČÍM třídíme II.",
        question: "Binární notace v kontextu klasifikace (např. MSC nebo NACE 1. úroveň) znamená:",
        answers: [
            "Použití pouze nul a jedniček (počítačový kód).",
            "Notaci s fixní délkou (obvykle dva znaky, 01-99) na dané úrovni.",
            "Notaci, která má jen dvě třídy (Ano/Ne).",
            "Notaci psanou dvěma barvami."
        ],
        correct: 1,
        hint: "V tomto kontextu 'binární' neznamená počítačový kód.",
        explanation: "V kontextu těchto systémů 'binární' odkazuje na dvouciferný kód (00-99)."
    },
    {
        id: 76,
        category: "ČÍM třídíme II.",
        question: "Co znamená vztah 'asociace' (RT - Related Term) v tezauru?",
        answers: [
            "Nadřazený pojem.",
            "Vztah mezi dvěma pojmy s nehierarchickým tematickým spojením (např. Kovář - Podkova).",
            "Synonymum.",
            "Překlad slova do jiného jazyka."
        ],
        correct: 1,
        hint: "RT = Related Term, tedy příbuzný termín.",
        explanation: "Asociace je vztah 'viz též', pojmy spolu souvisí, ale nejsou si podřízeny."
    },
    {
        id: 77,
        category: "ČÍM třídíme II.",
        question: "Co je 'kvazisynonymie'?",
        answers: [
            "Úplná shoda významů.",
            "Vztah mezi termíny, které mají rozdílné pojmy, ale podobné významy pro účely vyhledávání.",
            "Slova, která se rýmují.",
            "Falešná synonyma v cizím jazyce."
        ],
        correct: 1,
        hint: "Kvazi = skoro, téměř.",
        explanation: "Jde o 'skoro-synonyma', která systém sloučí pro zjednodušení."
    },
    {
        id: 78,
        category: "ČÍM třídíme II.",
        question: "Co je 'deskriptorový odstavec'?",
        answers: [
            "Fyzický odstavec textu v knize.",
            "Výsledek řízení slovníku – blok obsahující deskriptor a všechny vztahy k němu připojené.",
            "Místo v knihovně, kde jsou uloženy tezaury.",
            "Úvodní kapitola tezauru."
        ],
        correct: 1,
        hint: "Obsahuje termín a jeho okolí (BT, NT, RT, UF).",
        explanation: "Deskriptorový odstavec zobrazuje termín a jeho okolí (vztahy)."
    },
    {
        id: 79,
        category: "ČÍM třídíme II.",
        question: "Který z uvedených vztahů je 'paradigmatický' (apriorní)?",
        answers: [
            "Vztah, který vznikne až ve větě (např. 'pes kousl pošťáka').",
            "Vztah, který existuje nezávisle na kontextu (např. 'pes je zvíře').",
            "Vztah mezi autorem a dílem.",
            "Vztah mezi knihou a regálem."
        ],
        correct: 1,
        hint: "Paradigmatický = daný předem, nezávisle na textu.",
        explanation: "Paradigmatické vztahy jsou pevně dané ve slovníku (synonymie, hierarchie)."
    },
    {
        id: 80,
        category: "ČÍM třídíme II.",
        question: "Co znamená zkratka 'NT' v tezauru?",
        answers: [
            "New Term (nový termín).",
            "Narrower Term (podřazený deskriptor).",
            "Notation Type (typ notace).",
            "No Text (bez textu)."
        ],
        correct: 1,
        hint: "Narrower = užší, specifičtější.",
        explanation: "NT znamená Narrower Term, tedy specifičtější, podřazený pojem."
    },
    {
        id: 81,
        category: "Oborové a specializované systémy organizace informací",
        question: "Jaký typ systému je 'TaDiRaH'?",
        answers: [
            "Tezaurus pro vaření.",
            "Taxonomie výzkumných aktivit v digitálních humanitních vědách.",
            "Klasifikace hudebních nástrojů.",
            "Systém pro třídění odpadu."
        ],
        correct: 1,
        hint: "Digital Humanities = digitální humanitní vědy.",
        explanation: "TaDiRaH je taxonomie pro Digital Humanities."
    },
    {
        id: 82,
        category: "Oborové a specializované systémy organizace informací",
        question: "V systému MDT (Mezinárodní desetinné třídění) znamenají pomocné znaky:",
        answers: [
            "Že je notace chybná.",
            "Možnost vyjádření různých hledisek (místo, čas, forma) a kombinací.",
            "Že kniha patří do skladu.",
            "Pouze grafickou ozdobu."
        ],
        correct: 1,
        hint: "Pomocné tabulky rozšiřují možnosti třídění.",
        explanation: "Pomocné tabulky a znaky v MDT slouží k fasetovému vyjádření aspektů."
    },
    {
        id: 83,
        category: "Oborové a specializované systémy organizace informací",
        question: "Co je výhodou 'Předmětových hesel Kongresové knihovny' (LCSH) oproti tezaurům?",
        answers: [
            "Jsou menší a jednodušší.",
            "Běžně pracují s vlastními jmény (osob, institucí, produktů).",
            "Nepoužívají angličtinu.",
            "Jsou plně automatizované."
        ],
        correct: 1,
        hint: "LCSH umí indexovat konkrétní jména.",
        explanation: "LCSH umožňuje přímou indexaci vlastních jmen, tezaury jsou spíše pro obecné pojmy."
    },
    {
        id: 84,
        category: "Oborové a specializované systémy organizace informací",
        question: "Jaký je hlavní rozdíl mezi 'identifikací pojmů' a 'výběrem znaků SJ'?",
        answers: [
            "Identifikace se děje v hlavě indexátora, výběr znaků je překlad do jazyka systému.",
            "Je to totéž.",
            "Identifikace dělá počítač, výběr člověk.",
            "Identifikace je pro beletrii, výběr pro odbornou literaturu."
        ],
        correct: 0,
        hint: "Nejdřív chápeme, o čem to je, pak to překládáme do kódu.",
        explanation: "Proces jde od analýzy -> identifikace pojmů -> výběr znaku (překlad)."
    },
    {
        id: 85,
        category: "Oborové a specializované systémy organizace informací",
        question: "Co znamená pojem 'přechodová předmětová hesla'?",
        answers: [
            "Hesla, která se používají jen dočasně.",
            "Hesla, u kterých je míra prekoordinace snížena (posun k postkoordinaci).",
            "Hesla pro knihy o mostech a tunelech.",
            "Hesla, která se nepřekládají."
        ],
        correct: 1,
        hint: "Jde o vývojový stupeň mezi pre- a postkoordinací.",
        explanation: "Jde o vývojový stupeň od silné prekoordinace k volnější struktuře."
    },
    // Tematický blok 16: Statistika a Experimenty (86-100)
    {
        id: 86,
        category: "JAK třídíme I.",
        question: "Klasifikace NACE používá na 1. úrovni notaci:",
        answers: ["Desetinnou (číselnou).", "Binární (dvoucifernou 00-99).", "Alfabetickou (A-Z).", "Římskou (I-XX)."],
        correct: 2,
        hint: "Sekce NACE jsou označeny písmeny.",
        explanation: "NACE má sekce označené písmeny (alfabetická), pak následují dvouciferné kódy."
    },
    {
        id: 87,
        category: "Oborové a specializované systémy organizace informací",
        question: "Systém ICS (International Classification for Standards) slouží k popisu:",
        answers: ["Patentů.", "Technických norem.", "Internetových protokolů.", "Obchodních smluv."],
        correct: 1,
        hint: "ICS = klasifikace pro Standards (normy).",
        explanation: "ICS je mezinárodní klasifikace pro normy a standardy."
    },
    {
        id: 88,
        category: "Oborové a specializované systémy organizace informací",
        question: "Klasifikace MSC používá 'přidružovací odkazy'. Jak jsou označeny?",
        answers: ["'Viz též' (See also).", "Šipkou ->.", "Hvězdičkou *.", "Rovnítkem =."],
        correct: 0,
        hint: "Podobně jako v tezaurech - odkaz na související téma.",
        explanation: "MSC využívá přidružovací odkazy typu 'viz též'."
    },
    {
        id: 89,
        category: "Oborové a specializované systémy organizace informací",
        question: "Co je typické pro 'Backbone Thesaurus' z hlediska jeho obsahu?",
        answers: ["Je velmi specifický a detailní.", "Je velmi obecný a povrchní, pojmy jsou použitelné napříč systémy.", "Obsahuje pouze jména autorů.", "Je zaměřen na medicínu."],
        correct: 1,
        hint: "Je to 'páteř' pro propojení různých systémů.",
        explanation: "Je charakterizován jako 'velmi obecný a povrchní', aby propojil humanitní vědy."
    },
    {
        id: 90,
        category: "JAK třídíme I.",
        question: "Podle analýzy indexačních chyb, kolik procent chyb tvořilo 'nesprávné stanovení významu deskriptoru'?",
        answers: ["18,6 %.", "12,3 %.", "42,3 %.", "5,5 %."],
        correct: 1,
        hint: "Je to druhá nejčastější chyba.",
        explanation: "Přesně 12,3 %."
    },
    {
        id: 91,
        category: "JAK třídíme I.",
        question: "Která fáze indexace je podle statistik největším zdrojem chyb (42,3 %)?",
        answers: ["Obsahová analýza.", "Identifikace pojmů.", "Výběr deskriptorů z tezauru.", "Zápis do databáze."],
        correct: 1,
        hint: "Nejsložitější intelektuální část procesu.",
        explanation: "Identifikace pojmů je nejchybovější fází (42,3 %)."
    },
    {
        id: 92,
        category: "CO třídíme",
        question: "Pokud je informačním objektem 'gramofonová deska', jaký je formát obsahu?",
        answers: ["Text.", "Zvuk.", "Data.", "Obraz."],
        correct: 1,
        hint: "Co se přehrává z gramofonové desky?",
        explanation: "V tabulce příkladů je u gramofonové desky uveden formát obsahu 'zvuk'."
    },
    {
        id: 93,
        category: "CO třídíme",
        question: "Co je nosičem (médiem) informačního objektu 'Trajánův sloup'?",
        answers: ["Papír.", "Kámen.", "Hlína.", "Digitální médium."],
        correct: 1,
        hint: "Je to starověká římská památka.",
        explanation: "Trajánův sloup má jako nosič uveden kámen."
    },
    {
        id: 94,
        category: "CO třídíme",
        question: "Jaký je rozdíl mezi dokumentem 'primárním' a 'sekundárním'?",
        answers: ["Primární je originál, sekundární je kopie.", "Primární nese původní informace, sekundární o nich informuje.", "Primární je tištěný, sekundární je digitální.", "Primární je důležitější."],
        correct: 1,
        hint: "Sekundární dokument popisuje primární (např. katalogizační záznam).",
        explanation: "Dělení podle odvozenosti obsahu (primární, sekundární, terciární)."
    },
    {
        id: 95,
        category: "ČÍM třídíme II.",
        question: "Jaký je rozdíl mezi 'monohierarchickým' a 'polyhierarchickým' vztahem?",
        answers: ["Monohierarchie má jeden kořen, polyhierarchie více kořenů.", "V polyhierarchii může být jeden pojem podřazen více nadřazeným pojmům současně.", "Monohierarchie se používá v knihovnách, polyhierarchie na internetu.", "Polyhierarchie je zakázána."],
        correct: 1,
        hint: "Poly = mnoho nadřazených.",
        explanation: "Polyhierarchie znamená, že jeden pojem je podřazen více pojmům."
    },
    {
        id: 96,
        category: "JAK třídíme I.",
        question: "Co vyjadřuje zkratka 'KWOC'?",
        answers: ["Keyword Out of Context.", "Key Word On Computer.", "Knowledge Within Organization Context.", "Keep Without Classification."],
        correct: 0,
        hint: "Opak KWIC - slovo je vytaženo VEN z kontextu.",
        explanation: "Keyword Out of Context - rotovaný rejstřík, kde se klíčová slova vytahují mimo kontext."
    },
    {
        id: 97,
        category: "ÚVOD | PROČ třídíme",
        question: "Příklad s 'horou Říp' (460,8 m n. m.) se používá k demonstraci:",
        answers: ["Rozdílu mezi numerickou a alfanumerickou notací.", "Transformace Data -> Informace -> Znalost.", "Chybovosti v geografických klasifikacích.", "Vývoje českého knihovnictví."],
        correct: 1,
        hint: "460,8 je datum, s kontextem se stává informací a znalostí.",
        explanation: "460,8 je datum. 'Výška Řípu' je informace. 'Vím, že je to památná hora' je znalost."
    },
    {
        id: 98,
        category: "ÚVOD | PROČ třídíme",
        question: "Kdo jsou autoři konceptu 'Sémiotického trojúhelníku'?",
        answers: ["Dewey a Ranganathan.", "Ogden a Richards.", "Marx a Engels.", "Popper a Kuhn."],
        correct: 1,
        hint: "Dílo 'The Meaning of Meaning'.",
        explanation: "C. K. Ogden a I. A. Richards (dílo The Meaning of Meaning)."
    },
    {
        id: 99,
        category: "ÚVOD | PROČ třídíme",
        question: "V přednášce o věcném pořádání se rozlišuje mezi 'aboutness' a 'isness'. Příkladem 'isness' je:",
        answers: ["Téma knihy (např. Dějiny Francie).", "Forma/Žánr dokumentu (např. Slovník, Encyklopedie).", "Jméno autora.", "Počet stránek."],
        correct: 1,
        hint: "'Isness' = co to JE (forma), 'Aboutness' = o čem to je (obsah).",
        explanation: "'Isness' definuje formu (je to slovník), 'Aboutness' definuje obsah."
    },
    {
        id: 100,
        category: "ÚVOD | PROČ třídíme",
        question: "Melvil Dewey (DDC) je v přednáškách často charakterizován jako:",
        answers: ["Filosof a teoretik.", "Pragmatik a obchodník, který chtěl zefektivnit práci v knihovně.", "Umělec a básník.", "Vědec v oblasti biologie."],
        correct: 1,
        hint: "Chtěl systém, který funguje a šetří čas.",
        explanation: "Jeho pragmatismus - chtěl systém, který funguje a standardizuje."
    },
    {
        id: 101,
        category: "ÚVOD | PROČ třídíme",
        question: "Termín 'Literární záruka' (Literary Warrant) znamená:",
        answers: ["Že kniha je pojištěná.", "Že termíny vznikají na základě toho, že o nich existuje literatura.", "Že autor ručí za kvalitu textu.", "Že knihovna musí knihu koupit."],
        correct: 1,
        hint: "Pokud o tom nikdo nepíše, nepotřebujeme pro to deskriptor.",
        explanation: "Termíny v selekčním jazyce vznikají na základě existující literatury."
    },
    {
        id: 102,
        category: "ÚVOD | PROČ třídíme",
        question: "V přednášce o 'Precision a Recall' se používá přirovnání k:",
        answers: ["Houpačce (když jedna jde nahoru, druhá jde dolů).", "Jízdě na kole.", "Vaření polévky.", "Hraní šachů."],
        correct: 0,
        hint: "Nepřímá úměra mezi dvěma veličinami.",
        explanation: "Klasická metafora nepřímé úměry mezi Precision a Recall."
    },
    {
        id: 103,
        category: "ÚVOD | PROČ třídíme",
        question: "Co je v audiu zmíněno jako 'Cutterovo číslo' (Cutter number)?",
        answers: ["Telefonní číslo na autora.", "Alfanumerický kód pro řazení knih v rámci jedné třídy.", "Počet stran knihy.", "Identifikátor digitálního objektu."],
        correct: 1,
        hint: "Řeší abecední řazení knih se stejným tříděním.",
        explanation: "Cutterovo číslo řeší, jak seřadit knihy se stejnou klasifikací podle autora."
    },
    {
        id: 104,
        category: "ÚVOD | PROČ třídíme",
        question: "V přednášce o Semantic Web se mluví o trojici:",
        answers: ["Subjekt – Predikát – Objekt (RDF trojice).", "Otec – Syn – Duch svatý.", "Vstup – Proces – Výstup.", "Autor – Název – Rok."],
        correct: 0,
        hint: "Základem sémantického webu je popis vztahů.",
        explanation: "Základem sémantického webu a ontologií je RDF trojice."
    },
    {
        id: 105,
        category: "ÚVOD | PROČ třídíme",
        question: "Co znamená, že tezaurus je 'živý organismus'?",
        answers: ["Že je vyroben z buněk.", "Že musí být neustále aktualizován, jinak zastarává.", "Že se sám rozmnožuje.", "Že ho napadají viry."],
        correct: 1,
        hint: "Jazyk se vyvíjí, tezaurus musí držet krok.",
        explanation: "Tezaurus musí být neustále aktualizován (nové pojmy, změny významu)."
    },
    {
        id: 106,
        category: "ÚVOD | PROČ třídíme",
        question: "V souvislosti s indexací obrázků se mluví o problému:",
        answers: ["Že obrázky zabírají moc místa.", "'Sémantické propasti' – počítač vidí pixely, člověk vidí význam.", "Že fotoaparáty jsou drahé.", "Že obrázky nemají autory."],
        correct: 1,
        hint: "Semantic Gap mezi strojovým viděním a lidským chápáním.",
        explanation: "Semantic Gap je klíčový pojem u non-textového vyhledávání."
    },
    {
        id: 107,
        category: "ÚVOD | PROČ třídíme",
        question: "Jaký příklad se používá pro vysvětlení 'Folksonomie'?",
        answers: ["Katalogizace v Národní knihovně.", "Flickr nebo Delicious - uživatelé sami lepí štítky.", "Třídění pošty.", "Seznam léků."],
        correct: 1,
        hint: "Sociální sítě, kde uživatelé tagují obsah.",
        explanation: "Flickr je klasický příklad vzniku folksonomií (uživatelského třídění)."
    },
    {
        id: 108,
        category: "ÚVOD | PROČ třídíme",
        question: "V audiu se mluví o 'Stop-slovech' (Stop words). Co to je?",
        answers: ["Slova, která zastaví vyhledávání.", "Gramatická slova s malým významem, která systém ignoruje.", "Zakázaná slova.", "Klíčová slova na konci věty."],
        correct: 1,
        hint: "A, i, o, v, s - nenesou věcnou informaci.",
        explanation: "Stop-slova nenesou věcnou informaci (aboutness)."
    },
    {
        id: 109,
        category: "ÚVOD | PROČ třídíme",
        question: "Co je zmíněno jako výhoda 'Systematického pořádání' na regále?",
        answers: ["Serendipity - efekt náhodného objevu sousední relevantní knihy.", "Knihy jsou seřazeny podle barvy.", "Uživatel nemusí umět číst.", "Knihy se méně práší."],
        correct: 0,
        hint: "Jdu pro jednu knihu a vedle najdu jinou, o které jsem nevěděl.",
        explanation: "Serendipity je výhoda fyzického řazení podle obsahu."
    },
    {
        id: 110,
        category: "ÚVOD | PROČ třídíme",
        question: "V kontextu historie se mluví o 'Lístkovém katalogu'. Co ho nahradilo?",
        answers: ["Sešitový katalog.", "OPAC (Online Public Access Catalog).", "Mikrofiše.", "Nic, zrušil se."],
        correct: 1,
        hint: "Digitální nástupce lístkového katalogu.",
        explanation: "OPAC je digitální nástupce lístkového katalogu."
    },
    {
        id: 111,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co je 'Query Expansion' (rozšiřování dotazu)?",
        answers: ["Uživatel napíše delší větu.", "Systém rozšíří dotaz o synonyma z řízeného slovníku.", "Zvětšení písma na obrazovce.", "Překlad dotazu do angličtiny."],
        correct: 1,
        hint: "Hybridní systém pomáhá uživateli s vyhledáváním.",
        explanation: "Rozšiřování dotazu pomocí řízeného slovníku v hybridních systémech."
    },
    {
        id: 112,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co je 'Latentní sémantické vyhledávání' (LSI)?",
        answers: ["Hledání skrytých zpráv v textu.", "Pokročilá metoda založená na statistických modelech textu.", "Manuální indexace dokumentů.", "Vyhledávání pouze v nadpisech."],
        correct: 1,
        hint: "Moderní model vyhledávání řešící synonymii matematicky.",
        explanation: "Moderní model vyhledávání řešící synonymii matematicky."
    },
    {
        id: 113,
        category: "JAK třídíme I.",
        question: "'Úplná indexace' (Exhaustive Indexing) vede k:",
        answers: ["Vyšší přesnosti a nižší úplnosti.", "Vyšší úplnosti (Recall), ale může snížit přesnost.", "Rychlejšímu zpracování.", "Menší databázi."],
        correct: 1,
        hint: "Více termínů = více výsledků, ale také více šumu.",
        explanation: "Úplná indexace přináší vyšší Recall, ale hrozí nižší přesnost."
    },
    {
        id: 114,
        category: "JAK třídíme I.",
        question: "Co je 'referát' ve srovnání s abstraktem?",
        answers: ["Je kratší.", "Je delší a přibližuje i výsledky a metody výzkumu.", "Je to totéž.", "Referát se jen přednáší ústně."],
        correct: 1,
        hint: "Referát je podrobnější než abstrakt.",
        explanation: "Referát je delší, detailnější než abstrakt."
    },
    {
        id: 115,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co znamená zkratka 'LOD' v kontextu budoucnosti?",
        answers: ["Library of Data.", "Linked Open Data.", "Logical Object Definition.", "Large Online Database."],
        correct: 1,
        hint: "Propojená otevřená data.",
        explanation: "LOD = Linked Open Data, trend standardizace obsahu."
    },
    {
        id: 116,
        category: "JAK třídíme II.",
        question: "Co je 'derivátor slovních tvarů'?",
        answers: ["Nástroj, který řeší problém flexe (pes, psa, psovi).", "Nástroj pro překlad.", "Nástroj pro tvorbu citací.", "Nástroj pro opravu hrubek."],
        correct: 0,
        hint: "Řeší morfologické varianty slov při vyhledávání.",
        explanation: "Řeší různé tvary slov (kůň/koně/konírna)."
    },
    {
        id: 117,
        category: "JAK třídíme I.",
        question: "Co je 'reindexace'?",
        answers: ["Proces nového indexování dokumentů při změně systému.", "Zrušení indexace.", "Kontrola pravopisu.", "Vyřazení dokumentu."],
        correct: 0,
        hint: "Když se změní tezaurus nebo pravidla.",
        explanation: "Využití hodnocení indexace, v praxi se dělá málo kvůli náročnosti."
    },
    {
        id: 118,
        category: "JAK třídíme I.",
        question: "Který systém využívá 'číselníky' (enumerace všech položek)?",
        answers: ["NACE a státní správa.", "Klíčová slova.", "Tezaurus UNESCO.", "Plnotextové vyhledávání."],
        correct: 0,
        hint: "Číselníky jsou typické pro administrativu.",
        explanation: "Číselníky jsou typické pro státní správu a NACE (enumerace)."
    },
    {
        id: 119,
        category: "JAK třídíme I.",
        question: "Co je 'supervize' v procesu kontroly indexace?",
        answers: ["Automatická kontrola počítačem.", "Kontrola správnosti nadřízeným pracovníkem.", "Náhodný výběr.", "Anketa mezi uživateli."],
        correct: 1,
        hint: "Kontrola zkušenějším kolegou.",
        explanation: "Kontrola správnosti a úplnosti, probíhá omezeně kvůli náročnosti."
    },
    {
        id: 120,
        category: "ÚVOD | PROČ třídíme",
        question: "Jaký je vztah mezi 'Data' a 'Údaj' v textu?",
        answers: ["Údaj představuje pouze řetězec znaků (část dat).", "Jsou to synonyma.", "Údaj je nadřazený datům.", "Údaj je pouze v analogové formě."],
        correct: 0,
        hint: "Údaj je součást dat.",
        explanation: "Údaj představuje pouze řetězec znaků, data jsou záznam."
    },
    // Tematický blok 18: Teorie a Praxe II (121-140)
    {
        id: 121,
        category: "ÚVOD | PROČ třídíme",
        question: "Co je hlavním cílem 'informační vědy'?",
        answers: ["Zkoumat vlastnosti a chování informací, síly řídící jejich tok a prostředky jejich zpracování.", "Opravovat počítače.", "Tvořit webové stránky.", "Učit lidi číst."],
        correct: 0,
        hint: "Borkova definice z roku 1968.",
        explanation: "Informační věda zkoumá vlastnosti a chování informací a prostředky jejich zpracování."
    },
    {
        id: 122,
        category: "CO třídíme",
        question: "Jaký je rozdíl mezi 'faktografickou' a 'bibliografickou' informací?",
        answers: ["Faktografická obsahuje přímo fakt (např. bod tání železa), bibliografická odkazuje na dokument.", "Bibliografická je pravdivější.", "Faktografická je v číslech, bibliografická v písmenech.", "Žádný rozdíl není."],
        correct: 0,
        hint: "Odkaz vs. přímá odpověď.",
        explanation: "Faktografická informace poskytuje přímo fakt, bibliografická odkazuje na zdroj."
    },
    {
        id: 123,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co znamená pojem 'Informační gramotnost'?",
        answers: ["Schopnost rychle psát na klávesnici.", "Schopnost uvědomit si informační potřebu, vyhledat, vyhodnotit a efektivně využít informace.", "Znalost programování.", "Schopnost číst v cizím jazyce."],
        correct: 1,
        hint: "Jde o kompetence k práci s informacemi.",
        explanation: "Informační gramotnost zahrnuje rozpoznání potřeby, vyhledání, hodnocení a využití informací."
    },
    {
        id: 124,
        category: "Oborové a specializované systémy organizace informací",
        question: "Který klasifikační systém je známý svou 'fazetovou' strukturou už od počátku?",
        answers: ["Deweyho desetinné třídění.", "Dvojtečkové třídění (Colon Classification).", "LCC.", "MDT."],
        correct: 1,
        hint: "Ranganathanův systém.",
        explanation: "Dvojtečkové třídění (CC) je první plně fazetový systém."
    },
    {
        id: 125,
        category: "Oborové a specializované systémy organizace informací",
        question: "Co je 'MeSH' (Medical Subject Headings)?",
        answers: ["Lékařský slovník pro překladatele.", "Řízený slovník (tezaurus) pro indexování a vyhledávání v medicíně (PubMed).", "Seznam lékařů v USA.", "Klasifikace nemocí pro pojišťovny."],
        correct: 1,
        hint: "Používá se v databázi MEDLINE/PubMed.",
        explanation: "MeSH je tezaurus NLM používaný pro indexaci v medicíně."
    },
    {
        id: 126,
        category: "Oborové a specializované systémy organizace informací",
        question: "K čemu slouží 'PACS' (Physics and Astronomy Classification Scheme)?",
        answers: ["K třídění literatury z fyziky a astronomie.", "K balení knih.", "K výpočtu dráhy planet.", "K archivaci fotografií."],
        correct: 0,
        hint: "Physics and Astronomy.",
        explanation: "PACS se používal pro klasifikaci ve fyzice a astronomii (nahrazen PhySH)."
    },
    {
        id: 127,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co je 'dokumentografický informační systém'?",
        answers: ["Systém, který ukládá plné texty dokumentů.", "Systém, který ukládá zástupné záznamy (metadata) o dokumentech.", "Systém na skartaci dokumentů.", "Systém pro tisk dokumentů."],
        correct: 1,
        hint: "Ukládá 'grafii' (popis) dokumentu, ne dokument samotný.",
        explanation: "Dokumentografický systém pracuje s bibliografickými záznamy (metadaty), ne nutně s plnými texty."
    },
    {
        id: 128,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Jaký je vztah mezi 'šumem' a 'tichem' ve vyhledávání?",
        answers: ["Šum jsou nerelevantní nalezené, ticho jsou relevantní nenalezené.", "Šum je hlasitý, ticho ne.", "Šum zvyšuje přesnost, ticho úplnost.", "Jsou to synonyma."],
        correct: 0,
        hint: "Šum = co tam nemá být, Ticho = co tam chybí.",
        explanation: "Šum (noise) snižuje přesnost, ticho (silence) snižuje úplnost."
    },
    {
        id: 129,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co znamená pojem 'Relevance'?",
        answers: ["Shoda mezi dotazem a dokumentem z pohledu systému nebo uživatele.", "Délka dokumentu.", "Počet citací.", "Jazyk dokumentu."],
        correct: 0,
        hint: "Odpovídá dokument potřebě?",
        explanation: "Relevance je míra shody mezi informačním požadavkem a nalezeným dokumentem."
    },
    {
        id: 130,
        category: "K ČEMU se tříděním DOBÍRÁME",
        question: "Co je 'Pertinence'?",
        answers: ["Objektivní shoda dotazu a dokumentu.", "Subjektivní hodnocení uživatele, zda dokument uspokojil jeho potřebu.", "Technická chyba systému.", "Rychlost vyhledávání."],
        correct: 1,
        hint: "Subjektivní relevance.",
        explanation: "Pertinence je subjektivní relevance - jak je dokument užitečný pro konkrétního uživatele."
    },
    {
        id: 131,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Kdo založil 'Mundaneum'?",
        answers: ["Paul Otlet a Henri La Fontaine.", "Melvil Dewey.", "Tim Berners-Lee.", "S. R. Ranganathan."],
        correct: 0,
        hint: "Belgičtí právníci, otcové dokumentalistiky.",
        explanation: "Mundaneum založili Paul Otlet a Henri La Fontaine v Bruselu."
    },
    {
        id: 132,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Co bylo cílem Paul Otleta?",
        answers: ["Vytvořit univerzální bibliografický repertor. (světový katalog vědění).", "Zničit všechny knihy.", "Vymyslet internet.", "Napsat nejdelší knihu na světě."],
        correct: 0,
        hint: "Předchůdce Googlu na lístcích.",
        explanation: "Snažil se shromáždit a zorganizovat veškeré světové vědění (Repertoire Bibliographique Universel)."
    },
    {
        id: 133,
        category: "ČÍM třídíme II.",
        question: "Co je 'autoritní soubor'?",
        answers: ["Seznam zakázaných knih.", "Seznam unifikovaných forem jmen (osob, korporací) pro zajištění konzistence.", "Seznam autorů bestsellerů.", "Soubor s hesly administrátorů."],
        correct: 1,
        hint: "Aby se 'Čapek, Karel' psal vždy stejně.",
        explanation: "Autoritní soubor sjednocuje formy jmen a názvů pro jednoznačnou identifikaci."
    },
    {
        id: 134,
        category: "ČÍM třídíme II.",
        question: "Co je 'ISBN'?",
        answers: ["International Standard Book Number.", "Internet System for Book Names.", "Internal Serial Book Number.", "Index System for Big Novels."],
        correct: 0,
        hint: "Jedinečný identifikátor knihy.",
        explanation: "ISBN (International Standard Book Number) je mezinárodní standardní číslo knihy."
    },
    {
        id: 135,
        category: "ČÍM třídíme II.",
        question: "Co je 'ISSN'?",
        answers: ["International Standard Serial Number.", "Internet Standard Search Name.", "International System required for Navigation.", "Index of Super Scientific Novels."],
        correct: 0,
        hint: "Identifikátor pro časopisy.",
        explanation: "ISSN je identifikátor pro seriálové publikace (časopisy)."
    },
    {
        id: 136,
        category: "ČÍM třídíme II.",
        question: "Co je 'DOI'?",
        answers: ["Digital Object Identifier.", "Data Over Internet.", "Document Of Interest.", "Digital Online Index."],
        correct: 0,
        hint: "Trvalý odkaz na digitální objekt.",
        explanation: "DOI (Digital Object Identifier) je identifikátor digitálních objektů."
    },
    {
        id: 137,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená 'Open Access'?",
        answers: ["Knihovna má otevřeno nonstop.", "Volný a bezplatný přístup k vědeckým informacím na internetu.", "Otevřený software.", "Přístup pouze pro registrované."],
        correct: 1,
        hint: "Zelená a zlatá cesta publikování.",
        explanation: "Open Access znamená bezplatný přístup k vědeckým výsledkům."
    },
    {
        id: 138,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Impakt faktor'?",
        answers: ["Míra citovanosti časopisu.", "Síla nárazu knihy na zem.", "Počet autorů článku.", "Cena časopisu."],
        correct: 0,
        hint: "Metrika kvality vědeckých časopisů.",
        explanation: "Impakt faktor vyjadřuje průměrnou citovanost článků v daném časopise."
    },
    {
        id: 139,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'H-index' (Hiršův index)?",
        answers: ["Míra produktivity a citovanosti konkrétního vědce.", "Index hloubky indexace.", "Hodnocení humoristických knih.", "Index hustoty textu."],
        correct: 0,
        hint: "Hodnotí vědce: má H publikací, každou citovanou alespoň H-krát.",
        explanation: "H-index kvantifikuje vědecký výstup a dopad (citovanost) vědce."
    },
    {
        id: 140,
        category: "ČÍM třídíme I.",
        question: "Jaký je rozdíl mezi 'deskriptorem' a 'klíčovým slovem'?",
        answers: ["Deskriptor je z řízeného slovníku, klíčové slovo je z přirozeného jazyka.", "Deskriptor je anglicky, klíčové slovo česky.", "Deskriptor je číslo, klíčové slovo text.", "Žádný."],
        correct: 0,
        hint: "Řízený vs. neřízený.",
        explanation: "Deskriptor je autorizovaný termín ze selekčního jazyka, klíčové slovo je volný termín."
    },
    // Tematický blok 19: Technologie a Formáty (141-160)
    {
        id: 141,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'MARC 21'?",
        answers: ["Formát pro výměnu bibliografických dat.", "Program pro psaní knih.", "Typ čtečky čárových kódů.", "Norma pro stavbu regálů."],
        correct: 0,
        hint: "Machine Readable Cataloging.",
        explanation: "MARC 21 je standard pro strojově čitelné katalogizační záznamy."
    },
    {
        id: 142,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Dublin Core'?",
        answers: ["Jednoduchý metadatový standard (15 prvků) pro popis digitálních objektů.", "Hlavní město Irska.", "Jádro operačního systému.", "Typ vazby knihy."],
        correct: 0,
        hint: "DC: Title, Creator, Subject...",
        explanation: "Dublin Core je sada 15 základních metadatových prvků pro popis zdrojů."
    },
    {
        id: 143,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'OAI-PMH'?",
        answers: ["Protokol pro sklízení metadat (Open Archives Initiative).", "Zkratka pro umělou inteligenci.", "Operační systém pro knihovny.", "Formát obrázků."],
        correct: 0,
        hint: "Protocol for Metadata Harvesting.",
        explanation: "OAI-PMH je protokol pro automatizovaný sběr (sklízení) metadat mezi repozitáři."
    },
    {
        id: 144,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Z39.50'?",
        answers: ["Komunikační protokol pro vyhledávání v distribuovaných databázích.", "Cena knihy.", "Typ počítače.", "Rok 3950."],
        correct: 0,
        hint: "Umožňuje prohledávat více knihoven najednou.",
        explanation: "Z39.50 je klient-server protokol pro vyhledávání a získávání informací z databází."
    },
    {
        id: 145,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'OPAC'?",
        answers: ["Online Public Access Catalog.", "Organization of People Against Cats.", "Old Public Archive Center.", "Online Paper And Cards."],
        correct: 0,
        hint: "Katalog pro veřejnost na internetu.",
        explanation: "OPAC je online veřejně přístupný katalog knihovny."
    },
    {
        id: 146,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'RFID' v knihovně?",
        answers: ["Radio Frequency Identification - technologie pro identifikaci a zabezpečení fondu.", "Really Fast Information Delivery.", "Red File In Database.", "Robot For Indexing Data."],
        correct: 0,
        hint: "Čipy v knihách místo čárových kódů.",
        explanation: "RFID čipy umožňují bezkontaktní identifikaci a půjčování knih, i ochranu proti krádeži."
    },
    {
        id: 147,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'digitální knihovna'?",
        answers: ["Organizace, která zpřístupňuje digitální zdroje s odpovídajícími službami.", "Složka s PDF soubory na disku.", "Webová stránka se seznamem odkazů.", "E-shop s e-knihami."],
        correct: 0,
        hint: "Kramerius, EBSCO atd.",
        explanation: "Digitální knihovna je spravovaná sbírka informací s přidanými službami, dostupná přes síť."
    },
    {
        id: 148,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená 'Born-digital'?",
        answers: ["Dokument vznikl přímo v digitální podobě (nemá tištěný předobraz).", "Dokument byl naskenován.", "Dokument o digitálních technologiích.", "Autor se narodil v digitální době."],
        correct: 0,
        hint: "Digitální od narození.",
        explanation: "Born-digital dokumenty vznikly digitálně (e-maily, weby, e-books bez tisku)."
    },
    {
        id: 149,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'digitalizace'?",
        answers: ["Převod analogového dokumentu do digitální podoby.", "Psaní na počítači.", "Počítání na prstech.", "Nákup počítačů."],
        correct: 0,
        hint: "Skenování, OCR.",
        explanation: "Digitalizace je konverze fyzických/analogových nosičů do digitálního kódu."
    },
    {
        id: 150,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'OCR'?",
        answers: ["Optical Character Recognition.", "Online Catalog Reading.", "Old Czech Records.", "Only Computer Readable."],
        correct: 0,
        hint: "Převod obrázku textu na text.",
        explanation: "OCR je optické rozpoznávání znaků - převod naskenovaného obrazu na editovatelný text."
    },
    {
        id: 151,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'dlouhodobá archivace' (LTP - Long Term Preservation)?",
        answers: ["Zajištění dostupnosti a čitelnosti digitálních dat v dlouhém časovém horizontu.", "Uložení knih do sklepa.", "Zálohování na USB disk.", "Tisk emailů."],
        correct: 0,
        hint: "Aby data přežila změny formátů a nosičů.",
        explanation: "LTP řeší obsolescenci HW a SW formátů tak, aby data byla čitelná i za 50 let."
    },
    {
        id: 152,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'emulace' v kontextu archivace?",
        answers: ["Simulace starého prostředí (HW/SW) na novém počítači.", "Kopírování dat.", "Konverze formátu.", "Oprava poškozeného CD."],
        correct: 0,
        hint: "Spuštění staré hry na novém Windows.",
        explanation: "Emulace umožňuje spustit původní SW v simulovaném prostředí na novém HW."
    },
    {
        id: 153,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'migrace' v kontextu archivace?",
        answers: ["Převod dat ze starého formátu do nového (např. DOC -> DOCX).", "Stěhování knihovny.", "Přechod uživatelů k jiné službě.", "Změna barvy webu."],
        correct: 0,
        hint: "Změna formátu pro zachování čitelnosti.",
        explanation: "Migrace je transfer dat na nové nosiče nebo do nových formátů."
    },
    {
        id: 154,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Creative Commons' (CC)?",
        answers: ["Sada veřejných licencí pro autorská díla.", "Společenská hra.", "Typ softwaru.", "Klub tvořivých lidí."],
        correct: 0,
        hint: "CC BY, CC0...",
        explanation: "Creative Commons jsou licence umožňující autorům pružně definovat práva k užití díla."
    },
    {
        id: 155,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená licence 'CC0'?",
        answers: ["Public Domain - vzdání se všech práv, dílo je volné.", "Všechna práva vyhrazena.", "Zakázáno kopírovat.", "Použití pouze pro charitu."],
        correct: 0,
        hint: "Nula práv.",
        explanation: "CC0 je dedikace díla do veřejného vlastnictví (Public Domain)."
    },
    {
        id: 156,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená licence 'CC BY'?",
        answers: ["Uveďte autora.", "Nekomerční užití.", "Nezasahujte do díla.", "Sdílejte za stejných podmínek."],
        correct: 0,
        hint: "By = od koho.",
        explanation: "CC BY vyžaduje pouze uvedení původního autora (attribution)."
    },
    {
        id: 157,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'šedá literatura'?",
        answers: ["Dokumenty, které neprošly standardním vydavatelským procesem (disertace, zprávy).", "Staré noviny.", "Literatura pro seniory.", "Špatně vytištěné knihy."],
        correct: 0,
        hint: "Není bílá (komerční) ani černá (nevydaná).",
        explanation: "Šedá literatura zahrnuje nekomerčně šířené dokumenty (VŠ práce, výzkumné zprávy, interní materiály)."
    },
    {
        id: 158,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'repozitář'?",
        answers: ["Úložiště digitálních objektů (často institucionální).", "Odpadkový koš.", "Místo pro odpočinek.", "Obchod s knihami."],
        correct: 0,
        hint: "Místo, kam univerzity ukládají práce studentů.",
        explanation: "Repozitář je systém pro ukládání, správu a zpřístupňování digitálního obsahu."
    },
    {
        id: 159,
        category: "JAK třídíme I.",
        question: "Co je to 'prekoordinace'?",
        answers: ["Spojení pojmů do složeného výrazu PŘED samotným vyhledáváním (při tvorbě systému/indexaci).", "Spojení pojmů AŽ při vyhledávání.", "Indexace před vydáním knihy.", "Koordinace práce týmu."],
        correct: 0,
        hint: "Pre = předem.",
        explanation: "Prekoordinace znamená, že složené termíny jsou vytvořeny v době tvorby slovníku/indexace."
    },
    {
        id: 160,
        category: "JAK třídíme I.",
        question: "Co je to 'postkoordinace'?",
        answers: ["Spojení pojmů (např. pomocí AND) AŽ v okamžiku vyhledávání.", "Spojení pojmů předem.", "Posílání koordinátů poštou.", "Koordinace po skončení projektu."],
        correct: 0,
        hint: "Post = potom (při hledání).",
        explanation: "Postkoordinace umožňuje kombinovat jednoduché termíny až při dotazu."
    },
    // Tematický blok 20: Doplňkové pojmy (161-180)
    {
        id: 161,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'fulltextové vyhledávání'?",
        answers: ["Prohledávání celého obsahu dokumentů (každého slova).", "Hledání jen v názvu.", "Hledání v plném talíři.", "Čtení celé knihy."],
        correct: 0,
        hint: "Google hledá ve fulltextu.",
        explanation: "Fulltextové vyhledávání indexuje a prohledává každé slovo v textu dokumentu."
    },
    {
        id: 162,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co jsou 'Booleovské operátory'?",
        answers: ["AND, OR, NOT.", "Plus, Mínus, Krát.", "Jeden, Dva, Tři.", "Vlevo, Vpravo, Rovně."],
        correct: 0,
        hint: "George Boole.",
        explanation: "Booleovské operátory (AND, OR, NOT) slouží k logické kombinaci vyhledávacích termínů."
    },
    {
        id: 163,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co dělá operátor 'AND'?",
        answers: ["Průnik - musí tam být oba pojmy.", "Sjednocení - stačí jeden z pojmů.", "Vyloučení - první ano, druhý ne.", "Sečte čísla."],
        correct: 0,
        hint: "Pes AND Kočka = chci oboje.",
        explanation: "AND zužuje výsledky, vyžaduje přítomnost obou (všech) hledaných výrazů."
    },
    {
        id: 164,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co dělá operátor 'OR'?",
        answers: ["Sjednocení - stačí alespoň jeden pojem (rozšiřuje dotaz).", "Průnik - musí být oba.", "Vyloučení.", "Násobení."],
        correct: 0,
        hint: "Pes OR Kočka = je mi to jedno, hlavně zvíře.",
        explanation: "OR rozšiřuje výsledky, stačí, aby byl přítomen alespoň jeden z výrazů (synonyma)."
    },
    {
        id: 165,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co dělá operátor 'NOT'?",
        answers: ["Vyloučení - první pojem ano, druhý nesmí být.", "Negace celého dotazu.", "Nic.", "Potvrzení."],
        correct: 0,
        hint: "Pes NOT Kočka = chci psa, ale bez kočky.",
        explanation: "NOT vylučuje záznamy obsahující daný výraz (zužuje dotaz)."
    },
    {
        id: 166,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'trunkace' (wildcard)?",
        answers: ["Náhrada části slova znakem (např. *), hledá všechny varianty (počítač* -> počítače, počítačový...).", "Zrušení vyhledávání.", "Vyhledávání v kufru.", "Zkrácení textu."],
        correct: 0,
        hint: "Hvězdička na konci slova.",
        explanation: "Trunkace umožňuje vyhledat slovo s různými koncovkami (kmeny slov)."
    },
    {
        id: 167,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'frázové vyhledávání'?",
        answers: ["Hledání přesné fráze v uvozovkách.", "Hledání podle frází z filmu.", "Mluvení ve frázích.", "Hledání přísloví."],
        correct: 0,
        hint: "\"Karel Čapek\"",
        explanation: "Uvozovky zajistí, že se slova hledají přesně v tomto pořadí a tvaru vedle sebe."
    },
    {
        id: 168,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Stemming'?",
        answers: ["Algoritmické odtržení koncovek pro převod na kmen slova.", "Pěstování rostlin.", "Zastavení systému.", "Měření času."],
        correct: 0,
        hint: "Redukce na kořen (stem).",
        explanation: "Stemming je lingvistická redukce slov na jejich kmen (root) pro lepší vyhledávání."
    },
    {
        id: 169,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Lemmatizace'?",
        answers: ["Převod slov na základní slovníkový tvar (lemma).", "Výroba limonády.", "Lepení stránek.", "Mytí lemů."],
        correct: 0,
        hint: "Lepší než stemming, zná gramatiku.",
        explanation: "Lemmatizace převádí různé tvary slova na základní tvar (nominativ, infinitiv) s využitím slovníku."
    },
    {
        id: 170,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Rešerše'?",
        answers: ["Soupis informací/dokumentů na dané téma vyhledaný na základě požadavku.", "Rychlé čtení.", "Recenze knihy.", "Oprava v textu."],
        correct: 0,
        hint: "Výsledek práce informačního pracovníka.",
        explanation: "Rešerše je vyhledání a soupis literatury nebo informací k určitému tématu."
    },
    {
        id: 171,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'MDT'?",
        answers: ["Mezinárodní desetinné třídění.", "Malé domácí třídění.", "Městské divadlo Třebíč.", "Mezinárodní den tisku."],
        correct: 0,
        hint: "UDC v angličtině.",
        explanation: "MDT (Mezinárodní desetinné třídění) je univerzální klasifikační systém."
    },
    {
        id: 172,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Jaký je hlavní znak MDT?",
        answers: ["Hierarchická desetinná struktura a pomocné znaky.", "Abecední řazení.", "Barevné kódy.", "Používá se jen v ČR."],
        correct: 0,
        hint: "Čísla a dvojtečky.",
        explanation: "MDT je typické desetinnými čísly a bohatou syntaxí pomocných znaků (faset)."
    },
    {
        id: 173,
        category: "JAK třídíme I.",
        question: "Co je 'permutovaný rejstřík'?",
        answers: ["Rejstřík, kde se klíčová slova v názvu cyklicky střídají (např. KWIC).", "Náhodný rejstřík.", "Rejstřík zakázaných slov.", "Rejstřík jmen."],
        correct: 0,
        hint: "Rotace slov.",
        explanation: "Permutovaný rejstřík umožňuje hledat podle kteréhokoli slova ve frázi tím, že je posouvá na začátek."
    },
    {
        id: 174,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'citační rejstřík'?",
        answers: ["Nástroj sledující, kdo koho cituje (např. Web of Science).", "Seznam citátů slavných lidí.", "Rejstřík citů.", "Seznam literatury v knize."],
        correct: 0,
        hint: "WoS, Scopus.",
        explanation: "Citační rejstřík indexuje vazby mezi články (Kdo citoval tento článek?)."
    },
    {
        id: 175,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Web of Science'?",
        answers: ["Multidisciplinární citační databáze.", "Web o vědě pro děti.", "Sociální síť pro vědce.", "Vyhledávač obrázků."],
        correct: 0,
        hint: "Clarivate Analytics.",
        explanation: "Web of Science je prestižní citační databáze vědeckých článků."
    },
    {
        id: 176,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Scopus'?",
        answers: ["Velká citační a bibliografická databáze od Elsevieru.", "Dalekohled.", "Latinské slovo pro cíl.", "Časopis."],
        correct: 0,
        hint: "Konkurent Web of Science.",
        explanation: "Scopus je největší abstraktová a citační databáze recenzované literatury."
    },
    {
        id: 177,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Google Scholar'?",
        answers: ["Vyhledávač odborné literatury zdarma.", "Školní Google.", "Google pro učitele.", "Hra od Google."],
        correct: 0,
        hint: "Scholar = učenec.",
        explanation: "Google Scholar je volně dostupný vyhledávač plných textů a citací odborné literatury."
    },
    {
        id: 178,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'peer review'?",
        answers: ["Recenzní řízení - hodnocení kvality článku nezávislými odborníky před vydáním.", "Pohled přes rameno.", "Kamarádská rada.", "Kontrola pravopisu."],
        correct: 0,
        hint: "Rovnocenné hodnocení.",
        explanation: "Peer review (recenzní řízení) zajišťuje kvalitu vědeckých publikací."
    },
    {
        id: 179,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'predátorský časopis'?",
        answers: ["Časopis, který zneužívá Open Access model pro zisk bez řádného recenzního řízení.", "Časopis o dravcích.", "Časopis, který krade články.", "Časopis s agresivní reklamou."],
        correct: 0,
        hint: "Jde jim jen o poplatky od autorů.",
        explanation: "Predátorské časopisy rezignují na kontrolu kvality (peer review) a cílí na poplatky od autorů."
    },
    {
        id: 180,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'ORCID'?",
        answers: ["Jedinečný identifikátor vědce/autora.", "Druh orchideje.", "Organizace pro citace.", "Kód článku."],
        correct: 0,
        hint: "Aby se nepletli dva Nováci.",
        explanation: "ORCID je perzistentní digitální identifikátor, který jednoznačně identifikuje autora."
    },
    // Tematický blok 21: Digitální humanitní vědy a Různé (181-200)
    {
        id: 181,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Digital Humanities' (Digitální humanitní vědy)?",
        answers: ["Oblast na pomezí humanitních věd a informatiky, využívající digitální metody pro výzkum.", "Psaní básní na počítači.", "Historie internetu.", "Digitální hry."],
        correct: 0,
        hint: "Průnik IT a historie/literatury/umění...",
        explanation: "Digital Humanities využívají výpočetní metody pro řešení humanitních otázek."
    },
    {
        id: 182,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Těžba textu' (Text Mining)?",
        answers: ["Automatizované získávání netriviálních informací a vzorů z nestrukturovaného textu.", "Čtení knih v dole.", "Kopírování textu.", "Ruční přepisování textů."],
        correct: 0,
        hint: "Jako Data Mining, ale s textem.",
        explanation: "Text Mining je proces získávání vysoce kvalitních informací z textu pomocí vzorů a trendů."
    },
    {
        id: 183,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená pojem 'Big Data'?",
        answers: ["Data, která jsou tak velká, rychlá nebo složitá, že je nelze zpracovat tradičními metodami.", "Velký harddisk.", "Dlouhý seznam.", "Velké písmo."],
        correct: 0,
        hint: "Volume, Velocity, Variety (3V).",
        explanation: "Big Data se vyznačují velkým objemem, rychlostí a variabilitou (3V)."
    },
    {
        id: 184,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Vzdálený přístup' (Remote Access) do knihovny?",
        answers: ["Přístup k elektronickým zdrojům knihovny z domova (např. přes proxy/Shibboleth).", "Cesta do knihovny autobusem.", "Telefonování do knihovny.", "Posílání knih poštou."],
        correct: 0,
        hint: "Login z domova.",
        explanation: "Vzdálený přístup umožňuje registrovaným uživatelům využívat e-zdroje odkudkoli."
    },
    {
        id: 185,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Discovery systém'?",
        answers: ["Jedno vyhledávací pole pro prohledávání všech zdrojů knihovny současně (katalog, databáze atd.).", "Televizní kanál.", "Vesmírná loď.", "Systém na objevy."],
        correct: 0,
        hint: "Jako Google pro knihovnu (EBSCO Discovery Service, Primo).",
        explanation: "Discovery systém (centrální index) prohledává metadata z mnoha zdrojů najednou."
    },
    {
        id: 186,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'SFX' (v knihovnách)?",
        answers: ["Linkovací server - technologie propojující citaci s plným textem.", "Zvukové efekty.", "Speciální efekty ve filmu.", "Formát souboru."],
        correct: 0,
        hint: "Tlačítko 'Find It' nebo 'Možnosti SFX'.",
        explanation: "SFX (OpenURL resolver) naviguje uživatele od citace k plnému textu, pokud je dostupný."
    },
    {
        id: 187,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamená zkratka 'VPN'?",
        answers: ["Virtual Private Network – bezpečné připojení do sítě instituce.", "Very Personal Note.", "Virtual Public Network.", "Video Phone Number."],
        correct: 0,
        hint: "Tunel do školní sítě.",
        explanation: "VPN (Virtuální privátní síť) se používá pro zabezpečený vzdálený přístup."
    },
    {
        id: 188,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'eduroam'?",
        answers: ["Mezinárodní roamingová wi-fi infrastruktura pro akademickou sféru.", "Edukativní hra.", "Cestovní kancelář pro studenty.", "Místnost ve škole."],
        correct: 0,
        hint: "Wi-Fi na univerzitách po celém světě.",
        explanation: "Eduroam umožňuje studentům a vědcům připojit se k Wi-Fi kdekoli v zapojených institucích."
    },
    {
        id: 189,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'MVS'?",
        answers: ["Meziknihovní výpůjční služba.", "Místní veřejná správa.", "Malý velký slovník.", "Mezinárodní vědecká společnost."],
        correct: 0,
        hint: "Když knihu nemají u vás, půjčí ji odjinud.",
        explanation: "MVS (Meziknihovní výpůjční služba) zajišťuje výpůjčky dokumentů z jiných knihoven."
    },
    {
        id: 190,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'MMVS'?",
        answers: ["Mezinárodní meziknihovní výpůjční služba.", "Městská knihovna.", "Ministerstvo.", "Mobilní síť."],
        correct: 0,
        hint: "MVS ze zahraničí.",
        explanation: "MMVS zajišťuje výpůjčky ze zahraničních knihoven."
    },
    {
        id: 191,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'DDD' (Dodo)?",
        answers: ["Dodej do domu - služba zasílání kopií článků.", "Dlouhá dobrá den.", "Digital Data Disk.", "Druh ptáka."],
        correct: 0,
        hint: "Elektronické dodávání dokumentů.",
        explanation: "Služba elektronického dodávání dokumentů (EDD/DDD) zasílá skeny článků."
    },
    {
        id: 192,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'reprografie'?",
        answers: ["Kopírování a rozmnožování dokumentů (xerox, sken).", "Oprava grafiky.", "Psaní referátů.", "Tvorba grafů."],
        correct: 0,
        hint: "Služby kopírky.",
        explanation: "Reprografické služby zahrnují kopírování, tisk a skenování."
    },
    {
        id: 193,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'akvizice'?",
        answers: ["Proces doplňování knihovního fondu (nákup, dary, výměna).", "Prodej knih.", "Výpůjčka.", "Ztráta knihy."],
        correct: 0,
        hint: "Získávání nových knih.",
        explanation: "Akvizice je proces získávání dokumentů do fondu knihovny."
    },
    {
        id: 194,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'desiderata'?",
        answers: ["Seznam žádaných knih, které knihovna zatím nevlastní.", "Zničené knihy.", "Dezinfekce.", "Desetinné číslo."],
        correct: 0,
        hint: "To, co si přejeme získat.",
        explanation: "Desiderata jsou dokumenty, které knihovna plánuje nebo si přeje získat."
    },
    {
        id: 195,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'katalogizace'?",
        answers: ["Proces popisu dokumentu a tvorba záznamu do katalogu.", "Čtení katalogu.", "Výroba regálů.", "Prodej podle katalogu."],
        correct: 0,
        hint: "Jmenná a věcná.",
        explanation: "Katalogizace zahrnuje bibliografický popis (jmenná) a obsahovou analýzu (věcná)."
    },
    {
        id: 196,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'sigla'?",
        answers: ["Zkratka označující konkrétní knihovnu v souborném katalogu.", "Podpis autora.", "Značka auta.", "Druh písma."],
        correct: 0,
        hint: "Kód knihovny (např. ABA001).",
        explanation: "Sigla je unikátní kód přidělený knihovně pro identifikaci v systémech."
    },
    {
        id: 197,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'souborný katalog'?",
        answers: ["Katalog spojující záznamy z více knihoven (např. CASLIN).", "Katalog všech knih na světě.", "Katalog souborů na disku.", "Tlustý katalog."],
        correct: 0,
        hint: "Umožňuje zjistit, která knihovna knihu má.",
        explanation: "Souborný katalog (Union Catalogue) sdružuje fondy více institucí."
    },
    {
        id: 198,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'SK ČR'?",
        answers: ["Souborný katalog České republiky.", "Svaz knihovníků.", "Skupina kamarádů.", "Státní kontrola."],
        correct: 0,
        hint: "Spravuje ho Národní knihovna.",
        explanation: "SK ČR je Souborný katalog České republiky."
    },
    {
        id: 199,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'CNB'?",
        answers: ["Česká národní bibliografie.", "Česká národní banka.", "Cena na burze.", "Celosvětová nová bible."],
        correct: 0,
        hint: "Soupis všeho, co vyšlo v ČR.",
        explanation: "Česká národní bibliografie (CNB) registruje bohemikální produkci."
    },
    {
        id: 200,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'povinný výtisk'?",
        answers: ["Povinnost vydavatele odevzdat určený počet výtisků vybraným knihovnám.", "Povinná četba.", "Povinnost knihovny tisknout.", "Daň z tisku."],
        correct: 0,
        hint: "Zákonem daná povinnost pro archivaci produkce.",
        explanation: "Povinný výtisk zajišťuje uchování národní produkce v konzervačních fondech."
    },
    // Tematický blok 22: Závěrečné a Rozšiřující otázky (201-220)
    {
        id: 201,
        category: "Minulost, současnost a budoucnost organizace informací",
        question: "Která knihovna byla ve starověku nejznámější?",
        answers: ["Alexandrijská knihovna.", "Městská knihovna v Praze.", "Knihovna Kongresu.", "Bodleian Library."],
        correct: 0,
        hint: "Shořela.",
        explanation: "Alexandrijská knihovna byla nejvýznamnější knihovnou antického světa."
    },
    {
        id: 202,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'kodex'?",
        answers: ["Historická forma knihy (svázané listy), která nahradila svitek.", "Zákoník práce.", "Počítačový kód.", "Tajná šifra."],
        correct: 0,
        hint: "Kniha, jak ji známe dnes.",
        explanation: "Kodex je forma knihy vzniklá ve starověku, skládající se ze svázaných listů."
    },
    {
        id: 203,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'inkunábule' (prvotisk)?",
        answers: ["Kniha vytištěná v Evropě do roku 1500.", "Kniha v kolébce.", "Ručně psaná kniha.", "Kniha o inkoustech."],
        correct: 0,
        hint: "Z latinského 'v kolébce' (knihotisku).",
        explanation: "Inkunábule jsou nejstarší tisky vzniklé od vynálezu knihtisku do r. 1500."
    },
    {
        id: 204,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Kdo vynalezl knihtisk v Evropě?",
        answers: ["Johannes Gutenberg.", "Jan Ámos Komenský.", "Leonardo da Vinci.", "Steve Jobs."],
        correct: 0,
        hint: "V polovině 15. století.",
        explanation: "Johannes Gutenberg vynalezl knihtisk s pohyblivými literami cca 1450."
    },
    {
        id: 205,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'skriptorium'?",
        answers: ["Středověká písařská dílna (obvykle v klášteře).", "Programovací jazyk.", "Místnost na skripta.", "Typ písma."],
        correct: 0,
        hint: "Tam se ručně opisovaly knihy.",
        explanation: "Skriptorium byla místnost v klášterech určená pro opisování rukopisů."
    },
    {
        id: 206,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'iluminace'?",
        answers: ["Výtvarná výzdoba rukopisu (iniciály, miniatury).", "Osvětlení knihovny.", "Zničení knihy.", "Přepis textu."],
        correct: 0,
        hint: "Barevné obrázky ve starých knihách.",
        explanation: "Iluminace je barevná výzdoba středověkých rukopisů."
    },
    {
        id: 207,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'exlibris'?",
        answers: ["Knižní značka vlastníka vlepená do knihy.", "Vyřazená kniha.", "Kniha bez obalu.", "Zvenku knihy."],
        correct: 0,
        hint: "Z knih...",
        explanation: "Exlibris je grafický list označující vlastníka knihy."
    },
    {
        id: 208,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'provenience'?",
        answers: ["Historie vlastnictví a původu knihy.", "Země původu zboží.", "První vydání.", "Procento zisku."],
        correct: 0,
        hint: "Komu kniha patřila dříve.",
        explanation: "Provenience zkoumá vlastnickou historii exempláře (podle exlibris, razítek)."
    },
    {
        id: 209,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'bibliofilie'?",
        answers: ["Krásná, sběratelská kniha, vydaná s důrazem na úpravu.", "Láska k Bibli.", "Nemoc z knih.", "Levná kniha."],
        correct: 0,
        hint: "Kniha jako umělecké dílo.",
        explanation: "Bibliofilie je kniha vydaná s mimořádnou péčí o grafickou úpravu pro sběratele."
    },
    {
        id: 210,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'faksimile'?",
        answers: ["Věrná kopie předlohy (rukopisu, starého tisku).", "Faxová zpráva.", "Falzifikát.", "Levná kopie."],
        correct: 0,
        hint: "Vypadá jako originál.",
        explanation: "Faksimile je mechanicky nebo fotograficky pořízená věrná napodobenina originálu."
    },
    {
        id: 211,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'anotace'?",
        answers: ["Stručná charakteristika obsahu dokumentu.", "Poznámka pod čarou.", "Negativní recenze.", "Jméno autora."],
        correct: 0,
        hint: "Pár vět o čem to je.",
        explanation: "Anotace je stručná informativní poznámka o obsahu dokumentu."
    },
    {
        id: 212,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'abstrakt'?",
        answers: ["Výstižné shrnutí obsahu dokumentu (delší než anotace).", "Abstraktní umění.", "Titul knihy.", "Obsah (seznam kapitol)."],
        correct: 0,
        hint: "Shrnutí článku na začátku.",
        explanation: "Abstrakt je reprezentace obsahu dokumentu, měl by fungovat i samostatně."
    },
    {
        id: 213,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'klíčové slovo'?",
        answers: ["Slovo z přirozeného jazyka vystihující obsah.", "Heslo k počítači.", "Slovo, které otevírá dveře.", "První slovo v knize."],
        correct: 0,
        hint: "Tag.",
        explanation: "Klíčová slova jsou vybrané termíny reprezentující obsah, obvykle neřízené."
    },
    {
        id: 214,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'rešeršní strategie'?",
        answers: ["Plán postupu při vyhledávání (volba zdrojů, klíčových slov, operátorů).", "Strategická hra.", "Způsob čtení.", "Plánování nákupu knih."],
        correct: 0,
        hint: "Jak budu hledat.",
        explanation: "Rešeršní strategie je promyšlený postup zadávání dotazů pro dosažení nejlepšího výsledku."
    },
    {
        id: 215,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'informační potřeba'?",
        answers: ["Stav nedostatku informací, který vede k vyhledávání.", "Chuť číst.", "Potřeba mluvit.", "Touha vlastnit knihy."],
        correct: 0,
        hint: "Uvědomění si, že něco nevím.",
        explanation: "Informační potřeba je uvědomělý nedostatek znalostí nutný k vyřešení problému."
    },
    {
        id: 216,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'informační chování'?",
        answers: ["Způsob, jakým lidé hledají, využívají a sdílejí informace.", "Chování počítače.", "Slušné chování v knihovně.", "Rychlost čtení."],
        correct: 0,
        hint: "Human Information Behavior.",
        explanation: "Informační chování zkoumá interakci lidí s informačními systémy a zdroji."
    },
    {
        id: 217,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'citační etika'?",
        answers: ["Soubor pravidel pro správné citování a zamezení plagiátorství.", "Slušné chování při citování básní.", "Etika prodeje citátů.", "Zákaz citování."],
        correct: 0,
        hint: "Nekrást myšlenky.",
        explanation: "Citační etika zahrnuje povinnost uvádět zdroje a respektovat autorská práva."
    },
    {
        id: 218,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'plagiátorství'?",
        answers: ["Vydávání cizího díla nebo myšlenky za vlastní.", "Psaní pod pseudonymem.", "Překlad knihy.", "Psaní na stroji."],
        correct: 0,
        hint: "Krádež duševního vlastnictví.",
        explanation: "Plagiátorství je neetické převzetí cizího díla bez uvedení původního autora."
    },
    {
        id: 219,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'samocitace'?",
        answers: ["Citování vlastního dřívějšího díla.", "Mluvení pro sebe.", "Citování sama doma.", "Vymyšlená citace."],
        correct: 0,
        hint: "Když autor cituje sám sebe.",
        explanation: "Samocitace je odkaz na vlastní dřívější publikaci (je legitimní, pokud je relevantní)."
    },
    {
        id: 220,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'ISO 690'?",
        answers: ["Norma pro bibliografické citace.", "Norma pro velikost papíru.", "Norma pro kvalitu vody.", "Norma pro stavbu knihoven."],
        correct: 0,
        hint: "Podle ní se cituje v ČR.",
        explanation: "ISO 690 je mezinárodní norma upravující pravidla pro tvorbu bibliografických citací."
    },
    {
        id: 221,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'DMP' (Data Management Plan)?",
        answers: ["Plán správy dat - dokument popisující, jak bude nakládáno s daty během výzkumu a po něm.", "Databázový management.", "Druh pojištění.", "Plán na zničení dat."],
        correct: 0,
        hint: "Vyžadují ho grantové agentury.",
        explanation: "DMP popisuje životní cyklus výzkumných dat (sběr, uložení, sdílení, archivace)."
    },
    {
        id: 222,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'FAIR principy'?",
        answers: ["Findable, Accessible, Interoperable, Reusable - zásady pro správu vědeckých dat.", "Férové jednání.", "Festival autorského čtení.", "Four Artificial Intelligent Robots."],
        correct: 0,
        hint: "Aby byla data k něčemu.",
        explanation: "FAIR principy zajišťují, že data jsou nalezitelná, dostupná, interoperabilní a znovu využitelná."
    },
    {
        id: 223,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Citizen Science' (občanská věda)?",
        answers: ["Zapojení veřejnosti do vědeckého výzkumu (sběr dat, analýza).", "Věda o občanech.", "Politická věda.", "Věda ve městě."],
        correct: 0,
        hint: "Amatéři pomáhají vědcům (např. sčítání ptáků).",
        explanation: "Citizen Science zapojuje neprofesionály do vědeckých projektů (crowdsourcing)."
    },
    {
        id: 224,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Gamifikace'?",
        answers: ["Využití herních prvků v neherním kontextu (např. ve výuce).", "Hraní her v práci.", "Vývoj her.", "Závislost na hrách."],
        correct: 0,
        hint: "Body, odznaky, žebříčky...",
        explanation: "Gamifikace používá herní mechanismy pro zvýšení motivace a angažovanosti."
    },
    {
        id: 225,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'E-learning'?",
        answers: ["Vzdělávací proces využívající informační a komunikační technologie.", "Elektronická pošta.", "Elektrické vedení.", "Výuka o elektřině."],
        correct: 0,
        hint: "Učení přes počítač.",
        explanation: "E-learning je výuka podporovaná digitálními technologiemi."
    },
    {
        id: 226,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'MOOC'?",
        answers: ["Massive Open Online Course - hromadné otevřené online kurzy.", "Moc velká kniha.", "Muzeum.", "Ministerstvo kultury."],
        correct: 0,
        hint: "Coursera, edX...",
        explanation: "MOOC jsou online kurzy určené pro neomezený počet účastníků zdarma nebo za poplatek."
    },
    {
        id: 227,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'OER'?",
        answers: ["Open Educational Resources - otevřené vzdělávací zdroje.", "Organizace pro ekonomický rozvoj.", "Operační systém.", "Obchodní rejstřík."],
        correct: 0,
        hint: "Učebnice zdarma pro všechny.",
        explanation: "OER jsou výukové materiály dostupné pod svobodnou licencí pro použití a úpravy."
    },
    {
        id: 228,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Moodle'?",
        answers: ["LMS (Learning Management System) - systém pro řízení výuky.", "Nudle.", "Sociální síť.", "Vyhledávač."],
        correct: 0,
        hint: "Používají ho školy pro e-learning.",
        explanation: "Moodle je open-source platforma pro tvorbu online kurzů."
    },
    {
        id: 229,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Wikipedie'?",
        answers: ["Otevřená online encyklopedie tvořená dobrovolníky.", "Vědecká databáze.", "Stránka WikiLeaks.", "Slovník cizích slov."],
        correct: 0,
        hint: "Encyklopedie, kterou může upravovat každý.",
        explanation: "Wikipedie je mnohojazyčná webová encyklopedie se svobodným obsahem."
    },
    {
        id: 230,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'Creative Commons Zero' (CC0)?",
        answers: ["Vzdání se autorských práv (Public Domain).", "Zákaz kopírování.", "Povinnost uvést autora.", "Komerční licence."],
        correct: 0,
        hint: "Nula omezení.",
        explanation: "CC0 umožňuje autorům vzdát se všech práv a uvolnit dílo jako volné (Public Domain)."
    },
    {
        id: 231,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co znamena 'Public Domain'?",
        answers: ["Volné dílo, na které se nevztahují majetková autorská práva (vypršela nebo se jich autor vzdal).", "Veřejný park.", "Státní majetek.", "Doména na internetu."],
        correct: 0,
        hint: "Může to použít kdokoli jakkoli.",
        explanation: "Dílo v Public Domain (volné dílo) není chráněno autorským právem (např. 70 let po smrti autora)."
    },
    {
        id: 232,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'GDPR'?",
        answers: ["Obecné nařízení o ochraně osobních údajů v EU.", "Grafický program.", "Formát dat.", "Zkratka pro Google."],
        correct: 0,
        hint: "Ochrana soukromí.",
        explanation: "GDPR (General Data Protection Regulation) chrání osobní údaje občanů EU."
    },
    {
        id: 233,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'osobní údaj'?",
        answers: ["Jakákoliv informace týkající se identifikované nebo identifikovatelné fyzické osoby.", "Jen rodné číslo.", "Jen jméno.", "Jen adresa."],
        correct: 0,
        hint: "Cokoli, co vede ke konkrétnímu člověku.",
        explanation: "Osobní údaj je jakákoliv informace, podle které lze přímo či nepřímo identifikovat osobu."
    },
    {
        id: 234,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'senzitivní údaj' (zvláštní kategorie)?",
        answers: ["Údaj o rase, náboženství, zdravotním stavu, politických názorech apod.", "Telefonní číslo.", "Email.", "Datum narození."],
        correct: 0,
        hint: "Může sloužit k diskriminaci.",
        explanation: "Senzitivní údaje podléhají přísnější ochraně (zdraví, biometrie, vyznání)."
    },
    {
        id: 235,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'právo být zapomenut'?",
        answers: ["Právo subjektu údajů na výmaz osobních údajů (za určitých podmínek).", "Ztráta paměti.", "Právo na anonymitu na internetu.", "Zrušení účtu na Facebooku."],
        correct: 0,
        hint: "Smazání z Googlu.",
        explanation: "GDPR zavádí právo na výmaz (být zapomenut), pokud pominul důvod zpracování."
    },
    {
        id: 236,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'informační bezpečnost'?",
        answers: ["Ochrana informací a systémů před neoprávněným přístupem, použitím, vyzrazením atd.", "Zamykání knihovny.", "Antivirus.", "Heslo."],
        correct: 0,
        hint: "CIA triáda (Confidentiality, Integrity, Availability).",
        explanation: "Informační bezpečnost se stará o důvěrnost, integritu a dostupnost informací."
    },
    {
        id: 237,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'phishing'?",
        answers: ["Podvodná technika získávání citlivých údajů (hesel) vydáváním se za důvěryhodnou autoritu v elektronické komunikaci.", "Rybaření.", "Vir v počítači.", "Spam."],
        correct: 0,
        hint: "Naletět na falešný email od banky.",
        explanation: "Phishing je forma sociálního inženýrství cílící na krádež identit a údajů."
    },
    {
        id: 238,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'malware'?",
        answers: ["Škodlivý software (viry, trojany, ransomware).", "Malý software.", "Hardware.", "Antivirus."],
        correct: 0,
        hint: "Malicious software.",
        explanation: "Malware je souhrnné označení pro veškerý škodlivý kód."
    },
    {
        id: 239,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'ransomware'?",
        answers: ["Vyděračský software, který zašifruje data a požaduje výkupné.", "Software pro běhání.", "Program na úpravu fotek.", "Hra."],
        correct: 0,
        hint: "Ransom = výkupné.",
        explanation: "Ransomware blokuje přístup k datům a vyžaduje platbu za dešifrování."
    },
    {
        id: 240,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'sociální inženýrství' (v bezpečnosti)?",
        answers: ["Manipulace lidí za účelem získání citlivých informací nebo neoprávněného přístupu.", "Stavba mostů.", "Sociologie.", "Práce s lidmi."],
        correct: 0,
        hint: "Hacking lidí, ne počítačů.",
        explanation: "Sociální inženýrství využívá lidské chyby a důvěřivosti k prolomení bezpečnosti."
    },
    {
        id: 241,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'hoax'?",
        answers: ["Poplašná zpráva, podvod, klam šířený internetem.", "Vtip.", "Virus.", "Reklama."],
        correct: 0,
        hint: "Falešná zpráva o zpoplatnění Facebooku.",
        explanation: "Hoax je masově šířená nepravdivá zpráva (fáma, žert)."
    },
    {
        id: 242,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'fake news'?",
        answers: ["Falešné zprávy, dezinformace vydávané za žurnalistiku.", "Novinky ze světa módy.", "Bývalé zprávy.", "Chyba v tisku."],
        correct: 0,
        hint: "Úmyslná lež pro ovlivnění mínění.",
        explanation: "Fake news jsou záměrně nepravdivé informace šířené s cílem klamat."
    },
    {
        id: 243,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'deepfake'?",
        answers: ["Syntetická média (video/audio) vytvořená AI, kde je tvář/hlas nahrazen někým jiným.", "Hluboká myšlenka.", "Falešný profil.", "Photoshop."],
        correct: 0,
        hint: "Video, kde prezident říká něco, co neřekl.",
        explanation: "Deepfake využívá umělou inteligenci k vytvoření realistických falešných videí nebo audia."
    },
    {
        id: 244,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'kybernetická bezpečnost'?",
        answers: ["Ochrana sítí, zařízení a dat před útoky a neoprávněným přístupem v digitálním prostoru.", "Bezpečnost robotů.", "Ochrana před bleskem.", "Zámek na počítači."],
        correct: 0,
        hint: "Cybersecurity.",
        explanation: "Kyberbezpečnost se zaměřuje na obranu digitálních aktiv před hrozbami."
    },
    {
        id: 245,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'IoT' (Internet of Things)?",
        answers: ["Síť fyzických zařízení ('věcí') vybavených elektronikou a konektivitou pro sběr a výměnu dat.", "Internet pro lidi.", "Webové stránky o věcech.", "Interní obchodní tým."],
        correct: 0,
        hint: "Chytrá lednička, chytré hodinky.",
        explanation: "IoT (Internet věcí) propojuje běžná zařízení s internetem."
    },
    {
        id: 246,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Co je 'AI' (Artificial Intelligence)?",
        answers: ["Schopnost strojů napodobovat lidskou inteligenci (učení, řešení problémů).", "Absolutní jistota.", "Americký idol.", "Automatická instalace."],
        correct: 0,
        hint: "Umělá inteligence.",
        explanation: "Umělá inteligence je obor informatiky zabývající se tvorbou strojů vykazujících známky inteligence."
    },
    // Nové otázky - Dávka 1
    {
        id: 247,
        category: "ÚVOD | PROČ třídíme",
        question: "Sémiotika se zabývá obecnou teorií:",
        answers: [
            "znaků",
            "jazyka",
            "sociální komunikace",
            "vědecké komunikace"
        ],
        correct: 0,
        hint: "Séma = znak.",
        explanation: "Sémiotika je nauka o znacích a znakových systémech."
    },
    {
        id: 248,
        category: "ÚVOD | PROČ třídíme",
        question: "Doplňte třetí vrchol sémantického trojúhelníku, jsou-li první dva JEV a ZNAK:",
        answers: [
            "symbol",
            "atribut",
            "pojem",
            "výraz"
        ],
        correct: 2,
        hint: "To, co máme v hlavě (myšlenka).",
        explanation: "Trojúhelník tvoří: Znak (forma) - Jev (objekt) - Pojem (význam/myšlenka)."
    },
    {
        id: 249,
        category: "CO třídíme",
        question: "Určete správné pořadí termínů, mají-li být seřazeny od významově nejobecnějšího k nejspecifičtějšímu:",
        answers: [
            "dokument, informační objekt, kniha, monografie",
            "dokument, informační objekt, monografie, kniha",
            "kniha, monografie, dokument, informační objekt",
            "informační objekt, dokument, kniha, monografie"
        ],
        correct: 3,
        hint: "Nejobecnější je IO, nejkonkrétnější typ knihy.",
        explanation: "Informační objekt > Dokument (zaznamenaný) > Kniha (formát) > Monografie (typ obsahu)."
    },
    {
        id: 250,
        category: "CO třídíme",
        question: "Mezi seriálové typy dokumentů nepatří:",
        answers: [
            "časopis",
            "zpravodaj",
            "festschrift (jubilejní sborník)",
            "ročenka"
        ],
        correct: 2,
        hint: "Vychází to pravidelně, nebo jednorázově k výročí?",
        explanation: "Festschrift vychází jednorázově (k výročí), není to periodikum (seriál)."
    },
    {
        id: 251,
        category: "CO třídíme",
        question: "Ve čtyřvrstvém konceptu díla podle LRM (Library Reference Model) se pojem MANIFESTATION do češtiny překládá jako:",
        answers: [
            "manifestace",
            "demonstrace",
            "provedení",
            "založení"
        ],
        correct: 2,
        hint: "Fyzické ztělesnění výrazu.",
        explanation: "Manifestation se v modelu LRM/FRBR překládá jako 'provedení'."
    },
    {
        id: 252,
        category: "ČÍM třídíme I.",
        question: "Označte obecně platnou charakteristiku selekčního jazyka:",
        answers: [
            "je založen na přirozeném jazyce",
            "je umělým jazykem",
            "používá se v knihovnách",
            "používá se pro vyhledávání"
        ],
        correct: 1,
        hint: "Je vytvořen účelově člověkem.",
        explanation: "Selekční jazyk je formalizovaný, umělý jazyk určený k pořádání a vyhledávání."
    },
    {
        id: 253,
        category: "ČÍM třídíme I.",
        question: "Jednou ze složek selekčního jazyka je:",
        answers: [
            "selekční obraz dokumentu",
            "řízený slovník",
            "sémiotický trojúhelník",
            "polyhierarchický vztah"
        ],
        correct: 1,
        hint: "Seznam povolených termínů.",
        explanation: "Řízený slovník je lexikální složkou selekčního jazyka."
    },
    {
        id: 254,
        category: "ČÍM třídíme I.",
        question: "V prekoordinovaném selekčním jazyku je obvyklé, že pořádací znak:",
        answers: [
            "tvoří pouze jediný výraz",
            "je vyjádřen pomocí notace",
            "je nutné kombinovat s jiným pořádacím znakem",
            "reprezentuje vždy pouze jeden pojem"
        ],
        correct: 0,
        hint: "Spojení proběhlo PŘED vyhledáváním, takže výsledek je hotový celek.",
        explanation: "Prekoordinovaný znak (např. 327.1) v sobě již zahrnuje složenou informaci, vystupuje jako jeden výraz."
    },
    {
        id: 255,
        category: "ČÍM třídíme II.",
        question: "Slova „výše“ a „níže“ jsou:",
        answers: [
            "homofona",
            "synonyma",
            "pseudosynonyma",
            "antonyma"
        ],
        correct: 3,
        hint: "Mají opačný význam.",
        explanation: "Slova s opačným významem jsou antonyma."
    },
    {
        id: 256,
        category: "ČÍM třídíme I.",
        question: "Klasifikační systém, který rozděluje každou třídu do dvou podtříd, nazýváme:",
        answers: [
            "duální",
            "dichotomický",
            "podvojný",
            "duplicitní"
        ],
        correct: 1,
        hint: "Dělení na dvě části.",
        explanation: "Dichotomie znamená dělení na dvě vzájemně se vylučující části."
    },
    {
        id: 257,
        category: "Univerzální systémy organizace informací",
        question: "Mezi klasifikační znaky desetinného klasifikačního systému patří:",
        answers: [
            "A001, B001, C001",
            "TTb2, TTb3, TTb4",
            "327.1, 327.8, 957.24",
            "12/22, 13/23, 14/24"
        ],
        correct: 2,
        hint: "Používá desetinná čísla.",
        explanation: "Typický formát MDT/DDC je číselný s desetinnou tečkou."
    },
    {
        id: 258,
        category: "ČÍM třídíme I.",
        question: "Základem předmětových hesel je:",
        answers: [
            "Rogetův tezaurus",
            "přirozený jazyk",
            "odborná terminologie",
            "knihovní klasifikace"
        ],
        correct: 1,
        hint: "Slova, kterými běžně mluvíme.",
        explanation: "Předmětová hesla vycházejí z přirozeného jazyka (na rozdíl od notací)."
    },
    {
        id: 259,
        category: "Univerzální systémy organizace informací",
        question: "Základní prvek původní verze systému UNITERM Mortimera Taubeho měl tuto typickou morfologii:",
        answers: [
            "animals\r\n    right",
            "rights",
            "animal rights",
            "rights of animals"
        ],
        correct: 0,
        hint: "Rozklad na elementární jednotky (slova).",
        explanation: "Unitermy byly založeny na rozkladu na jednotlivá slova (unit terms), která se kombinovala až při vyhledávání."
    },
    {
        id: 260,
        category: "ČÍM třídíme II.",
        question: "Prvek tezauru, který se nepoužívá pro indexaci a označuje se také jako nepreferovaná lexikální jednotka, se nazývá:",
        answers: [
            "deskriptor",
            "nedeskriptor",
            "mikrotezaurus",
            "fazetový indikátor"
        ],
        correct: 1,
        hint: "Není to ten hlavní termín.",
        explanation: "Nedeskriptor je zakázaný/nepreferovaný termín, z něhož se odkazuje na deskriptor."
    },
    {
        id: 261,
        category: "JAK třídíme I.",
        question: "Se zkratkami MARC, UNIMARC a MARC21 se setkáme v oblasti:",
        answers: [
            "ontologií",
            "metadatových formátů",
            "bibliometrické analýzy",
            "měření kvality indexace"
        ],
        correct: 1,
        hint: "Formáty pro záznamy v knihovnách.",
        explanation: "MARC (Machine Readable Cataloging) jsou standardy pro metadatové formáty."
    },
    {
        id: 262,
        category: "JAK třídíme I.",
        question: "Základem pro obsahovou analýzu je v ideálním případě:",
        answers: [
            "plný text dokumentu",
            "abstrakt dokumentu",
            "nakladatelská anotace",
            "název dokumentu"
        ],
        correct: 0,
        hint: "Co obsahuje nejvíce informací?",
        explanation: "Nejkvalitnější analýzu lze provést přímo z plného textu."
    },
    {
        id: 263,
        category: "JAK třídíme I.",
        question: "K výsledkům sémantické redukce dokumentu v podobě přirozeného jazyka nepatří:",
        answers: [
            "resumé",
            "abstrakt",
            "extrakt",
            "selekční obraz dokumentu"
        ],
        correct: 3,
        hint: "Co je v umělém jazyce (kódech/heslech)?",
        explanation: "Selekční obraz je výsledkem překladu do selekčního (umělého) jazyka, ostatní jsou v přirozeném."
    },
    {
        id: 264,
        category: "JAK třídíme I.",
        question: "Dokument označený pořádacím znakem „národní podnik“ byl zpracován systémem:",
        answers: [
            "předmětovým",
            "systematickým",
            "fazetovým",
            "typu unitermů"
        ],
        correct: 0,
        hint: "Používá se slovní spojení.",
        explanation: "Použití slovních hesel (jako 'národní podnik') je typické pro předmětové systémy."
    },
    {
        id: 265,
        category: "JAK třídíme I.",
        question: "Konzistence indexace se určuje jako míra shody:",
        answers: [
            "selekčního obrazu dokumentu a výrazů řízeného slovníku",
            "selekčního obrazu dokumentu a skutečného obsahu dokumentu",
            "různých popisů téhož dokumentu",
            "popisu dokumentů s katalogizační politikou instituce"
        ],
        correct: 2,
        hint: "Shoda dvou indexátorů nad stejným textem.",
        explanation: "Konzistence měří, nakolik se shodují různí indexátoři (nebo jeden v čase) při popisu téhož dokumentu."
    },
    {
        id: 266,
        category: "JAK třídíme I.",
        question: "Plnotextové vyhledávání ve srovnání s vyhledáváním pomocí řízeného slovníku je lepší v případě:",
        answers: [
            "dlouhých dokumentů",
            "neologismů",
            "synonymních výrazů",
            "vícejazyčnosti"
        ],
        correct: 1,
        hint: "Nová slova, která ještě nejsou ve slovníku.",
        explanation: "Fulltext najde i nová slova (neologismy), která řízený slovník ještě nemusí obsahovat."
    },
    // Nové otázky - Dávka 2 (Test F)
    {
        id: 267,
        category: "ÚVOD | PROČ třídíme",
        question: "V angličtině se pro oblast „organizace informací“ obvykle používá termín:",
        answers: [
            "knowledge management",
            "data mining",
            "knowledge organization",
            "information retrieval"
        ],
        correct: 2,
        hint: "Organizace znalostí.",
        explanation: "Anglický ekvivalent je Knowledge Organization (KO)."
    },
    {
        id: 268,
        category: "ÚVOD | PROČ třídíme",
        question: "Popperova teorie tří světů se od konceptu sémantického trojúhelníku liší tím, že:",
        answers: [
            "zohledňuje triádu data–informace–znalost",
            "objekt chápe v nominalistickém smyslu",
            "zahrnuje hledisko subjektu",
            "odlišuje pojmy význam a smysl"
        ],
        correct: 2,
        hint: "Sémantický trojúhelník potřebuje 'mysl' (subjekt), Popperův Svět 3 je objektivní.",
        explanation: "Zásadním rozdílem je role subjektu – sémantický trojúhelník popisuje vznik významu v mysli subjektu, Popperův Svět 3 existuje nezávisle."
    },
    {
        id: 269,
        category: "JAK s tříděnými informacemi NAKLÁDÁME",
        question: "Zkratka GLAM v souvislosti se sbírkovými institucemi reprezentuje:",
        answers: [
            "4 způsoby uspořádání sbírek",
            "4 typy hlavních institucí",
            "4 základní geografické oblasti",
            "4 odborníky, kteří nejvíce přispěli k teoretickému vyjasnění pojmu „sbírka“"
        ],
        correct: 1,
        hint: "Galleries, Libraries, Archives, Museums.",
        explanation: "Jde o akronym pro 4 typy paměťových institucí."
    },
    {
        id: 270,
        category: "ÚVOD | PROČ třídíme",
        question: "Informační zdroj je:",
        answers: [
            "synonymum pro informační objekt",
            "informační objekt dokumentové povahy",
            "informační objekt, který zahrnuje informace relevantní pro určitý účel",
            "dokument s vysokým impact faktorem"
        ],
        correct: 2,
        hint: "Zdroj se stává zdrojem až užitím (účelem).",
        explanation: "Informační zdroj je definován relevancí (užitečností) pro daný informační problém/účel."
    },
    {
        id: 271,
        category: "ČÍM třídíme II.",
        question: "Doplňte, který český termín chybí ve čtyřvrstvém konceptu díla podle LRM (Library Reference Model): DÍLO | ... | PROVEDENÍ | JEDNOTKA:",
        answers: [
            "vyjádření",
            "koncepce",
            "překlad",
            "realizace"
        ],
        correct: 0,
        hint: "Expression.",
        explanation: "Pořadí je: Dílo (Work) - Vyjádření (Expression) - Provedení (Manifestation) - Jednotka (Item)."
    },
    {
        id: 272,
        category: "ČÍM třídíme I.",
        question: "Vyberte nejpřesnější obecnou charakteristiku umělého jazyka:",
        answers: [
            "dovoluje vyjádřit pouze některé skutečnosti",
            "slovník i gramatika jsou stanoveny předem",
            "je používán úzkou odbornou komunitou",
            "lexikum je vytvořeno pomocí kódů"
        ],
        correct: 1,
        hint: "Pravidla jsou fixní a daná a priori.",
        explanation: "Umělý jazyk má na rozdíl od přirozeného přesně definovanou (uzavřenou) slovní zásobu a pravidla předem."
    },
    {
        id: 273,
        category: "ČÍM třídíme I.",
        question: "Výhodou prekoordinovaného systému je:",
        answers: [
            "omezení počtu pořádacích znaků",
            "snadná správa řízeného slovníku",
            "zachování vztahu mezi dílčími pojmovými jednotkami",
            "využití principu fazet"
        ],
        correct: 2,
        hint: "Vztah je fixován v hotovém znaku.",
        explanation: "Díky pevnému spojení (koordinaci) předem je vztah mezi částmi pojmu jednoznačně zachován a nemůže být špatně interpretován uživatelem."
    },
    {
        id: 274,
        category: "ČÍM třídíme I.",
        question: "Pořádací znak klasifikačního systému se nazývá:",
        answers: [
            "třídník",
            "notace",
            "klasifikátor",
            "klasifikační znak"
        ],
        correct: 1,
        hint: "Kód složený ze znaků.",
        explanation: "U klasifikačních systémů se znak nazývá notace."
    },
    {
        id: 275,
        category: "ČÍM třídíme II.",
        question: "Označte prvek tezauru, který se obvykle používá pro indexaci:",
        answers: [
            "mikrotezaurus",
            "fazeta",
            "deskriptor",
            "nedeskriptor"
        ],
        correct: 2,
        hint: "Ten preferovaný termín.",
        explanation: "K indexaci se používají pouze deskriptory (preferované termíny)."
    },
    {
        id: 276,
        category: "ČÍM třídíme II.",
        question: "Tezaury jsou obvykle koncipovány jako systémy:",
        answers: [
            "fazetové",
            "univerzální",
            "enumerativní",
            "oborové"
        ],
        correct: 3,
        hint: "Zaměřené na konkrétní oblast.",
        explanation: "Tezaury jsou nejčastěji oborové (speciální) selekční jazyky."
    },
    {
        id: 277,
        category: "ČÍM třídíme II.",
        question: "Vztah mezi pojmy „dveře“ a „klika“ označíme jako vztah:",
        answers: [
            "partitivní",
            "ekvivalentní",
            "antonymní",
            "generický"
        ],
        correct: 0,
        hint: "Klika je součástí dveří.",
        explanation: "Jde o vztah celek-část (partitivní)."
    },
    {
        id: 278,
        category: "ČÍM třídíme I.",
        question: "Klasifikační znak na třetí úrovni má notaci „A30“, jemu podřazený znak „A30.1“, znak na páté úrovni „A30.1b“. O takové notaci můžeme říci, že je:",
        answers: [
            "rozvinutá",
            "expanzivní",
            "hierarchická",
            "kategorická"
        ],
        correct: 2,
        hint: "Odráží strukturu stromu.",
        explanation: "Notace vyjadřující úroveň zanoření je hierarchická (expressive notation)."
    },
    {
        id: 279,
        category: "Univerzální systémy organizace informací",
        question: "Mortimer Taube vytvořil systém UNITERM; nazýval se tak proto, že:",
        answers: [
            "zařazené lexikální jednotky byly unifikované",
            "měl ambici sjednotit věcný popis v angloamerickém prostředí",
            "šlo o první systém realizovaný na počítači",
            "lexikální jednotky byly tvořeny jediným výrazem"
        ],
        correct: 3,
        hint: "Unit term.",
        explanation: "Název vychází z 'Unit terms' - elementárních jednoslovných jednotek."
    },
    {
        id: 280,
        category: "JAK třídíme I.",
        question: "Termínem „klíčové slovo“ pravděpodobně neoznačíme:",
        answers: [
            "pořádací znak systematického selekčního jazyka",
            "výraz z názvu dokumentu",
            "termín z plného textu dokumentu",
            "sousloví, které vyjadřuje obsah dokumentu"
        ],
        correct: 0,
        hint: "Systematický jazyk používá kódy.",
        explanation: "Systematický jazyk používá notace (kódy), nikoliv slova."
    },
    {
        id: 281,
        category: "ČÍM třídíme I.",
        question: "Je-li dokument označen pořádacím znakem „636.12“, znamená to, že pro jeho zpracování byl použit selekční jazyk:",
        answers: [
            "předmětový",
            "systematický",
            "fazetový",
            "univerzální"
        ],
        correct: 1,
        hint: "Číselný kód.",
        explanation: "Číselná notace je typická pro systematické jazyky (klasifikace)."
    },
    {
        id: 282,
        category: "JAK třídíme I.",
        question: "Pro obsahovou analýzu v informačněvědním slova smyslu používáme anglický termín:",
        answers: [
            "content analysis",
            "table of content",
            "subject analysis",
            "text analysis"
        ],
        correct: 2,
        hint: "Analýza předmětu/tématu.",
        explanation: "V angloamerické literatuře se používá termín 'Subject analysis' (věcná analýza). Content analysis bývá spíše kvantitativní metoda v sociologii."
    },
    {
        id: 283,
        category: "JAK třídíme I.",
        question: "Selekční obraz dokumentu se od redukovaného textu liší tím, že:",
        answers: [
            "je kratší",
            "je vytvořen na základě umělého jazyka",
            "jej sestavil informační profesionál",
            "lépe vyjadřuje obsah dokumentu"
        ],
        correct: 1,
        hint: "Kódy nebo deskriptory.",
        explanation: "Selekční obraz je vyjádřen v selekčním (umělém) jazyce."
    },
    {
        id: 284,
        category: "JAK třídíme I.",
        question: "Konzistentní indexace znamená, že:",
        answers: [
            "většina dokumentů v databázi je indexována kvalitně",
            "lexikální jednotky jsou používány v souladu se svým významem",
            "dokumenty jsou označeny alespoň dvěma pořádacími znaky",
            "všechny dokumenty se shodným obsahem mají shodný selekční obraz"
        ],
        correct: 3,
        hint: "Stejný vstup = stejný výstup.",
        explanation: "Konzistence znamená, že stejný obsah je vždy popsán stejně (v čase i různými lidmi)."
    },
    {
        id: 285,
        category: "JAK třídíme I.",
        question: "Pro vyhledávání dokumentů pomocí specifických výrazů a neologismů je nejvhodnější:",
        answers: [
            "rejstřík KWIC",
            "systém fazetového typu",
            "plnotextové vyhledávání",
            "řízený slovník"
        ],
        correct: 2,
        hint: "Hledání přesných slov v textu.",
        explanation: "Fulltext umožňuje najít jakékoliv slovo vyskytující se v dokumentu."
    },
    {
        id: 286,
        category: "JAK třídíme I.",
        question: "Přesnost vyhledávání (precision) se vypočte jako podíl:",
        answers: [
            "nalezených relevantních dokumentů a všech nalezených dokumentů",
            "nalezených relevantních dokumentů a všech dokumentů v databázi",
            "nalezených a nenalezených nerelevantních dokumentů",
            "všech nalezených dokumentů a všech relevantních dokumentů v databázi"
        ],
        correct: 0,
        hint: "Kolik z toho, co jsem našel, je dobré?",
        explanation: "Precision = Relevantní nalezené / Všechny nalezené."
    }
];

