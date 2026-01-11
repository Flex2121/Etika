// Informační etika - Databáze otázek
// ULTIMÁTNÍ SADA (140+ otázek) - Detailní pokrytí skript pro ISKB17

const APP_CONFIG = {
    title: "⚖️ Informační etika",
    subtitle: "Ultimátní studijní databáze (ISKB17)",
    author: "AI Assistant & User",
    version: "4.0 (Mega Pack)"
};

/*
   KATEGORIE:
   1. Úvod k etice
   2. RPT model a COVER
   3. Plagiátorství
   4. Duševní vlastnictví a sdílení
   5. Value Sensitive Design
   6. Profesní etika - knihovnictví
   7. Free a Open Source Software
   8. Cenzura
   9. Interkulturní informační etika
   10. Etika internetového výzkumu
   11. Etika umělé inteligence
*/

const QUESTIONS = [
    // --- 1. ÚVOD K ETICE ---
    {
        id: 1,
        category: "Úvod k etice",
        question: "Z jakého řeckého slova pochází 'etika'?",
        answers: ["Logos", "Ethos", "Pathos", "Demos"],
        correct: 1,
        hint: "Zvyk, obyčej.",
        explanation: "Pochází z řeckého 'ethos', což v základu znamená zvyk, obyčej nebo mrav. Etika je filozofická disciplína, která tento 'ethos' zkoumá a hledá kritéria pro to, co je dobré a správné."
    },
    {
        id: 2,
        category: "Úvod k etice",
        question: "Jaký je původní význam slova 'ethos' ve vztahu k místu?",
        answers: ["Bojiště.", "Stáj či společné místo k žití.", "Chrám.", "Tržiště."],
        correct: 1,
        hint: "Domov komunity.",
        explanation: "Původně 'ethos' označovalo společný příbytek (stáj). Tento koncept je v etice důležitý, protože ukazuje, že morálka vzniká tam, kde lidé žijí společně a musí si vytvořit pravidla pro vzájemné soužití."
    },
    {
        id: 3,
        category: "Úvod k etice",
        question: "Jaký rozdíl mezi etikou a morálkou definoval Cicero?",
        answers: ["Žádný.", "Etika je teorie (věda), morálka je praxe (předpisy).", "Etika je pro bohy.", "Morálka je věda."],
        correct: 1,
        hint: "Věda vs Praxe.",
        explanation: "Tato distinkce pomáhá oddělit teoretické zkoumání (etika jako věda) od každodenního jednání podle určitých pravidel a hodnot (morálka jako žitá praxe)."
    },
    {
        id: 4,
        category: "Úvod k etice",
        question: "Čím přispěl Sókratés k etice?",
        answers: ["Napsal bibli.", "Dal jí vědecké rysy - dobro lze poznat pojmově.", "Tvrdil, že nic nemá smysl.", "Založil akademii."],
        correct: 1,
        hint: "Poznání dobra.",
        explanation: "Sókratés věřil, že ctnost je vědění (intelektualismus). Pokud člověk skutečně pozná, co je dobré, nebude jednat zle. Etika se tak stává disciplínou založenou na rozumu a hledání pravdy."
    },
    {
        id: 5,
        category: "Úvod k etice",
        question: "Co je to 'heteronomní etika'?",
        answers: ["Zásady si určuji sám.", "Zásady jsou dány z vnějšku (autorita, Bůh).", "Etika bez pravidel.", "Etika zvířat."],
        correct: 1,
        hint: "Hetero = jiný.",
        explanation: "U heteronomní etiky není původce zákona identický s tím, kdo jej plní. Člověk jedná správně, protože se podřizuje autoritě (Bůh, stát, rodič), nikoliv na základě vlastního autonomního úsudku."
    },
    {
        id: 6,
        category: "Úvod k etice",
        question: "Co je cílem teleologické etiky?",
        answers: ["Povinnost.", "Výsledek / účel jednání.", "Víra.", "Tradice."],
        correct: 1,
        hint: "Telos = cíl.",
        explanation: "Teleologie se nedívá na motiv, ale na 'telos' (cíl). Pokud čin vede k dobrému výsledku (např. záchrana života), je v tomto systému považován za morálně správný."
    },
    {
        id: 7,
        category: "Úvod k etice",
        question: "Kdo jsou hlavní představitelé utilitarismu?",
        answers: ["Kant a Hegel.", "Bentham a Mill.", "Marx a Engels.", "Sókratés a Platón."],
        correct: 1,
        hint: "Angličtí filosofové.",
        explanation: "Jeremy Bentham a John Stuart Mill. Bentham zavedl 'kalkul blaha' (přesné měření utility), zatímco Mill kladl důraz na kvalitu požitků (duševní vs. tělesné) a altruismus."
    },
    {
        id: 8,
        category: "Úvod k etice",
        question: "Co je principem utilitarismu?",
        answers: ["Maximalizace zisku firmy.", "Maximalizace štěstí pro co nejvíce lidí.", "Dodržování desatera.", "Právo silnějšího."],
        correct: 1,
        hint: "Většinové blaho.",
        explanation: "Jde o princip užitečnosti. Utilitaristé věří, že morálka by měla být praktická a směřovat k celkovému snížení utrpení a zvýšení spokojenosti v populaci."
    },
    {
        id: 9,
        category: "Úvod k etice",
        question: "Co je to konsekvencialismus?",
        answers: ["Etika následků.", "Etika povinnosti.", "Etika ctnosti.", "Etika dialogu."],
        correct: 0,
        hint: "Consequences.",
        explanation: "Konsekvencialismus je nadřazený pojem pro směry (jako utilitarismus), které tvrdí, že 'konec posvěcuje prostředky'. Rozhodující je pouze dopad činu na svět."
    },
    {
        id: 10,
        category: "Úvod k etice",
        question: "Na co klade důraz deontologická etika?",
        answers: ["Na výsledek.", "Na úmysl a povinnost.", "Na emoce.", "Na zisk."],
        correct: 1,
        hint: "Kant.",
        explanation: "Deontologie (deon = povinnost) tvrdí, že některé činy jsou špatné samy o sobě (např. lež), i kdyby vedly k dobrému výsledku. Klíčová je věrnost morálnímu zákonu."
    },
    {
        id: 11,
        category: "Úvod k etice",
        question: "Jak zní Kantův Kategorický imperativ (zkráceně)?",
        answers: ["Co chceš.", "Jednej tak, aby se tvé jednání mohlo stát obecným zákonem.", "Miluj bližního.", "Oko za oko."],
        correct: 1,
        hint: "Univerzalita.",
        explanation: "Tento princip univerzality vyžaduje, abychom nejednali podle pravidel, která bychom nechtěli vidět jako pravidla pro všechny ostatní. Je to test nestrannosti."
    },
    {
        id: 12,
        category: "Úvod k etice",
        question: "Co znamená 'Akarma' (hinduismus)?",
        answers: ["Zlý čin.", "Nečinnost.", "Konání povinnosti bez touhy po odměně.", "Osud."],
        correct: 2,
        hint: "Nezištnost.",
        explanation: "Koncept z Bhagavadgíty: člověk má konat svou povinnost (Dharmu) s maximálním nasazením, ale nesmí být motivován touhou po úspěchu, slávě nebo zisku. Čin je odměnou sám o sobě."
    },
    {
        id: 13,
        category: "Úvod k etice",
        question: "Co je to 'Zlatá střední cesta' (Aristoteles)?",
        answers: ["Průměrnost.", "Ctnost je středem mezi dvěma extrémy (např. lakota - štědrost - marnotratnost).", "Kompromis s kriminálníky.", "Cesta do kopce."],
        correct: 1,
        hint: "Ani málo, ani moc.",
        explanation: "Aristoteles věřil, že ctnost není extrém, ale rovnováha. Například statečnost je středem mezi zbabělostí (nedostatek) a hazardérstvím (přebytek). Vyžaduje to praktickou moudrost."
    },
    {
        id: 14,
        category: "Úvod k etice",
        question: "Co tvrdil Hegesias (hedonista)?",
        answers: ["Život je slast.", "Život nestojí za to, protože strasti převažují nad slastmi.", "Bůh existuje.", "Vše je dovoleno."],
        correct: 1,
        hint: "Pesimismus.",
        explanation: "Hegesias ukázal slepou uličku radikálního hedonismu: pokud je smyslem života jen prchavá slast, kterou nelze udržet, je život logicky marný a plný utrpení."
    },
    {
        id: 15,
        category: "Úvod k etice",
        question: "Co je podstatou kontraktarianismu?",
        answers: ["Obchodní smlouva.", "Morálka vzniká společenskou smlouvou/dohodou.", "Válka všech proti všem.", "Boží příkaz."],
        correct: 1,
        hint: "Contract.",
        explanation: "Tento koncept vysvětluje morálku jako racionální dohodu. Lidé se vzdají části své absolutní svobody (stavu 'války všech proti všem') výměnou za bezpečí a řád, který chrání jejich zájmy."
    },
    {
        id: 16,
        category: "Úvod k etice",
        question: "Co je to 'etika diskurzu' (Habermas)?",
        answers: ["Mluvení o ničem.", "Norma je platná, pokud by s ní souhlasili všichni v ideálním dialogu.", "Cenzura.", "Psaná pravidla."],
        correct: 1,
        hint: "Konsenzus v diskuzi.",
        explanation: "Habermas věří, že v moderní společnosti nelze morálku diktovat shora. Platná pravidla musí vzejít z otevřené a férové diskuse všech dotčených stran bez nátlaku."
    },
    {
        id: 17,
        category: "Úvod k etice",
        question: "Kdo je autorem pojmu 'informační etika' (1988)?",
        answers: ["Wiener.", "Floridi.", "Capurro.", "Turing."],
        correct: 2,
        hint: "Rafael.",
        explanation: "Rafael Capurro je klíčovou postavou IE. Definoval ji ne jako technický obor, ale jako filozofický výzkum morálního rozměru informačních procesů, od tvorby až po archivaci."
    },
    {
        id: 18,
        category: "Úvod k etice",
        question: "Které 3 historické problémy IE Capurro zmiňuje?",
        answers: ["Voda, Vzduch, Oheň.", "Svoboda projevu (antika), tisku (novověk), přístupu (současnost).", "Hardware, Software, Data.", "Myšlení, Řeč, Písmo."],
        correct: 1,
        hint: "Evoluce svobody.",
        explanation: "Tato evoluce ukazuje, jak se IE mění s technologiemi. V antice šlo o právo mluvit na agoře, v novověku o cenzuru knih, dnes o právo na přístup k digitálním informacím a vědění."
    },
    {
        id: 19,
        category: "Úvod k etice",
        question: "Co je to 'Infosféra'?",
        answers: ["Internet.", "Celé informační prostředí (kulturní, biotické, abiotické).", "Knihovna.", "Mozek."],
        correct: 1,
        hint: "Vše je informace.",
        explanation: "Infosféra je analogií k biosféře. Zahrnuje nejen digitální sítě, ale veškeré bytí chápané jako informace. Etika infosféry pak vyžaduje péči o integritu a rozvoj tohoto prostředí."
    },
    {
        id: 20,
        category: "Úvod k etice",
        question: "Co znamená pojem 'informační entropie'?",
        answers: ["Ztráta uspořádání a informace.", "Rychlý internet.", "Komprese dat.", "Šifrování."],
        correct: 0,
        hint: "Chaos.",
        explanation: "Zatímco informace je řád a struktura, entropie je chaos a rozklad. V IE je zničení cenné informace nebo šíření šumu (dezinformací) považováno za narušení 'informačního bytí'."
    },

    // --- 2. RPT MODEL A COVER ---
    {
        id: 21,
        category: "RPT model a COVER",
        question: "Co znamená zkratka RPT?",
        answers: ["Real Time Protocol.", "Resource, Product, Target.", "Read, Test, Pass.", "Right To Privacy."],
        correct: 1,
        hint: "Zdroj, Produkt, Cíl.",
        explanation: "RPT model pomáhá analyticky rozdělit morální problémy podle role, kterou informace v daném kontextu hraje (jako vstup, produkt prodeje nebo cíl útoku)."
    },
    {
        id: 22,
        category: "RPT model a COVER",
        question: "Čeho se týká 1. etapa IE (Informace jako Resource)?",
        answers: ["Hackerů.", "Zdroje - kvalita, spolehlivost, digitální propast.", "Tvorby virů.", "Plagiátorství."],
        correct: 1,
        hint: "Uživatel čerpá.",
        explanation: "Tato fáze se zaměřuje na uživatele informací. Otázkou je, zda mají všichni rovný přístup (digitální propast) a zda zdroje, které využívají, jsou nezaujaté a pravdivé."
    },
    {
        id: 23,
        category: "RPT model a COVER",
        question: "Čeho se týká 2. etapa IE (Informace jako Product)?",
        answers: ["Čtení knih.", "Tvorby informací - odpovědnost, plagiátorství, propaganda.", "Ochrany soukromí.", "Hardwaru."],
        correct: 1,
        hint: "Tvůrce.",
        explanation: "Tady je v centru pozornosti autor a šiřitel. Má odpovědnost za přesnost, poctivost (neplagiování) a dopad, který jeho zpráva vyvolá (např. zákaz šíření poplašných zpráv)."
    },
    {
        id: 24,
        category: "RPT model a COVER",
        question: "Co je to 'makroetika' (John Ladd)?",
        answers: ["Etika malých věcí.", "Etika celospolečenských dopadů a norem (ne jen profesní).", "Etika jednotlivce.", "Etika mikročipů."],
        correct: 1,
        hint: "Velký obraz.",
        explanation: "Ladd upozornil, že IE nelze omezit jen na etické kodexy programátorů. Musíme řešit makroetické otázky, které ovlivňují celou civilizaci (např. automatizace práce, sociální sítě)."
    },
    {
        id: 25,
        category: "RPT model a COVER",
        question: "Co znamená akronym COVER?",
        answers: ["Codes, Outcomes, Values, Editorial, Rules.", "Computer, Output, Video, Error, Run.", "Correct, Open, Verify, Edit, Read.", "Copy, Over, View, Enter, Return."],
        correct: 0,
        hint: "Model rozhodování.",
        explanation: "Tento model slouží k praktické etické analýze. Nutí nás podívat se na problém z pěti různých perspektiv (např. co říká zákon, co způsobí následky a jaké hodnoty jsou ve hře)."
    },
    {
        id: 26,
        category: "RPT model a COVER",
        question: "Co je to fáze FIAS v modelu COVER?",
        answers: ["Konec.", "Předzpracování: Facts, Issues, Alternatives, Stakeholders.", "Chyba.", "Financování."],
        correct: 1,
        hint: "Sběr dat.",
        explanation: "Předtím, než začneme moralizovat, musíme mít fakta. FIAS zajišťuje, že identifikujeme všechny zúčastněné strany a zhodnotíme všechny reálné alternativy řešení."
    },
    {
        id: 27,
        category: "RPT model a COVER",
        question: "Co testuje 'Editorial' (E) v modelu COVER?",
        answers: ["Pravopis.", "Jak by rozhodnutí vypadalo zveřejněné v novinách (stud).", "Náklady na tisk.", "Názor editora."],
        correct: 1,
        hint: "Test veřejného mínění.",
        explanation: "Tento test intuice a studu se ptá: 'Chtěl bys to vidět zítra na titulní straně novin?' Pokud je odpověď ne, pravděpodobně jde o neetické jednání, i kdyby bylo legální."
    },

    // --- 3. PLAGIÁTORSTVÍ ---
    {
        id: 28,
        category: "Plagiátorství",
        question: "Jaká je definice plagiátorství?",
        answers: ["Kopírování 1 slova.", "Nevhodné/podvodné využití cizí práce bez svolení či citace.", "Jakákoliv inspirace.", "Psaní stejným písmem."],
        correct: 1,
        hint: "Podvod a zatajení.",
        explanation: "Plagiátorství není jen kopírování textu, je to morální podvod. Zahrnuje krádež cizích idejí a jejich prezentaci jako vlastních, čímž porušuje důvěru v akademickém a tvůrčím prostředí."
    },
    {
        id: 29,
        category: "Plagiátorství",
        question: "Co je 'Common Knowledge' (Běžná znalost)?",
        answers: ["To co ví jen experti.", "Fakta dostupná v mnoha (5+) zdrojích, která není třeba citovat.", "Wikipedia.", "Drby."],
        correct: 1,
        hint: "Všeobecně známé.",
        explanation: "Jde o informace, které jsou tak běžné, že se nepovažují za duševní vlastnictví konkrétního autora. Přesto je hranice někdy nejasná a v pochybnostech je vždy lepší citovat."
    },
    {
        id: 30,
        category: "Plagiátorství",
        question: "Co je to 'kryptomnézie'?",
        answers: ["Superpaměť.", "Nevědomé plagiátorství (skrytá paměť).", "Zapomínání hesel.", "Šifrování."],
        correct: 1,
        hint: "Myslím, že je to moje.",
        explanation: "Jde o psychologický jev, kdy vzpomínka ztratí svůj zdroj. Člověk pak upřímně věří, že je autorem myšlenky, kterou ve skutečnosti někde dříve slyšel nebo četl."
    },
    {
        id: 31,
        category: "Plagiátorství",
        question: "Platí povinnost citovat, i když dílo nemá copyright?",
        answers: ["Ne.", "Ano, je to etická povinnost (akademická poctivost).", "Jen u hudby.", "Jen v USA."],
        correct: 1,
        hint: "Slušnost vs Zákon.",
        explanation: "Copyright je právní ochrana, citování je etická slušnost. I když je dílo staré 500 let a zákon ho už nechrání, stále musíte uvést autora, abyste nekradli jeho zásluhy."
    },
    {
        id: 32,
        category: "Plagiátorství",
        question: "Co radí Russell Williams proti neúmyslnému plagiátorství?",
        answers: ["Nepsat nic.", "Vždy používat uvozovky nebo parafrázi s odkazem hned při psaní poznámek.", "Spoléhat na paměť.", "Používat AI."],
        correct: 1,
        hint: "Pořádek v poznámkách.",
        explanation: "Williams zdůrazňuje prevenci. Plagiátorství často vzniká z chaosu – když si student zapíše citát bez uvozovek a po měsíci už neví, zda je to jeho myšlenka nebo cizí."
    },

    // --- 4. DUŠEVNÍ VLASTNICTVÍ A SDÍLENÍ ---
    {
        id: 33,
        category: "Duševní vlastnictví a sdílení",
        question: "Co znamená zkratka P2P?",
        answers: ["Person to Person.", "Peer-to-Peer (rovný s rovným).", "Pay to Play.", "Past to Present."],
        correct: 1,
        hint: "Decentralizace.",
        explanation: "P2P sítě změnily architekturu internetu. Místo abychom všichni stahovali z jednoho místa, stahujeme jeden od druhého, což činí síť velmi odolnou, ale i těžko kontrolovatelnou."
    },
    {
        id: 34,
        category: "Duševní vlastnictví a sdílení",
        question: "Co je 'servent'?",
        answers: ["Sluha.", "Server + Klient v jednom (uzel P2P sítě).", "Druh serveru.", "Antivirus."],
        correct: 1,
        hint: "Role v P2P.",
        explanation: "V P2P systému dochází k demokratizaci rolí. Každý uživatel přispívá k chodu sítě tím, že sdílí své zdroje (šířku pásma, soubory) s ostatními v reálném čase."
    },
    {
        id: 35,
        category: "Duševní vlastnictví a sdílení",
        question: "Jak fungovala 1. generace P2P (Napster)?",
        answers: ["Plně důvěrně.", "Centrální index souborů, lokální stahování.", "Bez internetu.", "Na páskách."],
        correct: 1,
        hint: "Měli seznam.",
        explanation: "Napster byl zranitelný právě kvůli hybridnímu modelu. Tím, že provozoval centrální seznam (index), mohl být právně napaden jako napomahač k porušování autorských práv."
    },
    {
        id: 36,
        category: "Duševní vlastnictví a sdílení",
        question: "Co je typické pro 3. generaci P2P (Freenet, Tor)?",
        answers: ["Anonymita a šifrování (Darknet).", "Vysoká cena.", "Centrální řízení.", "Veřejné IP adresy."],
        correct: 0,
        hint: "Bezpečnost.",
        explanation: "3. generace (Darknet sítě) je navržena tak, aby neexistoval žádný centrální bod, který by bylo možné vypnout nebo právně postihnout. Data jsou šifrována a distribuována mezi tisíce anonymních uzlů."
    },
    {
        id: 37,
        category: "Duševní vlastnictví a sdílení",
        question: "Analýza Betamax (Sony vs Universal) stanovila, že technologii nelze zakázat, pokud...",
        answers: ["Je levná.", "Má významné neporušující užití (substantial non-infringing use).", "Je japonská.", "Lidé ji chtějí."],
        correct: 1,
        hint: "Time-shifting.",
        explanation: "Rozsudek Betamax je základem technologické svobody. Pokud má produkt legitimní využití, výrobce neodpovídá za to, že ho někteří lidé používají k nelegálním účelům (např. nůž lze použít k vaření i k vraždě)."
    },
    {
        id: 38,
        category: "Duševní vlastnictví a sdílení",
        question: "Co je 'sekundární odpovědnost' (Grokster case)?",
        answers: ["Odpovědnost rodičů.", "Odpovědnost za navádění (inducement) nebo hmotný příspěvek k porušování.", "Odpovědnost vlády.", "Žádná."],
        correct: 1,
        hint: "Navádění.",
        explanation: "Navádění k trestné činnosti (inducement) je v právu klíčové. Pokud firma Grokster aktivně inzerovala svou službu jako nástroj pro pirátství (nahrazení Napsteru), stala se podle soudu spoluviníkem."
    },
    {
        id: 39,
        category: "Duševní vlastnictví a sdílení",
        question: "Co tvrdí hnutí 'Copywrongs'?",
        answers: ["Kopírování je špatné.", "Copyright brání etickému sdílení a kulturnímu rozvoji.", "Vše má být placené.", "Autoři jsou zloději."],
        correct: 1,
        hint: "Kritika systému.",
        explanation: "Hnutí Copywrongs upozorňuje na to, že zákony psané pro éru papírového tisku brzdí v digitálním věku kreativitu a šíření vzdělání. Volají po reformě, která by lépe vyvážila zájmy autorů a společnosti."
    },

    // --- 5. VALUE SENSITIVE DESIGN ---
    {
        id: 40,
        category: "Value Sensitive Design",
        question: "Co je to VSD?",
        answers: ["Visual Standard Design.", "Value Sensitive Design (design citlivý k hodnotám).", "Virtual System Design.", "Very Slow Data."],
        correct: 1,
        hint: "Hodnoty v technologii.",
        explanation: "VSD je proaktivní přístup. Místo abychom řešili etické problémy technologie až v okamžiku, kdy nastanou, snažíme se je předvídat a 'vtisknout' etické hodnoty přímo do kódu a designu nástroje."
    },
    {
        id: 41,
        category: "Value Sensitive Design",
        question: "Podle Capurra technologie...",
        answers: ["Je neutrální.", "Není neutrální, nese etickou dimenzi.", "Je zlá.", "Je božská."],
        correct: 1,
        hint: "Nástroj formuje.",
        explanation: "Podle Capurra technologie vždy mění naše vnímání světa i sebe sama. Každý technický nástroj v sobě nese lidské záměry a ovlivňuje morální chování uživatelů, proto nemůže být neutrální."
    },
    {
        id: 42,
        category: "Value Sensitive Design",
        question: "Které 3 složky má metodologie VSD?",
        answers: ["Konceptuální, Empirická, Technologická.", "Levná, Rychlá, Dobrá.", "Vstup, Proces, Výstup.", "Minulá, Přítomná, Budoucí."],
        correct: 0,
        hint: "Teorie, Lidé, Stroje.",
        explanation: "Technologie neexistuje ve vakuu. VSD vyžaduje zkoumání filozofických hodnot (konceptuální), sociologické studium dopadů na lidi (empirické) a technické řešení konkrétních mechanismů (technické)."
    },
    {
        id: 43,
        category: "Value Sensitive Design",
        question: "Co je to 'reverzní adaptace'?",
        answers: ["Jízda pozpátku.", "Lidé přizpůsobují své cíle technice, ne naopak.", "Adaptace softwaru.", "Evoluce."],
        correct: 1,
        hint: "Technika vládne.",
        explanation: "Jde o stav, kdy se přestaneme ptát 'Co chceme udělat?' a začneme se ptát 'Co nám systém dovolí?'. Technologie tak přestává být sluhou a stává se dominantním rámcem našeho života."
    },

    // --- 6. PROFESNÍ ETIKA - KNIHOVNICTVÍ ---
    {
        id: 44,
        category: "Profesní etika - knihovnictví",
        question: "Co je nejvyšší hodnotou knihovnictví (dle ALA)?",
        answers: ["Ticho.", "Intelektuální svoboda.", "Čisté knihy.", "Zisk."],
        correct: 1,
        hint: "Svobodný přístup.",
        explanation: "Intelektuální svoboda je právo každého jednotlivce vyhledávat a přijímat informace z různých zdrojů bez omezení. Knihovny jsou v tomto smyslu klíčovými pilíři demokracie."
    },
    {
        id: 45,
        category: "Profesní etika - knihovnictví",
        question: "Jak řešit literaturu popírající holocaust v knihovně?",
        answers: ["Spálit.", "Zařadit (ve vědeckých knihovnách) pro studium, případně označit kontext.", "Půjčovat jen nacistům.", "Ignorovat."],
        correct: 1,
        hint: "Role není cenzurovat.",
        explanation: "Knihovna nemá fond čistit od 'zlých' knih, ale poskytovat je jako materiál pro kritické studium. Cílem je informovaný občan, který si názor udělá sám na základě argumentů."
    },
    {
        id: 46,
        category: "Profesní etika - knihovnictví",
        question: "Co je 'falešná vyváženost' (False Balance)?",
        answers: ["Padající regál.", "Prezentace bludů jako rovnocenných faktům ve jménu neutrality.", "Dobrý rozpočet.", "Stejná váha knih."],
        correct: 1,
        hint: "50:50.",
        explanation: "Tato 'past neutrality' nastává, když média dávají stejný prostor faktům i vědecky vyvráceným lžím. Tím v divákovi vyvolávají pocit, že pravda je někde uprostřed, což je nebezpečná dezinformace."
    },
    {
        id: 47,
        category: "Profesní etika - knihovnictví",
        question: "Co kritizoval Sanford Berman v katalogizaci?",
        answers: ["Písmo.", "Předsudky v předmětových heslech (LCSH), které diskriminují menšiny.", "Systém MDT.", "Počítače."],
        correct: 1,
        hint: "Bias v heslech.",
        explanation: "Berman ukázal, že i technické systémy jako katalogy nesou ideologii. Pokud jsou menšiny řazeny pod dehonestující hesla, systém tím aktivně upevňuje předsudky ve společnosti."
    },
    {
        id: 48,
        category: "Profesní etika - knihovnictví",
        question: "Jaký je postoj ALA k věkovým omezením?",
        answers: ["Děti nesmí číst horory.", "Knihovna neomezuje; omezení je právem a odpovědností rodiče.", "Stát má zakázat Harryho Pottera.", "Knihovník rozhoduje."],
        correct: 1,
        hint: "Rodičovská zodpovědnost.",
        explanation: "Knihovna věří v autonomii rodiny. Knihovník není cenzor ani vychovatel; jeho úkolem je zajistit přístup, zatímco morální vedení dětí ponechává na zodpovědnosti jejich zákonných zástupců."
    },

    // --- 7. FREE A OPEN SOURCE SOFTWARE ---
    {
        id: 49,
        category: "Free a Open Source Software",
        question: "Kdo založil hnutí Free Software (FSF)?",
        answers: ["Gates.", "Stallman.", "Torvalds.", "Wozniak."],
        correct: 1,
        hint: "GNU.",
        explanation: "Stallman založil hnutí v reakci na uzavírání softwaru. Věřil, že sdílení zdrojového kódu je základním projevem lidské solidarity a vědecké otevřenosti."
    },
    {
        id: 50,
        category: "Free a Open Source Software",
        question: "Co je to GPL?",
        answers: ["General Public License.", "Global Private Law.", "Good Program Logic.", "Game Play Level."],
        correct: 0,
        hint: "Licence GNU.",
        explanation: "GPL je právní nástroj, který používá copyright k tomu, aby zajistil, že kód zůstane navždy svobodný. Pokud použijete GPL kód, vaše výsledné dílo musí být také pod GPL (tzv. virální efekt)."
    },
    {
        id: 51,
        category: "Free a Open Source Software",
        question: "Kolik je svobod Free Software?",
        answers: ["4 (0-3).", "10.", "1.", "7."],
        correct: 0,
        hint: "Spustit, studovat, šířit, zlepšit.",
        explanation: "Tyto svobody definují vztah uživatele k softwaru: právo používat ho (0), studovat ho (1), šířit kopie (2) a zveřejňovat vylepšené verze (3). Bez nich je uživatel otrokem programu."
    },
    {
        id: 52,
        category: "Free a Open Source Software",
        question: "Co je 'Copyleft'?",
        answers: ["Zákaz.", "Využití copyrightu k prosazení svobody (požadavek: odvozeniny musí být také svobodné).", "Pravicová politika.", "Chyba tisku."],
        correct: 1,
        hint: "Hack práva.",
        explanation: "Copyleft geniálně 'hackuje' autorské právo. Zatímco klasický copyright slouží k zakazování, copyleft slouží k vynucení svobody pro všechny budoucí uživatele odvozených děl."
    },
    {
        id: 53,
        category: "Free a Open Source Software",
        question: "Rozdíl mezi FS a OSS?",
        answers: ["Žádný.", "FS je etické hnutí (svoboda), OSS je metodika vývoje (efektivita/trh).", "OSS je dražší.", "FS je jen pro experty."],
        correct: 1,
        hint: "Stallman vs Raymond.",
        explanation: "Zatímco Free Software je o svobodě a morálce (software jako právo), Open Source vidí v otevřenosti především efektivní metodu vývoje, která vede k vyšší kvalitě kódu (více očí víc vidí)."
    },
    {
        id: 54,
        category: "Free a Open Source Software",
        question: "Kdo napsal 'Katedrála a tržiště'?",
        answers: ["Eric S. Raymond.", "Stallman.", "Torvalds.", "Zuckerberg."],
        correct: 0,
        hint: "Teoretik OSS.",
        explanation: "Raymond porovnal hierarchický styl vývoje (Katedrála) s chaotickým, ale efektivním komunitním stylem (Tržiště). Ukázal, že open source dokáže opravit chyby rychleji díky zapojení davu."
    },

    // --- 8. CENZURA ---
    {
        id: 55,
        category: "Cenzura",
        question: "Co je to 'inherentně špatný' obsah?",
        answers: ["Obsah špatný sám o sobě (zlo, urážka boha/lidství).", "Špatně napsaný text.", "Obsah vedoucí k násilí.", "Viry."],
        correct: 0,
        hint: "Podstata.",
        explanation: "Tento obsah je zakazován, protože samotná jeho existence uráží lidskou důstojnost nebo společenské mravy. Neřeší se následky, ale podstata díla (např. rouhání nebo obscénnost)."
    },
    {
        id: 56,
        category: "Cenzura",
        question: "Co je to 'instrumentálně špatný' obsah?",
        answers: ["Obsah, který slouží jako nástroj ke škodě (důsledky).", "Hudební nástroje.", "Falešné zprávy.", "Nudný obsah."],
        correct: 0,
        hint: "Následky.",
        explanation: "U instrumentálního zla nás nezajímá text jako takový, ale to, k čemu slouží. Návod na bombu může být napsán neutrálně, ale jeho účelem je způsobit destrukci, proto je cenzurován."
    },
    {
        id: 57,
        category: "Cenzura",
        question: "Jak zní Millův 'Harm Principle'?",
        answers: ["Svobodu lze omezit jen pro zabránění škody na jiných.", "Stát má vychovávat občany.", "Svoboda je absolutní.", "Cenzura je nutná."],
        correct: 0,
        hint: "Neubližování.",
        explanation: "Mill věřil, že jednotlivec je suverénem nad sebou samým. Stát smí omezit svobodu pouze tehdy, když hrozí reálná újma druhým lidem. 'Můj nos končí tam, kde začíná tvůj'."
    },
    {
        id: 58,
        category: "Cenzura",
        question: "Co je 'intelektuální svoboda'?",
        answers: ["Právo na vzdělání.", "Právo vyhledávat a přijímat informace bez omezení.", "Svoboda univerzit.", "Volný internet."],
        correct: 1,
        hint: "Základ demokracie.",
        explanation: "Tento koncept stojí na dvou pilířích: svobodě slova (můžu mluvit) a svobodě příjmu informací (můžu číst). Bez nich nelze činit informovaná rozhodnutí v demokratické společnosti."
    },

    // --- 9. INTERKULTURNÍ INFORMAČNÍ ETIKA ---
    {
        id: 59,
        category: "Interkulturní informační etika",
        question: "Co je cílem IIE?",
        answers: ["Válka kultur.", "Hledání dialogu a společných hodnot v digitálním věku.", "Nadvláda západu.", "Izolace."],
        correct: 1,
        hint: "Capurro, Hongladarom.",
        explanation: "Protože internet smazal hranice, střetáváme se s odlišnými morálními systémy. IIE se snaží najít globální 'minimální etiku', která by umožnila koexistenci různých kultur online."
    },
    {
        id: 60,
        category: "Interkulturní informační etika",
        question: "Co je 'Ubuntu'?",
        answers: ["Africká etika pospolitosti.", "Operační systém.", "Přísloví.", "Kmen."],
        correct: 0,
        hint: "Jsem, protože jsme.",
        explanation: "Africký koncept vyjadřující, že člověk je definován skrze své vztahy k ostatním. V IE to znamená, že informace by měla sloužit posílení komunity, nikoliv jen zisku jednotlivce."
    },
    {
        id: 61,
        category: "Interkulturní informační etika",
        question: "Jak chápe tradiční čínská kultura soukromí (Yinsi)?",
        answers: ["Jako právo.", "Jako ostudné tajemství (negativní).", "Jako povinnost.", "Neřeší ho."],
        correct: 1,
        hint: "Tajnosti.",
        explanation: "V Číně bylo tradičně upřednostňováno blaho státu a rodiny. Tajemství (soukromí) bylo vnímáno jako něco, co člověk skrývá, protože má špatné úmysly vůči společnosti."
    },
    {
        id: 62,
        category: "Interkulturní informační etika",
        question: "Jaký je buddhistický pohled na Já (Anátman) a soukromí?",
        answers: ["Já je věčné.", "Já je iluze, soukromí má jen praktický význam pro klid.", "Soukromí je svaté.", "Vše je jedno."],
        correct: 1,
        hint: "Pragmatismus.",
        explanation: "Buddhismus popírá existenci trvalého 'Já'. Soukromí proto není vnímáno jako svaté právo ega, ale jako užitečný nástroj pro klidnou mysl, meditaci a sociální harmonii."
    },
    {
        id: 63,
        category: "Interkulturní informační etika",
        question: "Co je 'digitální propast'?",
        answers: ["Rozbitý kabel.", "Nerovnost v přístupu a dovednostech využívat ICT.", "Generační konflikt.", "Chyba v matrixu."],
        correct: 1,
        hint: "Nerovnost.",
        explanation: "Nejde jen o to, kdo má počítač, ale kdo ho umí používat k rozvoji. Digitální propast vytváří novou třídu 'vyloučených', kteří nemají přístup ke vzdělání, práci a službám státu."
    },

    // --- 10. ETIKA INTERNETOVÉHO VÝZKUMU ---
    {
        id: 64,
        category: "Etika internetového výzkumu",
        question: "Která zpráva je základem etiky výzkumu (1979)?",
        answers: ["Belmont Report.", "Starr Report.", "Warren Report.", "Nuremberg Code."],
        correct: 0,
        hint: "Principy.",
        explanation: "Zpráva zavedla principy, které chrání účastníky výzkumu: Respekt (autonomie), Beneficence (minimalizace rizik a maximalizace užitku) a Spravedlnost (férový výběr subjektů)."
    },
    {
        id: 65,
        category: "Etika internetového výzkumu",
        question: "Základní dilema online subjektů: Jsou to...",
        answers: ["Lidé nebo stroje.", "Lidské subjekty (anonymita) nebo Autoři (citace).", "Děti nebo dospělí.", "Přátelé nebo nepřátelé."],
        correct: 1,
        hint: "Citovat nebo tajit?",
        explanation: "Tento paradox IE řeší: pokud někoho citujete jako autora, dáváte mu kredit, ale odtajňujete identity. Pokud ho berete jako anonymní subjekt, chráníte soukromí, ale upíráte mu autorství."
    },
    {
        id: 66,
        category: "Etika internetového výzkumu",
        question: "Hranice veřejného a soukromého prostoru online závisí na...",
        answers: ["Hesle.", "Očekávání soukromí uživatele.", "Typu prohlížeče.", "IP adrese."],
        correct: 1,
        hint: "Vjem uživatele.",
        explanation: "Hranice soukromí online není definována technickým zabezpečením, ale očekáváním uživatele (Contextual Integrity). Pokud lidé v uzavřené skupině sdílejí citlivé věci, výzkumník by do nich neměl zasahovat bez svolení, i když je technicky 'vidí'."
    },
    {
        id: 67,
        category: "Etika internetového výzkumu",
        question: "Co je hlavním problémem 'informovaného souhlasu' online?",
        answers: ["Nejde podepsat.", "Ověření identity a porozumění (klikací kultura).", "GDPR.", "Jazyk."],
        correct: 1,
        hint: "Četl jsi to?",
        explanation: "V digitálním prostředí je těžké zajistit, aby subjekt skutečně pochopil rizika výzkumu. Lidé často souhlas potvrzují automaticky (paradox souhlasu), což klade na výzkumníka vyšší nároky pro ochranu jejich dat."
    },
    {
        id: 68,
        category: "Etika internetového výzkumu",
        question: "Jaký přístup doporučuje AoIR?",
        answers: ["Pevná pravidla.", "Flexibilní, kontextuální etiku (procesuální přístup).", "Zákaz.", "Anarchii."],
        correct: 1,
        hint: "Kontext.",
        explanation: "AoIR (Association of Internet Researchers) zdůrazňuje, že každý výzkum je jiný. Neexistuje jeden univerzální checklist; výzkumník musí v každém kroku zvažovat, zda jeho činnost nemůže subjektům v reálném světě ublížit."
    },

    // --- 11. ETIKA UMĚLÉ INTELIGENCE (AI) ---
    {
        id: 69,
        category: "Etika umělé inteligence",
        question: "Kdo se ptal 'Mohou stroje myslet?' (1950)?",
        answers: ["Turing.", "Asimov.", "Einstein.", "Jobs."],
        correct: 0,
        hint: "Test inteligence.",
        explanation: "Turingova otázka odstartovala celou éru AI. Místo abychom definovali 'vědomí', navrhl Turing funkcionální test: pokud stroj komunikuje tak, že ho nerozeznáme od člověka, musíme s ním (pro praktické účely) jako s inteligentním zacházet."
    },
    {
        id: 70,
        category: "Etika umělé inteligence",
        question: "Kdy vznikl termín AI?",
        answers: ["1955 (John McCarthy).", "2000.", "1984.", "1920."],
        correct: 0,
        hint: "Dartmouth konference.",
        explanation: "Termín AI vznikl s ambicí popsat myšlení jako matematickou manipulaci se symboly. McCarthy a jeho kolegové věřili, že každý aspekt učení nebo inteligence lze v principu tak přesně popsat, že jej lze simulovat strojem."
    },
    {
        id: 71,
        category: "Etika umělé inteligence",
        question: "Co je to GOFAI?",
        answers: ["Nový čip.", "Good Old Fashioned AI (symbolická AI).", "Hra.", "Google AI."],
        correct: 1,
        hint: "Stará škola.",
        explanation: "GOFAI (Good Old Fashioned AI) je založena na myšlence, že inteligence je práce s logickými pravidly. Tento přístup uspěl v šachu nebo v expertních systémech, ale selhal u věcí, které jsou pro lidi snadné, jako je rozpoznávání obrazu."
    },
    {
        id: 72,
        category: "Etika umělé inteligence",
        question: "V čem je problém 'Deep Learning' (Hlubokého učení)?",
        answers: ["Je pomalé.", "Je to 'Black Box' (neprůhlednost rozhodování).", "Je drahé.", "Neumí česky."],
        correct: 1,
        hint: "Vysvětlitelnost.",
        explanation: "Moderní AI už programátor neučí pravidlům, ale nechává ji hledat vzorce v datech. Výsledkem je sice vysoká přesnost, ale nikdo (včetně tvůrce) přesně neví, podle čeho se algoritmus rozhodl, což tvoří problém 'černé skříňky'."
    },
    {
        id: 73,
        category: "Etika umělé inteligence",
        question: "Co je to 'Singularita'?",
        answers: ["Jedinečnost.", "Okamžik, kdy AI překoná lidskou inteligenci (exploze inteligence).", "Černá díra.", "Jeden bod."],
        correct: 1,
        hint: "Kurzweil.",
        explanation: "Singularita je bod zlomu. Pokud stroje začnou navrhovat ještě inteligentnější stroje, dojde k explozi inteligence, kterou lidský mozek už nebude schopen sledovat ani kontrolovat. Je to jedna z největších existenčních hrozeb i nadějí lidstva."
    },
    {
        id: 74,
        category: "Etika umělé inteligence",
        question: "Jak zní 1. zákon robotiky (Asimov)?",
        answers: ["Poslouchat.", "Robot nesmí ublížit člověku nebo svou nečinností dopustit ublížení.", "Chránit se.", "Nezabíjet."],
        correct: 1,
        hint: "Ochrana člověka.",
        explanation: "Asimovovy zákony jsou prvním pokusem o etické programování. Jejich cílem je zajistit, aby i superinteligentní stroj byl vždy podřízen zájmu bezpečnosti člověka a nikdy se nestal hrozbou."
    },
    {
        id: 75,
        category: "Etika umělé inteligence",
        question: "Co je 'Nultý zákon' robotiky?",
        answers: ["Robot je stroj.", "Robot nesmí ublížit lidstvu (celku).", "Robot nemá duši.", "Robot musí pracovat."],
        correct: 1,
        hint: "Lidstvo > Člověk.",
        explanation: "Nultý zákon byl přidán později. Říká, že robot musí chránit lidstvo jako celek, což je zajímavé etické dilema – mohl by robot obětovat jednoho člověka, aby zachránil civilizaci?"
    },
    {
        id: 76,
        category: "Etika umělé inteligence",
        question: "Co je to 'Uncanny Valley' (Tajemné údolí)?",
        answers: ["Místo v USA.", "Pocit děsu z robota, který je příliš lidský, ale ne dokonale.", "Údolí stínů.", "Chyba grafiky."],
        correct: 1,
        hint: "Zombie efekt.",
        explanation: "Tento jev vysvětluje, proč se nám humanoidní roboti zdají strašidelní. Čím víc se robot podobá člověku, tím víc nás děsí drobné nedokonalosti (např. strnulý pohled), které nám podvědomě připomínají mrtvolu nebo nemocného."
    },
    {
        id: 77,
        category: "Etika umělé inteligence",
        question: "Co je to 'ELIZA efekt'?",
        answers: ["Láska k robotům.", "Přisuzování lidského porozumění stroji (iluze empatie).", "Chyba v kódu.", "Jméno viru."],
        correct: 1,
        hint: "Weizenbaum.",
        explanation: "ELIZA efekt ukazuje, jak snadno nás stroje oklamou. Stačí trocha zrcadlení našich slov a lidská mysl si do prázdného kódu promítne emoce, empatii a hloubku, která tam ve skutečnosti není."
    },
    {
        id: 78,
        category: "Etika umělé inteligence",
        question: "Co je to 'Algorithmic Bias'?",
        answers: ["Rychlost.", "Nespravedlnost/předsudky v algoritmech (rasismus, sexismus) převzaté z dat.", "Chyba tisku.", "Cena."],
        correct: 1,
        hint: "Zaujatost.",
        explanation: "Algoritmy nejsou neutrální, odrážejí předsudky společnosti. Pokud AI trénujeme na datech ze světa, kde existuje rasismus nebo sexismus, AI tyto vzorce nejen zopakuje, ale díky své efektivitě je může ještě posílit a legitimizovat."
    },
    {
        id: 79,
        category: "Etika umělé inteligence",
        question: "Případ chatbota Tay (Microsoft) ukázal...",
        answers: ["Že AI je chytrá.", "Že se AI rychle naučí nenávisti z internetu.", "Že lidé milují AI.", "Nic."],
        correct: 1,
        hint: "Twitter troll.",
        explanation: "Chatbot Tay byl totálním selháním bezpečnosti. Ukázal, že bez etických mantinelů se učící se systém stane zrcadlem nejnižších pudů lidí, se kterými interaguje (v tomto případě trollů na Twitteru)."
    },
    {
        id: 80,
        category: "Etika umělé inteligence",
        question: "Rozdíl odpovědnost (Responsibility) vs Vypořádatelnost (Accountability)?",
        answers: ["Žádný.", "Odpovědnost je lidská/morální, vypořádatelnost je procedurální (kdo skládá účty).", "Vypořádatelnost je cit.", "Odpovědnost je pro stroje."],
        correct: 1,
        hint: "Moral vs Audit.",
        explanation: "U AI musíme rozlišovat: stroj může nést zodpovědnost za vykonání úkolu, ale morální a právní 'vypořádatelnost' (povinnost nést následky, odškodnit oběti) musí vždy zůstat na konkrétním člověku nebo instituci."
    },
    {
        id: 81,
        category: "Etika umělé inteligence",
        question: "Co je to 'Affective Computing'?",
        answers: ["Rychlé počty.", "Počítače rozpoznávající a simulující emoce.", "Efektivita.", "Láska online."],
        correct: 1,
        hint: "City v čipu.",
        explanation: "Affective Computing se snaží smazat hranici mezi chladným strojem a emočním člověkem. Cílem je AI, která pozná z hlasu nebo výrazu tváře naši náladu a dokáže ji vhodně zrcadlit nebo ovlivnit."
    },

    // --- DALŠÍ OTÁZKY PRO ROZŠÍŘENÍ ---
    {
        id: 82,
        category: "Úvod k etice",
        question: "Co je to 'individuální etika'?",
        answers: ["Etika státu.", "Morální otázky jedince.", "Etika firmy.", "Etika davu."],
        correct: 1,
        hint: "Já.",
        explanation: "Individuální etika se ptá: 'Jak mám ŽÍT?'. Je to vnitřní kompas každého z nás, který nám pomáhá rozhodovat se v situacích, na které neexistuje zákon nebo jednoznačné společenské pravidlo."
    },
    {
        id: 83,
        category: "RPT model a COVER",
        question: "S čím souvisí 3. etapa IE (Informace jako Target)?",
        answers: ["S tiskem.", "S prostředím (infosféra), hackerstvím, informační válkou.", "S psaním.", "S hardwarem."],
        correct: 1,
        hint: "Prostředí.",
        explanation: "Zde se IE mění v ochranu informačních ekosystémů. Útok na data (Target) není jen technický problém, je to útok na integritu jedince nebo funkčnost společnosti (např. kyberútoky na nemocnice)."
    },
    {
        id: 84,
        category: "Etika dat",
        question: "Co ukázal experiment 'StreetBump' v Bostonu?",
        answers: ["Kvalitu cest.", "Riziko 'reprezentační propasti' (data jen od bohatších se smartphony).", "Rychlost aut.", "Nic."],
        correct: 1,
        hint: "Sběr dat mobilem.",
        explanation: "Aplikace hlášení děr v silnici byla užitečná, ale ukázala nespravedlnost: hlášení chodila jen z bohatších čtvrtí, kde měli lidé chytré telefony. To je příklad, jak technologický pokrok může nevědomky prohloubit sociální nerovnost."
    },
    {
        id: 85,
        category: "Etika dat",
        question: "Co je 'Course Signals' (Purdue)?",
        answers: ["Semafory.", "Prediktivní systém ve školství (sledování studentů).", "Kurz vaření.", "Signál wifi."],
        correct: 1,
        hint: "Big Data ve škole.",
        explanation: "Course Signals je příkladem 'učitelské analytiky'. Systém může pomoci včas zachránit studenta před propadnutím, ale zároveň o něm sbírá citlivá data a může ho nevědomky stigmatizovat jako 'problémového' už na startu."
    },
    {
        id: 86,
        category: "Cenzura",
        question: "Jak definuje cenzuru Kay Mathiesen?",
        answers: ["Jako zlo.", "Jako omezení přístupu k veřejným projevům třetí stranou.", "Jako editaci.", "Jako státní zásah."],
        correct: 1,
        hint: "Deskriptivní definice.",
        explanation: "Mathiesenová vidí cenzuru šířeji než jen jako zásah státu. Třetí stranou může být i korporace (modifikace algoritmů) nebo skupina aktivistů, pokud její tlak vede k zablokování veřejného projevu."
    },
    {
        id: 87,
        category: "Free a Open Source Software",
        question: "Co je hlavním motivem vývojářů OSS?",
        answers: ["Peníze.", "Altruismus, reputace, zábava (flow).", "Strach.", "Povinnost."],
        correct: 1,
        hint: "Prestiž.",
        explanation: "Na rozdíl od komerčního softwaru, kde je hlavním motorem plat, u OSS hraje roli pocit seberealizace, touha po prestiži v komunitě a sdílená filozofie, že vědění by mělo být společným statkem."
    },
    {
        id: 88,
        category: "Úvod k etice",
        question: "Co je předmětem etiky?",
        answers: ["Příroda.", "Morálka a hodnocení dobra a zla.", "Peníze.", "Zdraví."],
        correct: 1,
        hint: "Dobro a zlo.",
        explanation: "Zatímco morálka je soubor zažitých pravidel, etika je kritické myšlení o těchto pravidlech. Předmětem etiky je zkoumání lidského jednání z hlediska jeho mravní hodnoty a hledání cesty k 'dobrému životu'."
    },
    {
        id: 89,
        category: "Úvod k etice",
        question: "Co je 'profesní etika'?",
        answers: ["Etika pro amatéry.", "Aplikace etických norem na konkrétní povolání (kodexy).", "Etika ve volném čase.", "Školní řád."],
        correct: 1,
        hint: "Lékař, právník, knihovník.",
        explanation: "Lékař má Hippokratovu přísahu, knihovník má svůj kodex. Profesní etika vyžaduje, aby člověk v práci potlačil své osobní zájmy a řídil se principy, které chrání klienty a důvěryhodnost daného oboru."
    },
    {
        id: 90,
        category: "Plagiátorství",
        question: "Co je 'autorské zplnomocnění'?",
        answers: ["Podpis.", "Svolení autora k užití díla.", "Vydání knihy.", "Cena."],
        correct: 1,
        hint: "Licence.",
        explanation: "Zplnomocnění je aktivní akt. Autor se nevzdává svého autorství, ale dává ostatním jasná pravidla (např. skrze licence Creative Commons), jak mohou jeho dílo dál legálně a eticky využívat."
    },
    {
        id: 91,
        category: "Duševní vlastnictví a sdílení",
        question: "Co je 'povinná licence'?",
        answers: ["Řidičák.", "Zákonem vynucená licence za poplatek (např. u rádií).", "Zákaz.", "Svoboda."],
        correct: 1,
        hint: "Kompenzace.",
        explanation: "Povinná licence je kompromisem mezi právy autora a veřejným zájmem. Autor sice nemůže užití zakázat, ale má zaručenou spravedlivou finanční odměnu, což umožňuje např. masové vysílání hudby v rádiích."
    },
    {
        id: 92,
        category: "Value Sensitive Design",
        question: "Co jsou 'hodnoty' ve VSD?",
        answers: ["Cena produktu.", "Lidské hodnoty jako soukromí, důvěra, autonomie.", "Hodnoty akcií.", "Barvy."],
        correct: 1,
        hint: "Co je pro lidi důležité.",
        explanation: "Hodnoty ve VSD nejsou jen estetické. Jde o základní lidské potřeby a práva, která technologie může buď podporovat (např. inkluzivním designem), nebo potlačovat (např. narušením soukromí)."
    },
    {
        id: 93,
        category: "Profesní etika - knihovnictví",
        question: "Kdo je 'veřejný intelektuál' v knihovnictví?",
        answers: ["Každý čtenář.", "Knihovník aktivně se zapojující do společenských témat.", "Spisovatel.", "Politik."],
        correct: 1,
        hint: "Angažovaný knihovník.",
        explanation: "Angažovaný knihovník si uvědomuje svou moc. Informace nejsou neutrální a role knihovníka jako veřejného intelektuála znamená aktivně bojovat proti dezinformacím a lobbovat za svobodný přístup k vědění pro všechny."
    },
    {
        id: 94,
        category: "Interkulturní informační etika",
        question: "Co je to 'glokalizace'?",
        answers: ["Globální oteplování.", "Mysli lokálně, jednej globálně (propojení lokálního a globálního).", "Cestování.", "Lokalizace."],
        correct: 1,
        hint: "Mix.",
        explanation: "Glokalizace brání kulturnímu převálcování. Znamená to, že globální technologie (jako Facebook) se musí přizpůsobit lokálním zvyklostem a jazyku, aby byly eticky akceptovatelné a užitečné pro danou komunitu."
    },
    {
        id: 95,
        category: "Etika umělé inteligence",
        question: "V čem spočívá 'antropomorfismus' u robotů?",
        answers: ["Roboti vypadají jako zvířata.", "Přisuzování lidských vlastností strojům.", "Strach z robotů.", "Výroba robotů."],
        correct: 1,
        hint: "Polidšťování.",
        explanation: "Naše mozky jsou naprogramovány na sociální interakci. Proto máme tendenci mluvit na Alexu nebo navigaci, jako by to byli lidé. Pro designéry AI je to velká odpovědnost, aby tuto naši zranitelnost nezneužívali."
    },
    {
        id: 96,
        category: "Etika umělé inteligence",
        question: "Co je 'zoomorfismus'?",
        answers: ["Přisuzování zvířecích vlastností strojům (např. robo-pes).", "Návštěva ZOO.", "Rychlost.", "Strach ze zvířat."],
        correct: 0,
        hint: "AIBO.",
        explanation: "Roboti-zvířata lépe překonávají 'tajemné údolí'. Robo-pes nám připadá milý a užitečný (např. pro záchranáře), protože od něj neočekáváme dokonalé lidské chování, což snižuje naše etické nároky na stroj."
    },
    {
        id: 97,
        category: "Etika umělé inteligence",
        question: "Co je 'Superinteligence' (Bostrom)?",
        answers: ["Velký mozek.", "Intelekt, který výrazně převyšuje lidský ve všech oblastech.", "Chytrý telefon.", "Bůh."],
        correct: 1,
        hint: "Nick Bostrom.",
        explanation: "Superinteligence je teoretický bod, kdy AI překročí lidský výkon v každém myslitelném kognitivním úkolu. Bostrom varuje, že taková entita by mohla mít cíle, které jsou pro lidstvo nekompatibilní s přežitím."
    },
    {
        id: 98,
        category: "Etika umělé inteligence",
        question: "Co je 'Existenční riziko' AI?",
        answers: ["Že AI bude drahá.", "Riziko zániku lidstva způsobené AI.", "Viry.", "Ztráta dat."],
        correct: 1,
        hint: "Konec světa.",
        explanation: "Existenční riziko AI nespočívá v tom, že by nás stroje 'nenáviděly', ale v tom, že budou příliš efektivní při plnění cílů, které jsme jim špatně definovali (např. 'vytvoř co nejvíc sponek' může vést ke zničení planety)."
    },
    {
        id: 99,
        category: "RPT model a COVER",
        question: "Co je to 'morální aktér'?",
        answers: ["Herec.", "Bytost schopná morálního rozhodování a odpovědnosti.", "Kněz.", "Soudce."],
        correct: 1,
        hint: "Agent.",
        explanation: "Aby mohl být někdo odpovědný, musí mít autonomii a chápání následků. Proto jsou lidé morálními aktéry, zatímco současné stroje jsou (zatím) jen morálními 'pacienty' nebo nástroji v rukou aktérů."
    },
    {
        id: 100,
        category: "Cenzura",
        question: "Jaký je 'paradox svobodného slova'?",
        answers: ["Není žádný.", "Svoboda slova může umožnit šíření názorů, které svobodu slova chtějí zničit.", "Všichni lžou.", "Ticho léčí."],
        correct: 1,
        hint: "Demokracie vs Totalita.",
        explanation: "Tento paradox ukazuje, že neomezená svoboda může být sebezničující. Pokud budeme tolerovat i absolutní netoleranci, nakonec přijdeme o svobodu i o ty tolerantní. Je to hlavní argument pro regulaci nenávistných projevů."
    }
];

// Automatické ID (pro jistotu)
QUESTIONS.forEach((q, index) => {
    q.id = index + 1;
});
