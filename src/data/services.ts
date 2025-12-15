// Shared services data for Permanent Beauty

export interface ServiceGroup {
    name: string;
    shortDescription?: string;
    description: Description[];
    images: string[];
    services: MainService[];
}

export interface MainService {
    title: string;
    shortDescription?: string;
    description: Description[];
    images: string[];
    subServices: SubService[];
}

export interface SubService {
    title: string;
    price: number;
}

export interface Description {
    title?: string;
    titleType: HeadingType;
    text?: string;
    points?: string[];
}

export enum HeadingType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    None = "none"
}

export const serviceGroups: ServiceGroup[] = [
    {
        name: "Kosmetika",
        shortDescription: "Nechte se hýčkat ošetřením, které obnoví Vaši krásu i vnitřní pohodu",
        description: [
            {
                titleType: HeadingType.None,
                text: "Kosmetika je umění péče o krásu, zdraví a pohodu. Spojuje znalosti z dermatologie, estetiky i wellness a využívá jak tradiční postupy, tak moderní technologie. Jejím cílem je zlepšovat stav pokožky, podporovat zdraví, předcházet problémům, zpomalovat stárnutí a zároveň přinášet pocit komfortu a relaxace."
            },
            {
                titleType: HeadingType.None,
                text: "Kosmetická péče zahrnuje širokou škálu činností – od čištění a hydratace pleti přes masáže a masky až po pokročilá přístrojová ošetření. Správně provedená kosmetika pomáhá udržovat pokožku v dobré kondici, podporuje její regeneraci a chrání ji před vnějšími vlivy."
            },
            {
                titleType: HeadingType.None,
                text: "Důležitou součástí kosmetiky je také edukace a péče o klienta. Dokážeme Vám poradit s domácí péčí, výběrem vhodných produktů i prevencí kožních potíží. U nás v salonu používáme převážně produkty české renomované firmy SynCare."
            }
        ],
        images: [],
        services: [
            {
                title: "Základní kosmetické ošetření",
                shortDescription: "Kompletní péče o pleť s diamantovou dermabrazí a relaxační masáží",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Komplexní ošetření pleti, které zahrnuje:",
                        points: [
                            "odlíčení",
                            "úprava obočí",
                            "diamantová dermabraze",
                            "ultrazvuková špachtle",
                            "masáž obličeje a dekoltu",
                            "maska",
                            "závěrečné ošetření krémem"
                        ]
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Délka ošetření cca 60 minut"
                    }
                ],
                images: ["k2.jpg", "k3.jpg", "k1.jpg"],
                subServices: [
                    { title: "Základní kosmetické ošetření", price: 1400 },
                    { title: "Barvení řas v rámci kosmetiky", price: 100 },
                    { title: "Barvení obočí v rámci kosmetiky", price: 100 },
                    { title: "Barvení obočí samostatně", price: 200 },
                    { title: "Barvení řas samostatně", price: 200 },
                    { title: "Barvení řas a obočí samostatně", price: 350 },
                ]
            },
            {
                title: "Regenerační kosmetické ošetření",
                shortDescription: "Intenzivní regenerace pleti s alginátovou maskou a prodlouženou masáží",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Intenzivní regenerační ošetření, které zahrnuje:",
                        points: [
                            "odlíčení",
                            "úprava obočí",
                            "diamantová dermabraze",
                            "ultrazvuková špachtle",
                            "prodloužená masáž obličeje a dekoltu",
                            "alginátová maska",
                            "aplikace séra",
                            "závěrečné ošetření krémem"
                        ]
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Délka ošetření cca 90 minut"
                    }
                ],
                images: ["kr.png"],
                subServices: [
                    { title: "Regenerační kosmetické ošetření", price: 1600 },
                ]
            },
        ],
    },
    {
        name: "Dermabraze",
        shortDescription: "Nechte svou pleť znovu nadechnout – moderní metoda pro obnovu pleti s viditelnými výsledky",
        description: [
  
        ],
        images: [],
        services: [
            {
                title: "Diamantová mikrodermabraze",
                shortDescription: "Šetrné omlazení pleti pomocí diamantových hlavic",
                description: [
                                {
                                    titleType: HeadingType.None,
                                    text: "Dermabraze je velmi šetrná přístrojová metoda mechanického peelingu, kdy pomocí opakovaných, velmi jemných ošetření postupně docílíme výrazného zlepšení pleti."
                                },
                                {
                                    titleType: HeadingType.None,
                                    text: "Díky této proceduře se povrchová vrstva odumřelých kožních buněk odstraňuje vysoce kontrolovanou neinvazní exfoliací (sloupnutím), která je prováděna pomocí sterilní diamantové hlavice."
                                },
                                {
                                    titleType: HeadingType.None,
                                    text: "Při proceduře je také aktivována tvorba kolagenu, tvoří se nové mladé buňky, které pokožku činí jemnější, svěžejší a zdravější"
                                },
                                {
                                    titleType: HeadingType.None,
                                    text: "Za pomoci různě velkých a tvarovaných hlavic jsme schopni ošetřovat jak větší plochy, tak ty nejmenší detaily na vaší tváři."
                                },
                                {
                                    titleType: HeadingType.H3,
                                    title: "Dermabraze pomáhá",
                                    points: [
                                        "čistit a stahovat rozšířené póry",
                                        "zlepšovat elasticitu pokožky",
                                        "vyhlazovat jemné vrásky",
                                        "léčit strie",
                                        "léčit hrubou pokožku",
                                        "léčit akné",
                                        "zjemnit kožní reliéf - zlepšení stavu vrásek",
                                        "korekci jizviček po akné",
                                        "barevně sjednotit pleť",
                                        "zlepšuje vstřebávání kosmetických produktů",
                                        "omladit a regenerovat pleť",
                                        "celkově tonizovat pleť"
                                    ],
                                },
                                {
                                    titleType: HeadingType.None,
                                     text: "Tato metoda je vhodná prakticky pro všechny typy pleti, je jednoduchá, bezpečná, bezbolestná a neuvěřitelně účinná."
                                },
                ],
                images: ["derma_1.jpg", "derma_2.jpg"],
                subServices: [
                    { title: "Diamantová mikrodermabraze - obličej", price: 800 },
                    { title: "Diamantová mikrodermabraze - obličej, krk a dekolt", price: 1300 },
                ]
            }
        ],
    },
    {
        name: "Lifting řas",
        shortDescription: "Přirozeně půvabný pohled, který podtrhuje Vaši krásu každý den",
        description: [
        ],
        images: [],
        services: [
            {
                title: "Lifting řas",
                shortDescription: "Přirozeně krásný pohled bez řasenky",
                description: [
                                {
                                    titleType: HeadingType.None,
                                    text: "Toužíte po dokonale natočených, opticky prodloužených a výrazných řasách, které vydrží týdny bez každodenní práce s kleštičkami či řasenkou? Lifting řas je moderní a šetrná metoda, která dodá Vašim přírodním řasám krásný tvar, objem i lesk."
                                },
                                {
                                    title: "Co je lifting řas?",
                                    titleType: HeadingType.H4,
                                    text: "Lifting řas je procedura, při které se přírodní řasy nadzvednou od kořínků, jemně vytvarují a zafixují do elegantního oblouku. Výsledkem je otevřený, svěží a mladistvý pohled. Procedura je zcela bezbolestná, vhodná i pro citlivé oči a nepoškozuje řasy."
                                },
                                {
                                    title: "Jaké jsou výhody liftingu řas?",
                                    titleType: HeadingType.H4,
                                    points: [
                                        "přirozený vzhled bez umělých řas",
                                        "efekt prodloužení a zahuštění",
                                        "krásně natočené řasy až na 6–8 týdnů",
                                        "vhodné i pro krátké nebo rovné řasy",
                                        "možnost barvení pro ještě výraznější výsledek",
                                        "nulová údržba – stačí se jen probudit"
                                    ]
                                },
                                {
                                    title: "Pro koho je lifting vhodný?",
                                    titleType: HeadingType.H4,
                                    text: "Pro každého, kdo chce zvýraznit své vlastní řasy bez umělého prodlužování. Ideální je pro ženy, které chtějí přirozený, ale působivý vzhled."
                                }
                ],
                images: ["rasy.jpg",  "rasy_1.jpg", "rasy_2.png", "rasy_3.jpg"],
                subServices: [
                    { title: "Lifting řas s barvením", price: 1050 },
                ]
            }
        ],
    },
    {
        name: "Laminace obočí",
        shortDescription: "Perfektní tvar, přirozený vzhled, dlouhotrvající efekt",
        description: [
        ],
        images: [],
        services: [
            {
                title: "Laminace obočí",
                shortDescription: "Dokonale upravené obočí na několik týdnů",
                description: [
                     {
                        titleType: HeadingType.None,
                        text: "Bojíte-li se bolesti při tetování permanentního make-upu, pak je tu pro vás ideální metoda s dlouhotrvajícím efektem."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Toužíte po přirozeně hustém, nadzvednutém a perfektně upraveném obočí bez každodenní námahy? Laminace obočí je moderní metoda úpravy, která vašemu obočí dodá výraz, tvar i dlouhodobou fixaci."
                    },
                    {
                        title: "Co je laminace obočí?",
                        titleType: HeadingType.H4,
                        text: "Jde o šetrný kosmetický postup, při kterém se chloupky usměrní do ideálního směru, zafixují a opticky zahustí. Výsledkem je plnější, symetrické a elegantně zvýrazněné obočí. Efekt vydrží 4–6 týdnů. Celý proces je rychlý, bezbolestný a bezpečný."
                    },
                    {
                        title: "Pro koho je vhodná?",
                        titleType: HeadingType.H4,
                        points: [
                            "pro jemné a neposlušné obočí",
                            "pro řídké obočí, které potřebuje opticky zahustit",
                            "pro všechny, kdo chtějí výraznější, ale stále přirozený vzhled"
                        ]
                    }
                ],
                images: ["oboci_0.png", "oboci_1.jpeg", "oboci_2.jpg", "oboci.jpg"],
                subServices: [
                    { title: "Laminace obočí", price: 900}   
                ]
            }
        ],
    },
    {
        name: "Pedikúra",
        shortDescription: "Dopřejte svým nohám péči, kterou si zaslouží",
        description: [
        ],
        images: [],
        services: [
            {
                title: "Přístrojová brusná pedikúra",
                shortDescription: "Moderní odborné ošetření nohou bez namáčení",
                description: [
                    {
                        titleType: HeadingType.H4,
                        text: "Přístrojová brusná pedikúra (někdy také zvaná suchá nebo medicinální) je moderní odborný způsob ošetření nohou speciálním certifikovaným přístrojem s frézkami."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Celé ošetření se provádí na sucho bez namáčení, je bezbolestné a nedochází při něm k porušení integrity kůže. Vzhledem k těmto faktům zde nehrozí riziko přenosu infekce či mykóz a je vhodná i pro zákazníky se zdravotním postižením pro které je klasická pedikúra zakázána."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Odborně se tímto přístrojem ošetřují nehty a celé plosky nohou případně další problémy jako jsou například ztluštělé nehty, kuří oka, různé praskliny mozoly a zrohovatělá kůže."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Součástí ošetření je i ošetření případných mykóz nohy a nehtů, které se řeší za pomoci léčivých přípravků od renomovaných výrobců jako např. Podopharm, Spirularin ..."
                    },
                    {
                        title: "Doporučeno pro",
                        titleType: HeadingType.H4,
                        points: [
                            "každého kdo má jakýkoli problém s nehty, otlaky, prasklinami apod.",
                            "vhodná i pro aktivní lidi a sportovce",
                            "vhodná pro diabetiky, lidi s lupénkou, onemocněním žil či tepen nohou, s poruchou srážlivosti krve či se sníženou citlivostí nohou vůči bolesti"
                        ]
                    },
                    {
                        title: "Hlavní výhody",
                        titleType: HeadingType.H4,
                        points: [
                            "šetrná pro kůži i nehty",
                            "bezbolestné ošetření",
                            "bez rizika poranění a infekce",
                            "dokonale vyhlazená kůže",
                            "bez namáčení nohou"
                        ]
                    }
                ],
                images: ["pedi.png", "pedi1.jpg", "pedi3.jpg"],
                subServices: [
                    { title: "Přístrojová brusná pedikúra", price: 750 },
                    { title: "Lakování k pedikúře - Gel lak", price: 250 },
                    { title: "Lakování k pedikúře - klasický lak", price: 190 },
                    { title: "Ošetření kuřího oka", price: 150 },
                    { title: "Samostatné lakování s úpravou nehtů - Gel lak", price: 650 },
                    { title: "Samostatné lakování s úpravou nehtů - klasický lak", price: 550 },
                ]
            },
            {
                title: "Nehtová rovnátka",
                shortDescription: "Řešení zarostlých a deformovaných nehtů bez operace",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Deformované, stočené nehty nebo další potíže ve formě zarostlých nehtů jsou dnes velmi rozšířeným problémem pro mnoho pacientů. Různě deformované typy nehtů a zarostlé nehty se zpravidla projevují v důsledku genetické predispozice. Zarostlé nehty mohou také vznikat nesprávným stříháním nehtů nebo používáním nevhodné obuvi. Velmi často jsou zarostlé nehty doprovázeny bolestmi a záněty nehtových valů."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Aplikace dnešních moderních nehtových rovnátek pomáhá vyřešit problém bez operace. Rovnátka poskytují plnohodnotné odstranění problému se zarostlými nebo deformovanými nehty."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Po bezbolestné aplikaci nehtových špon dochází za určitou dobu k narovnání nehtové ploténky až do svého normálního růstu. Tato metoda korekce nehtů je vhodná téměř pro každého, včetně dětí a diabetiků. Nástup účinku této metody je velmi rychlý, časově nenáročný a hlavně zcela bezbolestný."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Aplikace rovnátka trvá jen několik minut a je téměř neznatelná. Další výhodou je, že během léčby pacienta nijak neomezují v každodenním životě a dokonce s ním může praktikovat sportovní i vodní aktivity."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Používáme výhradně osvědčené systémy nehtových rovnátek např. Podofix, Combiped..."
                    }
                ],
                images: ["rovnatka_2.png", "rovnatka_0.jpg", "rovnatka_1.png", "rovnatka_3.png"],
                subServices: [
                    { title: "Nehtová rovnátka", price: 550 },
                    { title: "Nehtová rovnátka Podofix", price: 850 },
                ]
            }
        ],
    },
    {
        name: "Manikúra",
        shortDescription: "Dotek luxusu pro Vaše ruce. Každá manikúra je okamžikem, kdy se cítíte výjimečně.",
        description: [
        ],
        images: [],
        services: [
            {
                title: "Klasická manikúra",
                shortDescription: "Tradiční péče o nehty a ruce s lakováním",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Klasická manikúra je tradiční procedura péče, která zahrnuje jemné ošetření nehtů, péči o ruce, odstranění kůžičky, úpravu tvaru nehtů a aplikaci laku dle vlastního výběru. Výsledkem klasické manikúry jsou jemné ruce a krásně upravené nehty."
                    }
                ],
                images: ["mani.png", "mani1.jpg", "mani2.png"],
                subServices: [
                    { title: "Klasická manikúra", price: 450 },
                    { title: "Manikúra s lakováním", price: 590 },
                    { title: "Manikúra + Gel lak", price: 690 },
                    { title: "Parafínový zábal samostatně", price: 250 },
                    { title: "Parafínový zábal k manikúře", price: 150 }
                ]
            },
            {
                title: "P-Shine",
                shortDescription: "Přirozený lesk a síla pro vaše nehty",
                description: [
                    {
                        titleType: HeadingType.H4,
                        text: "Objevte tradici japonské manikúry P-Shine: 100% přírodní péče, která vyživí, posílí a dodá nehtům dlouhotrvající růžový lesk bez laku. Ideální pro oslabené nehty i pro ty, kdo chtějí upravený, zdravý vzhled přirozeně."
                    },
                    {
                        title: "Co je P-Shine?",
                        titleType: HeadingType.H4,
                        text: "P-Shine (japonská manikúra) je tradiční metoda péče o přírodní nehty, při níž se do nehtové ploténky vmasíruje speciální pasta a následně zaleští jemným pudrem. Výsledkem je přirozený růžový odstín, vysoký lesk a pevnější struktura nehtu — bez použití gelu či laku."
                    },
                    {
                        title: "Pro koho je ošetření vhodné?",
                        titleType: HeadingType.H4,
                        text: "Pro všechny, kdo chtějí zdravé, upravené nehty bez chemických úprav. Doporučujeme P-Shine zejména po odstranění modeláže nebo při oslabených, třepících se nehtech."
                    },
                    {
                        title: "Co ošetření dělá a proč funguje?",
                        titleType: HeadingType.H4,
                        text: "Pasta obsahuje přírodní složky (včelí vosk, keratin, vitaminy a minerály), které vyživují nehtovou ploténku, zvyšují pružnost a podporují zdravý růst. Leštění zapracuje látky do struktury nehtu, takže lesk a ochranný efekt vydrží dlouho."
                    }
                ],
                images: ["pshine.png", "pshine_2.jpg", "pshine_3.jpg"],
                subServices: [
                    { title: "P-Shine", price: 590 }
                ]
            }
        ],
    },
    {
        name: "Epilace",
        shortDescription: "Přirozená krása bez chloupků – profesionální epilace pro krásu a sebevědomí každý den.",
        description: [
        ],
        images: [],
        services: [
            {
                title: "ItalWax",
                shortDescription: "Epilace voskem",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Epilace voskem je rychlý a efektivní způsob, jak se zbavit nežádoucích chloupků na týdny. Oproti holení odstraňuje chloupky i s kořínkem, takže pokožka zůstává hladká déle a chloupky časem slábnou a ztenčují se."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Používáme kvalitní vosky a epilační kosmetiku ItalWax která zajišťuje spolehlivé odstranění všech chloupků a zároveň je velmi šetrná k pokožce. Epilace má dlouhotrvající výsledek, zajistí hladkou pokožku až na 3 – 5 týdnů."
                    },
                    {
                        title: "Co lze voskem ošetřit?",
                        titleType: HeadingType.H4,
                        points: [
                            "nohy, ruce",
                            "podpaží",
                            "bikiny",
                            "obličej (horní ret, brada, tváře)",
                            "záda, hrudník"
                        ]
                    },
                    {
                        title: "Proč je vosk lepší než jiné metody?",
                        titleType: HeadingType.H4
                    },
                    {
                        title: "Delší výdrž než holení",
                        titleType: HeadingType.H5,
                        points: [
                            "Holení chloupky pouze seříznete a už druhý den jsou zpět",
                            "Vosk odstraňuje chloupek i s kořínkem → hladká pokožka až 3–5 týdnů"
                        ]
                    },
                    {
                        title: "Žádné ostré \"strniště\"",
                        titleType: HeadingType.H5,
                        points: [
                            "Po holení dorůstají chloupky tvrdé a pichlavé",
                            "Po vosku rostou jemnější, světlejší a tenčí, takže další epilace je výrazně pohodlnější"
                        ]
                    },
                    {
                        title: "Méně zarůstání než u epilátoru",
                        titleType: HeadingType.H5,
                        points: [
                            "Domácí epilátory často chloupky lámou",
                            "Kvalitní vosk při správné technice chloupky vytahuje rovnoměrně, což snižuje riziko zarůstání a podráždění"
                        ]
                    },
                    {
                        title: "Šetrnější k pokožce než depilační krémy",
                        titleType: HeadingType.H5,
                        points: [
                            "Depilační krémy obsahují silné chemické látky, které mohou podráždit i normální pleť",
                            "Profesionální vosky jsou hypoalergenní, vhodné i pro citlivé partie a nezatěžují pokožku chemikáliemi"
                        ]
                    },
                    {
                        title: "Perfektní přesnost",
                        titleType: HeadingType.H5,
                        points: [
                            "Vosk dokáže zachytit i velmi krátké chloupky, zato holení často vynechá jemné a světlé",
                            "Ideální pro obličej, podpaží, bikiny i velké plochy těla"
                        ]
                    }
                ],
                images: ["epil.png", "epil2.png", "epil3.png"],
                subServices: [
                    { title: "ItalWax epilace voskem - Lýtka", price: 450 },
                    { title: "ItalWax epilace voskem - Nohy celé", price: 850 },
                    { title: "ItalWax epilace voskem - Ruce", price: 490 },
                    { title: "ItalWax epilace voskem - Podpaží", price: 290 },
                    { title: "ItalWax epilace voskem - Bikini line", price: 350 },
                    { title: "ItalWax epilace voskem - Horní ret", price: 150 },
                    { title: "ItalWax epilace voskem - Brada", price: 150 },
                    { title: "ItalWax epilace voskem - Kotlety", price: 150 },
                    { title: "ItalWax epilace voskem - Obličej komplet", price: 390 },
                ]
            },
            {
                title: "Laserová IPL epilace",
                shortDescription: "Moderní cesta k hladké pokožce",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Toužíte po dokonale hladké pokožce bez neustálého holení či bolestivého vytrhávání? Laserová IPL epilace je efektivní a dlouhodobé řešení, které dokáže výrazně omezit růst nežádoucích chloupků a přinést vám komfort každý den."
                    },
                    {
                        title: "Co je IPL epilace?",
                        titleType: HeadingType.H4,
                        text: "IPL (Intense Pulsed Light) je technologie pracující s intenzivním pulzním světlem. To se zaměřuje na pigment v chloupku, zahřívá vlasový folikul a postupně jej oslabuje. Díky tomu je růst chloupků pomalejší, řidší a časem může zcela vymizet."
                    },
                    {
                        title: "Výhody IPL epilace",
                        titleType: HeadingType.H4,
                        points: [
                            "Dlouhodobý efekt – s každým ošetřením se růst chloupků snižuje",
                            "Šetrné řešení – minimální bolestivost a žádné podráždění pokožky",
                            "Rychlé ošetření – vhodné i pro větší plochy těla",
                            "Bez zarůstajících chloupků – zbavte se pupínků i nepříjemných zánětů po holení"
                        ]
                    },
                    {
                        title: "Pro koho je ošetření vhodné?",
                        titleType: HeadingType.H4,
                        text: "IPL epilace je ideální pro ženy i muže, kteří chtějí dlouhodobě odstranit nežádoucí ochlupení na těle či obličeji. Nejlepších výsledků je dosaženo u klientů se světlejší pokožkou a tmavšími chloupky."
                    },
                    {
                        title: "Jak ošetření probíhá?",
                        titleType: HeadingType.H4,
                        text: "Po úvodní konzultaci se pokožka připraví, nanese se chladicí gel a následně se aplikuje pulsní světlo. Ošetření je rychlé a bezbolestné."
                    },
                    {
                        title: "Dopřejte si hladkou pokožku natrvalo",
                        titleType: HeadingType.H4,
                        text: "Objednejte se na IPL epilaci a zjistěte, jak snadné a příjemné může být zbavit se chloupků jednou provždy. Rádi vám poradíme, která ošetření jsou pro vás nejvhodnější."
                    }
                ],
                images: ["ipl1.png", "ipl2.png", "ipl3.jpg"],
                subServices: [
                    { title: "Epilace trvalá - Horní ret", price: 500 },
                    { title: "Epilace trvalá - Brada", price: 800 },
                    { title: "Epilace trvalá - Kotlety", price: 900 },
                    { title: "Epilace trvalá - Tváře", price: 1100 },
                    { title: "Epilace trvalá - Podpaží", price: 1400 },
                    { title: "Epilace trvalá - Bikini line", price: 1800 }
                ]
            }
        ],
    },
    {
        name: "Redukce celulitidy a hubnutí",
        shortDescription: "Lehkost, kterou ucítíte každý den – redukce s jemnou péčí, která formuje postavu i sebevědomí",
        description: [
        ],
        images: [],
        services: [
            {
                title: "Lymfodrenáž",
                shortDescription: "Podpora lymfatického systému a detoxikace organismu",
                description: [
                    {
                        titleType: HeadingType.None,
                        text: "Přístrojová lymfodrenáž je moderní, velmi příjemná a účinná metoda, která podporuje správné fungování lymfatického systému, zlepšuje odtok přebytečné vody z těla a přispívá k celkové detoxikaci organismu. Ošetření probíhá pomocí speciálního přístroje s návleky, které se postupně plní vzduchem a vytváří jemný, rytmický tlak podporující lymfatický oběh."
                    },
                    {
                        title: "Co lymfodrenáž přináší:",
                        titleType: HeadingType.H4,
                        points: [
                            "redukci otoků a pocitu těžkých nohou",
                            "zmírnění celulitidy a zlepšení vzhledu pokožky",
                            "podporu detoxikace a imunitního systému",
                            "urychlení regenerace po sportovní zátěži",
                            "prevenci křečových žil a zlepšení cirkulace",
                            "uvolnění napětí a pocit lehkosti"
                        ]
                    },
                    {
                        title: "Pro koho je lymfodrenáž vhodná?",
                        titleType: HeadingType.H4,
                        text: "Lymfodrenáž doporučujeme všem jako podporu hubnutí, pro redukci celulitidy, těm, kteří trpí otoky, mají sedavé zaměstnání, sportují, nebo chtějí zlepšit stav pokožky. Výborně funguje také jako prevence a doplněk k péči o zdraví i krásu."
                    },
                    {
                        title: "Doporučená aplikace procedury:",
                        titleType: HeadingType.H4,
                        text: "Detoxikace – 1-2x týdně po dobu 4-6 týdnů. Hubnutí a celulitida – 2-3x týdně po dobu 4-8 týdnů (doporučuje se kombinovat s dalšími procedurami). Udržovací fáze 1x za 1-2 týdny. Během kůry se doporučuje zvýšit pitný režim (min. 2 litry vody denně) a případně upravit stravu."
                    },
                    {
                        title: "Kontraindikace",
                        titleType: HeadingType.H4,
                        text: "Lymfodrenáž není vhodná při akutních zánětech, infekcích, žilní trombóze, závažných srdečních onemocněních nebo při neléčené hypertenzi. Pokud si nejste jistí, rádi vám poradíme."
                    }
                ],
                images: ["lymfo.jpg"],
                subServices: [
                    {title: "Přístrojová Lymfodrenáž 30 min", price: 290},
                    {title: "Přístrojová Lymfodrenáž 45 min", price: 350},
                    {title: "Přístrojová Lymfodrenáž 60 min", price: 390},
                    {title: "Lymfodrenáž Balíček ošetření 1 (10x45´)", price: 3000},
                    {title: "Lymfodrenáž Balíček ošetření 2 (10x60´)", price: 3500},
                ]
            },
            {
                title: "Vacupress",
                shortDescription: "Tvarování postavy a redukce celulitidy přístrojem Bentlon Shapemaster",
                description: [
                    {
                        titleType: HeadingType.H4,
                        title: "Ošetření přístrojem Bentlon Shapemaster",
                        text: "Přístroj je primárně určen k tvarování postavy, redukci celulitidy a redukci podkožního tuku. Velmi efektivně pracuje s podkožním vazivem kdy je dosahováno velmi dobrých výsledků oproti manuální masáži."
                    },
                    {
                        titleType: HeadingType.None,
                        text: "Hloubková masáž je založena na různých úrovních sání. Akumulované tukové buňky se uvolňují, vazivová vlákna zvláčňují a relaxují, uložený odpadní materiál je pak vyloučen lymfatickými cestami."
                    },
                    {
                        title: "Indikace:",
                        titleType: HeadingType.H4,
                        points: [
                            "celulitida",
                            "korekce postavy",
                            "odstranění nahromaděného tuku",
                            "zvýšení elasticity pokožky",
                            "jizvy, strie"
                        ]
                    }
                ],
                images: [ "vacu1.png", "vacu2.png" ],
                subServices: [
                    { title: "Vacupress", price: 1000 },
                ]
            }
        ],
    }
]

export default serviceGroups;
