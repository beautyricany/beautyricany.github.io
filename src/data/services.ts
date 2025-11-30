// Shared services data for Permanent Beauty
// Import this file in any component: import { services } from '../data/services';

export interface ServiceGroup {
    name: string;
    shortDescription?: string;
    description: Description[];
    images: string[];
    services: Service[];
    minimalServices: MinimalService[];
}

export interface Service {
    title: string;
    shortDescription?: string;
    price: number;
    description: Description[];
    images: string[];
}

export interface MinimalService {
    title: string;
    price: number;
}

export interface Description {
    title?: string;
    titleType: HeadingType;
    text: string;
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
        shortDescription: "Nechte se hýčkat ošetřením které obnoví Vaši krásu i vnitřní pohodu",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["kosmetika-main.jpg"],
        services: [
            {
                title: "Základní kosmetické ošetření",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["kosmetika-zakladni.jpg"]
            },
            {
                title: "Regenerační kosmetické ošetření",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["kosmetika-regeneracni.jpg"]
            },
            {
                title: "Barvení řas a obočí",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["barveni-ras-oboci.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Dermabraze",
        shortDescription: "Nechte svou pleť znovu nadechnout – moderní metoda pro obnovu pleti s viditelnými výsledky",
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
            }
        ],
        images: ["dermabraze-main.jpg"],
        services: [
            {
                title: "Diamantová mikrodermabraze",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["dermabraze.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Lifting řas",
        shortDescription: "Přirozeně půvabný pohled každý den, který podtrhne Vaši krásu",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["lifting-ras-main.jpg"],
        services: [
            {
                title: "Lifting řas",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["lifting-ras.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Laminace obočí",
        shortDescription: "Perfektní tvar, přirozený vzhled, dlouhotrvající efekt",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["laminace-oboci-main.jpg"],
        services: [
            {
                title: "Laminace obočí",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["laminace-oboci.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Pedikúra",
        shortDescription: "Dopřejte svým nohám péči kterou si zaslouží",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["pedikura-main.jpg"],
        services: [
            {
                title: "Přístrojová brusná pedikúra",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["pedikura-pristrojova.jpg"]
            },
            {
                title: "Nehtová rovnátka",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["nehtova-rovnatka.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Manikúra",
        shortDescription: "Dotek luxusu pro Vaše ruce. Každá manikúra je okamžikem kdy se cítíš vyjímečně.",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["manikura-main.jpg"],
        services: [
            {
                title: "klasická manikúra",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["manikura-klasicka.jpg"]
            },
            {
                title: "P-Shine",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["p-shine.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Epilace",
        shortDescription: "Přirozená krása bez chloupků – profesionální epilace pro krásu a sebevědomí každý den.",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["epilace-main.jpg"],
        services: [
            {
                title: "ItalWax",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["italwax.jpg"]
            },
            {
                title: "Trvalá epilace",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["trvala-epilace.jpg"]
            }
        ],
        minimalServices: []
    },
    {
        name: "Redukce celulitidy a hubnutí",
        shortDescription: "Lehkost, kterou ucítíte každý den – redukce s jemnou péčí, která formuje postavu i sebevědomí",
        description: [
            {
                titleType: HeadingType.H2,
                text: "abraka dabra"
            }
        ],
        images: ["redukce-celulitidy-main.jpg"],
        services: [
            {
                title: "Lymfodrenáž",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["lymfodrenaz.jpg"]
            },
            {
                title: "Vacupress",
                shortDescription: "abraka dabra",
                price: 42,
                description: [
                    {
                        titleType: HeadingType.H3,
                        text: "abraka dabra"
                    }
                ],
                images: ["vacupress.jpg"]
            }
        ],
        minimalServices: []
    }
]

// export const serviceGroups: ServiceGroup[] = [
//     {
//         name: "Eyebrow Services",
//         shortDescription: "Perfect your brows with our professional microblading and powder brow techniques.",
//         description: [
//             {
//                 title: "Transform Your Brows",
//                 titleType: HeadingType.H2,
//                 text: "Our eyebrow services are designed to enhance your natural beauty with techniques that create the perfect shape, fullness, and definition for your unique facial features. Whether you prefer the natural look of microblading or the soft, filled appearance of powder brows, we have the expertise to deliver stunning results."
//             },
//             {
//                 titleType: HeadingType.H3,
//                 text: "Using premium pigments and state-of-the-art techniques, we ensure your brows are perfectly tailored to complement your face shape and skin tone. Each treatment includes a thorough consultation, precise application, and a complimentary touch-up session to guarantee your complete satisfaction."
//             }
//         ],
//         images: ["eyebrow-services-main.jpg", "eyebrow-services-before-after.jpg"],
//         services: [
//             {
//                 title: "Microblading",
//                 shortDescription: "Natural hair-like strokes for fuller, defined brows.",
//                 price: 11000,
//                 description: [
//                     {
//                         title: "Natural Hair-Like Strokes",
//                         titleType: HeadingType.H3,
//                         text: "Transform your eyebrows with our signature microblading technique. This semi-permanent treatment creates natural-looking, hair-like strokes that fill in sparse areas and define your brow shape perfectly."
//                     },
//                     {
//                         titleType: HeadingType.H4,
//                         text: "Our certified artists use precision hand tools and premium pigments to create incredibly realistic brow hairs that blend seamlessly with your natural brows. The result is fuller, more defined eyebrows that look completely natural and last 12-18 months."
//                     }
//                 ],
//                 images: ["microblading-1.jpg", "microblading-2.jpg", "microblading-3.jpg", "microblading-4.jpg"]
//             },
//             {
//                 title: "Powder Brows",
//                 shortDescription: "Soft, powdered makeup look perfect for all skin types.",
//                 price: 12000,
//                 description: [
//                     {
//                         title: "Soft Makeup Finish",
//                         titleType: HeadingType.H3,
//                         text: "Achieve a soft, powdered makeup look that lasts. This technique creates a fuller, more defined brow with a gradient effect from light to dark, perfect for all skin types including oily and mature skin."
//                     },
//                     {
//                         title: "Long-Lasting Beauty",
//                         titleType: HeadingType.H4,
//                         text: "Powder brows are created using a digital machine that deposits tiny dots of pigment in the skin, creating a soft shaded effect similar to makeup. This technique is ideal for those who prefer a more filled-in, defined look and offers superior longevity of 18-24 months."
//                     }
//                 ],
//                 images: ["powder-brows-1.jpg", "powder-brows-2.jpg", "powder-brows-3.jpg", "powder-brows-4.jpg"]
//             }
//         ],
//         minimalServices: [
//             { title: "Brow Touch-Up Session", price: 3500 },
//             { title: "Brow Color Refresh", price: 5000 },
//             { title: "Combination Brows", price: 13000 }
//         ]
//     },
//     {
//         name: "Eye Services",
//         shortDescription: "Wake up with perfectly defined eyes every morning.",
//         description: [
//             {
//                 title: "Enhance Your Eyes",
//                 titleType: HeadingType.H2,
//                 text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner services enhance your lash line with precision and artistry, creating the illusion of fuller, darker lashes without the daily hassle of makeup application."
//             },
//             {
//                 titleType: HeadingType.H3,
//                 text: "Whether you prefer a subtle lash enhancement or a bold winged liner, our experienced technicians will customize your permanent eyeliner to suit your style. The procedure is safe, precise, and designed to enhance your natural beauty while saving you time in your daily routine."
//             }
//         ],
//         images: ["eye-services-main.jpg", "eye-services-detail.jpg"],
//         services: [
//             {
//                 title: "Permanent Eyeliner",
//                 shortDescription: "Waterproof, smudge-proof eyeliner that lasts years.",
//                 price: 9000,
//                 description: [
//                     {
//                         title: "Effortless Definition",
//                         titleType: HeadingType.H3,
//                         text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner enhances your lash line with a subtle or dramatic look that won't smudge or fade throughout the day."
//                     },
//                     {
//                         titleType: HeadingType.H4,
//                         text: "Choose from subtle lash enhancement, classic liner, or dramatic winged styles. Perfect for active lifestyles, those with allergies to traditional makeup, or anyone who wants to simplify their beauty routine. The pigment is carefully implanted along the lash line for a flawless, long-lasting result."
//                     }
//                 ],
//                 images: ["eyeliner-1.jpg", "eyeliner-2.jpg", "eyeliner-3.jpg", "eyeliner-4.jpg"]
//             }
//         ],
//         minimalServices: [
//             { title: "Eyeliner Touch-Up", price: 3000 },
//             { title: "Lower Lash Line Only", price: 6000 },
//             { title: "Winged Eyeliner", price: 10000 },
//             { title: "Lash Enhancement", price: 7000 }
//         ]
//     },
//     {
//         name: "Lip Services",
//         shortDescription: "Natural color and definition for fuller, more beautiful lips.",
//         description: [
//             {
//                 title: "Beautiful Lips",
//                 titleType: HeadingType.H2,
//                 text: "Enhance your lips with natural color and definition that lasts. Our lip services create fuller, more defined lips with a beautiful, natural-looking tint that enhances your natural lip color."
//             },
//             {
//                 title: "Expert Color Matching",
//                 titleType: HeadingType.H3,
//                 text: "Our lip blushing technique uses custom color blending to match your natural lip tone or create your desired shade. The result is perfectly symmetrical, beautifully colored lips that look natural and require no daily maintenance."
//             }
//         ],
//         images: ["lip-services-main.jpg", "lip-services-colors.jpg"],
//         services: [
//             {
//                 title: "Lip Blushing",
//                 shortDescription: "Natural tint for fuller-looking lips with custom color matching.",
//                 price: 12000,
//                 description: [
//                     {
//                         title: "Natural Lip Enhancement",
//                         titleType: HeadingType.H3,
//                         text: "Enhance your lips with a natural tint that defines, adds color, and creates the illusion of fuller lips. Perfect for those wanting a subtle, everyday look that enhances your natural beauty."
//                     },
//                     {
//                         titleType: HeadingType.H4,
//                         text: "Lip blushing is ideal for correcting asymmetry, defining lip borders, and adding a youthful flush of color. The semi-permanent pigment fades gracefully over 2-3 years, maintaining a soft, natural appearance throughout. Wake up with perfectly tinted lips every day!"
//                     }
//                 ],
//                 images: ["lip-blushing-1.jpg", "lip-blushing-2.jpg", "lip-blushing-3.jpg", "lip-blushing-4.jpg"]
//             }
//         ],
//         minimalServices: []
//     },
//     {
//         name: "Special Services",
//         shortDescription: "Unique cosmetic enhancements and corrective treatments.",
//         description: [
//             {
//                 title: "Specialized Treatments",
//                 titleType: HeadingType.H2,
//                 text: "Unique cosmetic enhancements and corrective treatments tailored to your individual needs. From adding a signature beauty mark to camouflaging scars, we offer specialized services that make a meaningful difference."
//             },
//             {
//                 titleType: HeadingType.H3,
//                 text: "Each special service treatment is customized to achieve your specific goals. Our experienced technicians take the time to understand your needs and create a personalized treatment plan that delivers natural-looking, confidence-boosting results."
//             }
//         ],
//         images: ["special-services-main.jpg", "special-services-examples.jpg"],
//         services: [
//             {
//                 title: "Beauty Mark",
//                 shortDescription: "Add timeless elegance with a perfectly placed beauty mark.",
//                 price: 150,
//                 description: [
//                     {
//                         title: "Timeless Elegance",
//                         titleType: HeadingType.H3,
//                         text: "Add a signature beauty mark or enhance an existing one. A subtle touch that adds character and elegance to your look, inspired by classic Hollywood glamour."
//                     },
//                     {
//                         titleType: HeadingType.H4,
//                         text: "Whether you want to create a new beauty mark or enhance a natural one, we'll help you choose the perfect placement and size. The procedure is quick, virtually painless, and results in a permanent beauty mark that looks completely natural."
//                     }
//                 ],
//                 images: ["beauty-mark-1.jpg"]
//             },
//             {
//                 title: "Scar Camouflage",
//                 shortDescription: "Minimize scars with specialized pigmentation techniques.",
//                 price: 0, // 0 indicates consultation required
//                 description: [
//                     {
//                         title: "Restore Confidence",
//                         titleType: HeadingType.H3,
//                         text: "Minimize the appearance of scars through specialized pigmentation techniques. We'll assess your unique situation and create a customized treatment plan that helps scars blend seamlessly with surrounding skin."
//                     },
//                     {
//                         titleType: HeadingType.H4,
//                         text: "Our scar camouflage service works on various types of scars including surgical scars, stretch marks, vitiligo, and more. Using advanced color theory and matching techniques, we carefully select pigments that blend perfectly with your skin tone. A consultation is required to assess your needs and discuss expected outcomes."
//                     }
//                 ],
//                 images: ["scar-camouflage-1.jpg"]
//             }
//         ],
//         minimalServices: [
//             { title: "Freckles Enhancement", price: 5000 },
//             { title: "Areola Restoration", price: 0 },
//             { title: "Hairline Enhancement", price: 0 }
//         ]
//     },
//     {
//         name: "Manicure Services",
//         shortDescription: "Professional nail care and beautiful manicures for healthy, polished hands.",
//         description: [
//             {
//                 title: "Beautiful Hands",
//                 titleType: HeadingType.H2,
//                 text: "Pamper your hands with our professional manicure services. From classic to gel manicures, we offer treatments that keep your nails healthy and beautifully polished."
//             },
//             {
//                 titleType: HeadingType.H3,
//                 text: "Our manicure services combine expert nail care with relaxation. Each treatment includes nail shaping, cuticle care, moisturizing treatments, and your choice of polish. Enjoy a moment of self-care while we transform your hands into works of art."
//             }
//         ],
//         images: ["manicure-services-main.jpg", "manicure-services-colors.jpg"],
//         services: [
//             {
//                 title: "Classic Manicure",
//                 shortDescription: "Traditional manicure with nail shaping, cuticle care, and polish.",
//                 price: 400,
//                 description: [
//                     {
//                         title: "Timeless Nail Care",
//                         titleType: HeadingType.H3,
//                         text: "Our classic manicure includes nail shaping, cuticle care, hand massage, and your choice of polish. Perfect for maintaining healthy, beautiful nails."
//                     }
//                 ],
//                 images: ["classic-manicure-1.jpg", "classic-manicure-2.jpg"]
//             },
//             {
//                 title: "Gel Manicure",
//                 shortDescription: "Long-lasting gel polish with chip-resistant shine for up to 3 weeks.",
//                 price: 600,
//                 description: [
//                     {
//                         title: "Long-Lasting Shine",
//                         titleType: HeadingType.H3,
//                         text: "Enjoy chip-resistant, glossy nails that last up to 3 weeks. Our gel manicure includes complete nail care with professional gel polish application."
//                     }
//                 ],
//                 images: ["gel-manicure-1.jpg", "gel-manicure-2.jpg"]
//             },
//             {
//                 title: "Deluxe Spa Manicure",
//                 shortDescription: "Ultimate hand pampering with exfoliation, mask, and extended massage.",
//                 price: 800,
//                 description: [
//                     {
//                         title: "Ultimate Hand Pampering",
//                         titleType: HeadingType.H3,
//                         text: "Indulge in our most luxurious manicure experience. Includes exfoliation, hydrating mask, extended massage, and your choice of regular or gel polish."
//                     }
//                 ],
//                 images: ["deluxe-manicure-1.jpg", "deluxe-manicure-2.jpg"]
//             }
//         ],
//         minimalServices: [
//             { title: "Polish Change", price: 150 },
//             { title: "Gel Polish Removal", price: 100 },
//             { title: "Nail Repair", price: 120 },
//             { title: "French Manicure", price: 1200 }
//         ]
//     },
//     {
//         name: "Pedicure Services",
//         shortDescription: "Relaxing foot treatments and beautiful pedicures for healthy, smooth feet.",
//         description: [
//             {
//                 title: "Beautiful Feet",
//                 titleType: HeadingType.H2,
//                 text: "Treat your feet to professional pedicure services. From classic to luxury spa pedicures, we provide complete foot care that leaves your feet feeling refreshed and looking beautiful."
//             },
//             {
//                 titleType: HeadingType.H3,
//                 text: "Our pedicure treatments go beyond just polish. We focus on comprehensive foot health, removing calluses, treating cuticles, and providing therapeutic massage. Relax in our comfortable spa chairs while we pamper your feet from heel to toe."
//             }
//         ],
//         images: ["pedicure-services-main.jpg", "pedicure-services-spa.jpg"],
//         services: [
//             {
//                 title: "Classic Pedicure",
//                 shortDescription: "Essential foot care with nail trimming, callus removal, and polish.",
//                 price: 500,
//                 description: [
//                     {
//                         title: "Essential Foot Care",
//                         titleType: HeadingType.H3,
//                         text: "Our classic pedicure includes warm soak, nail care, callus removal, foot massage, and polish. The perfect treatment to keep your feet healthy and beautiful."
//                     }
//                 ],
//                 images: ["classic-pedicure-1.jpg", "classic-pedicure-2.jpg"]
//             },
//             {
//                 title: "Gel Pedicure",
//                 shortDescription: "Long-lasting gel polish on perfectly pampered feet.",
//                 price: 750,
//                 description: [
//                     {
//                         title: "Long-Lasting Beauty",
//                         titleType: HeadingType.H3,
//                         text: "Complete pedicure with gel polish that lasts up to 3 weeks. Includes all classic pedicure services plus professional gel application."
//                     }
//                 ],
//                 images: ["gel-pedicure-1.jpg", "gel-pedicure-2.jpg"]
//             },
//             {
//                 title: "Deluxe Spa Pedicure",
//                 shortDescription: "Ultimate relaxation with exfoliation, mask, hot stones, and extended massage.",
//                 price: 1000,
//                 description: [
//                     {
//                         title: "Ultimate Foot Luxury",
//                         titleType: HeadingType.H3,
//                         text: "Our signature spa pedicure includes exfoliating scrub, hydrating mask, hot stone massage, and extended relaxation. Choose regular or gel polish for this luxurious treatment."
//                     }
//                 ],
//                 images: ["deluxe-pedicure-1.jpg", "deluxe-pedicure-2.jpg"]
//             }
//         ],
//         minimalServices: [
//             { title: "Polish Change", price: 200 },
//             { title: "Callus Treatment", price: 300 },
//             { title: "Gel Polish Removal", price: 150 },
//             { title: "French Pedicure", price: 700 }
//         ]
//     }
// ];

export default serviceGroups;
