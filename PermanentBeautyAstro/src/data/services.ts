// Shared services data for Permanent Beauty
// Import this file in any component: import { services } from '../data/services';

export interface ServiceGroup {
    name: string;
    description: Description[];
    images: string[];
    services: Service[];
}

export interface Service {
    title: string;
    price: number;
    description: Description[];
    features: string[];
    images: string[];
}

export interface Description {
    title: string;
    titleType: HeadingType;
    text: string;
}

export enum HeadingType {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
}

export const serviceGroups: ServiceGroup[] = [
    {
        name: "Eyebrow Services",
        description: [
            {
                title: "Perfect Your Brows",
                titleType: HeadingType.H2,
                text: "Our eyebrow services are designed to enhance your natural beauty with techniques that create the perfect shape, fullness, and definition for your unique facial features."
            }
        ],
        images: ["eyebrow-services-main.jpg"],
        services: [
            {
                title: "Microblading",
                price: 450,
                description: [
                    {
                        title: "Natural Hair-Like Strokes",
                        titleType: HeadingType.H3,
                        text: "Transform your eyebrows with our signature microblading technique. This semi-permanent treatment creates natural-looking, hair-like strokes that fill in sparse areas and define your brow shape."
                    }
                ],
                features: [
                    "Natural, hair-like strokes",
                    "Customized shape and color",
                    "Lasts 12-18 months",
                    "Includes touch-up session"
                ],
                images: ["microblading-1.jpg", "microblading-2.jpg"]
            },
            {
                title: "Powder Brows",
                price: 475,
                description: [
                    {
                        title: "Soft Makeup Finish",
                        titleType: HeadingType.H3,
                        text: "Achieve a soft, powdered makeup look that lasts. This technique creates a fuller, more defined brow with a gradient effect from light to dark, perfect for all skin types."
                    }
                ],
                features: [
                    "Soft, makeup-like finish",
                    "Great for all skin types",
                    "Fuller appearance",
                    "Lasts 18-24 months"
                ],
                images: ["powder-brows-1.jpg", "powder-brows-2.jpg"]
            }
        ]
    },
    {
        name: "Eye Services",
        description: [
            {
                title: "Enhance Your Eyes",
                titleType: HeadingType.H2,
                text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner services enhance your lash line with precision and artistry."
            }
        ],
        images: ["eye-services-main.jpg"],
        services: [
            {
                title: "Permanent Eyeliner",
                price: 375,
                description: [
                    {
                        title: "Effortless Definition",
                        titleType: HeadingType.H3,
                        text: "Wake up with perfectly defined eyes every morning. Our permanent eyeliner enhances your lash line with a subtle or dramatic look that won't smudge or fade throughout the day."
                    }
                ],
                features: [
                    "Top, bottom, or both lash lines",
                    "Various styles available",
                    "Waterproof and smudge-proof",
                    "Lasts 2-3 years"
                ],
                images: ["eyeliner-1.jpg", "eyeliner-2.jpg"]
            }
        ]
    },
    {
        name: "Lip Services",
        description: [
            {
                title: "Beautiful Lips",
                titleType: HeadingType.H2,
                text: "Enhance your lips with natural color and definition that lasts. Our lip services create fuller, more defined lips with a beautiful, natural-looking tint."
            }
        ],
        images: ["lip-services-main.jpg"],
        services: [
            {
                title: "Lip Blushing",
                price: 500,
                description: [
                    {
                        title: "Natural Lip Enhancement",
                        titleType: HeadingType.H3,
                        text: "Enhance your lips with a natural tint that defines, adds color, and creates the illusion of fuller lips. Perfect for those wanting a subtle, everyday look."
                    }
                ],
                features: [
                    "Natural-looking color enhancement",
                    "Custom color matching",
                    "Corrects asymmetry",
                    "Lasts 2-3 years"
                ],
                images: ["lip-blushing-1.jpg", "lip-blushing-2.jpg"]
            }
        ]
    },
    {
        name: "Special Services",
        description: [
            {
                title: "Specialized Treatments",
                titleType: HeadingType.H2,
                text: "Unique cosmetic enhancements and corrective treatments tailored to your individual needs."
            }
        ],
        images: ["special-services-main.jpg"],
        services: [
            {
                title: "Beauty Mark",
                price: 150,
                description: [
                    {
                        title: "Timeless Elegance",
                        titleType: HeadingType.H3,
                        text: "Add a signature beauty mark or enhance an existing one. A subtle touch that adds character and elegance to your look."
                    }
                ],
                features: [
                    "Custom placement",
                    "Natural appearance",
                    "Quick procedure",
                    "Long-lasting results"
                ],
                images: ["beauty-mark-1.jpg"]
            },
            {
                title: "Scar Camouflage",
                price: 0, // 0 indicates consultation required
                description: [
                    {
                        title: "Restore Confidence",
                        titleType: HeadingType.H3,
                        text: "Minimize the appearance of scars through specialized pigmentation techniques. We'll assess your unique situation and create a customized treatment plan."
                    }
                ],
                features: [
                    "Personalized assessment",
                    "Color matching expertise",
                    "Various scar types",
                    "Consultation required"
                ],
                images: ["scar-camouflage-1.jpg"]
            }
        ]
    }
];

export default serviceGroups;
