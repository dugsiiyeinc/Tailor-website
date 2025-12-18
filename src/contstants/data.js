import { Award, CheckCircle, Crown, Facebook, Layers, Linkedin, Mail, MapPin, Palette, Phone, Ruler, Scissors, Settings, Shirt, Twitter, User } from "lucide-react"
import { FaFacebookSquare, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


export const navItems=[
    {
        id:1,
        label:'Home',
        to:'/'
    },
    {
        id:2,
        label:'Shop',
        to:'/shop'
    },
    {
        id:3,
        label:'Contact Us',
        to:'/contact-us'
    },
    {
        id:4,
        label:'About Us',
        to:'/about-us'
    }
]

export const heroItems = [
  {
    id: 1,
    bg: '/images/bg-1.png',
    h1: 'Bespoke Suits. Crafted to Perfection.',
    p: 'Experience handcrafted suits made with precision, premium fabrics, and a fit designed exclusively for you.',
    btn1: 'Explore Products',
    btn2: 'View Our Services',
  },
  {
    id: 2,
    bg: '/images/bg-2.png',
    h1: 'Where Every Suit Tells Your Story',
    p: 'From design to final stitch, we create suits that reflect your style, confidence, and individuality.',
    btn1: 'Get Custom Tailoring',
    btn2: 'See Our Work',
  },
  {
    id: 3,
    bg: '/images/bg-3.png',
    h1: 'Timeless Suits for Modern Gentlemen',
    p: 'Expertly tailored suits for business, weddings, and special occasions—crafted for elegance and comfort.',
    btn1: 'See Our Services',
    btn2: 'Start Your Order',
  },
]

export const servicesItems = [
  {
    id: 1,
    title: 'Bespoke Suit Tailoring',
    description:
      'Custom-made suits crafted from scratch to match your measurements, posture, and personal style.',
    icon: Scissors,
    color:'primary'
  },
  {
    id: 2,
    title: 'Made-to-Measure Suits',
    description:
      'Precision-fitted suits using refined patterns adjusted specifically to your body.',
    icon: Ruler,
    color:'secondary'
  },
  {
    id: 3,
    title: 'Wedding & Formal Suits',
    description:
      'Elegant suits designed to make weddings and special occasions unforgettable.',
    icon: Crown,
    color:'accent'
  },
  {
    id: 4,
    title: 'Suit Alterations',
    description:
      'Professional adjustments including resizing, tapering, and detailed refinements.',
    icon: Settings,
    color:'primary'
  },
  {
    id: 5,
    title: 'Fabric & Style Consultation',
    description:
      'Expert advice on fabrics, cuts, linings, and design details.',
    icon: Palette,
    color:'secondary'
  },
  {
    id: 6,
    title: 'Custom Shirts & Trousers',
    description:
      'Tailored shirts and trousers crafted with the same attention as our suits.',
    icon: Shirt,
    color:'accent'
  },
]

export const testimonialsSection = [
  {
    id: 1,
    text:
      'The fit was absolutely perfect. You can feel the craftsmanship in every stitch. This is the best suit I have ever owned.',
    author: 'Hassan Sheik Mohammud',
    image: '/images/hasan-sheikh.png',
  },
  {
    id: 2,
    text:
      'From consultation to final fitting, the experience was professional and personal. Highly recommended for anyone who values quality.',
    author: 'Mohammed Abdullahi Farmajo',
    image: '/images/farmajo.png',
  },
  {
    id: 3,
    text:
      'I ordered a wedding suit and it exceeded my expectations. Elegant, comfortable, and tailored exactly to my style.',
    author: 'Hamze Abdi Barre',
    image: '/images/hamze-abdi.png',
  },
  {
    id: 4,
    text:
      'Premium fabrics, perfect fit, and excellent service. I will definitely return for my next suit.',
    author: 'Abdi-aziz Hassan lafta-gareen',
    image: '/images/laftagareen.png',
  },
]

export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    label: "hello@TailorShop.com",
  },
  {
    id: 2,
    icon: Phone,
    label: "+252 619999999",
  },
  {
    id: 3,
    icon: MapPin,
    label: "Banadir, Digfeer Road",
  },
];


export const footerLists = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Our Services" },
      { label: "Why Choose us" },
      { label: "Our Testimonials" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { label: "Company" },
      { label: "Achievements" },
      { label: "Our Goals" },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: FaFacebookSquare,
  },
  {
    id: 2,
    icon: FaXTwitter,
  },
  {
    id: 3,
    icon: FaTiktok,
  },
];

export const products = [
  // SUITS
  {
    id: 1,
    name: "Classic Navy Wool Suit",
    category: "jacket Suit",
    type: "professional",
    description: "A timeless navy suit tailored for business and formal occasions. Sharp lines and premium wool fabric.",
    image: "/images/suits/suit 1.png",
    price: 420,
  },
  {
    id: 2,
    name: "Charcoal Executive Suit",
    category: "jacket Suit",
    type: "professional",
    description: "Designed for boardrooms and formal meetings with a clean, powerful silhouette.",
    image: "/images/suits/suit 2.png",
    price: 450,
  },
  {
    id: 3,
    name: "Midnight Black Tuxedo",
    category: "suits",
    type: "wedding",
    description: "Elegant black tuxedo crafted for weddings, galas, and black-tie events.",
    image: "/images/suits/suit 3.png",
    price: 520,
  },
  {
    id: 4,
    name: "Royal Blue Wedding Suit",
    category: "suits",
    type: "wedding",
    description: "A bold royal blue suit tailored to make a statement on your special day.",
    image: "/images/suits/suit 4.png",
    price: 500,
  },
  {
    id: 5,
    name: "Slim Fit Grey Suit",
    category: "suits",
    type: "professional",
    description: "Modern slim-fit suit perfect for office wear and formal events.",
    image: "/images/suits/suit 5.png",
    price: 410,
  },
  {
    id: 6,
    name: "Brown Vintage Suit",
    category: "suits",
    type: "casual",
    description: "Inspired by classic tailoring with a warm brown tone for relaxed elegance.",
    image: "/images/suits/suit 6.png",
    price: 395,
  },
  {
    id: 7,
    name: "Italian Cut Black Suit",
    category: "suits",
    type: "formal",
    description: "Precision-cut Italian style suit offering luxury and sophistication.",
    image: "/images/suits/suit 7.png",
    price: 560,
  },
  {
    id: 8,
    name: "Three-Piece Grey Suit",
    category: "suits",
    type: "professional",
    description: "Complete three-piece suit for a confident and polished appearance.",
    image: "/images/suits/suit 8.png",
    price: 480,
  },
  {
    id: 9,
    name: "Beige Summer Suit",
    category: "suits",
    type: "casual",
    description: "Lightweight beige suit ideal for summer events and daytime occasions.",
    image: "/images/suits/suit 9.png",
    price: 390,
  },
  {
    id: 10,
    name: "Luxury Velvet Suit",
    category: "suits",
    type: "formal",
    description: "Premium velvet fabric designed for evening wear and exclusive events.",
    image: "/images/suits/suit 10.png",
    price: 620,
  },
  {
    id: 11,
    name: "Classic Black Suit",
    category: "suits",
    type: "professional",
    description: "Essential black suit suitable for all formal and business settings.",
    image: "/images/suits/suit 11.png",
    price: 430,
  },
  {
    id: 12,
    name: "Checked Pattern Suit",
    category: "suits",
    type: "casual",
    description: "Stylish checked design for a modern and confident look.",
    image: "/images/suits/suit 12.png",
    price: 410,
  },
  {
    id: 13,
    name: "Double-Breasted Navy Suit",
    category: "suits",
    type: "formal",
    description: "Classic double-breasted design with a strong, elegant presence.",
    image: "/images/suits/suit 13.png",
    price: 530,
  },
  {
    id: 14,
    name: "Custom Groom Suit",
    category: "suits",
    type: "wedding",
    description: "Tailored specifically for grooms who want perfection on their wedding day.",
    image: "/images/suits/suit 14.png",
    price: 600,
  },
  {
    id: 15,
    name: "Light Grey Office Suit",
    category: "jacket Suit",
    type: "professional",
    description: "Refined light grey suit suitable for daily professional wear.",
    image: "/images/suits/suit 15.png",
    price: 400,
  },
  {
    id: 16,
    name: "Textured Wool Suit",
    category: "jacket Suit",
    type: "formal",
    description: "Rich textured wool adds depth and luxury to this formal suit.",
    image: "/images/suits/suit 16.png",
    price: 470,
  },
  {
    id: 17,
    name: "Modern Slim Black Suit",
    category: "jacket Suit",
    type: "professional",
    description: "Contemporary slim fit with clean tailoring for modern professionals.",
    image: "/images/suits/suit 17.png",
    price: 445,
  },
  {
    id: 18,
    name: "Classic Wedding Tux",
    category: "jacket Suit",
    type: "wedding",
    description: "Traditional tuxedo crafted for timeless wedding elegance.",
    image: "/images/suits/suit 18.png",
    price: 580,
  },
  {
    id: 19,
    name: "Premium Custom Suit",
    category: "jacket Suit",
    type: "formal",
    description: "Fully custom-made suit tailored to your measurements and style.",
    image: "/images/suits/suit 19.png",
    price: 700,
  },

  // PANTS
  {
    id: 20,
    name: "Classic Black Dress Pants",
    category: "pants",
    type: "professional",
    description: "Elegant black pants designed for office and formal wear.",
    image: "/images/pants/pant-1.png",
    price: 120,
  },
  {
    id: 21,
    name: "Grey Slim Fit Pants",
    category: "pants",
    type: "professional",
    description: "Slim-fit grey pants offering comfort and a sharp look.",
    image: "/images/pants/pant-2.png",
    price: 115,
  },
  {
    id: 22,
    name: "Navy Office Pants",
    category: "pants",
    type: "professional",
    description: "Versatile navy pants perfect for everyday business wear.",
    image: "/images/pants/pant-3.png",
    price: 110,
  },
  {
    id: 23,
    name: "Wedding Formal Pants",
    category: "pants",
    type: "wedding",
    description: "Tailored pants designed to pair perfectly with wedding suits.",
    image: "/images/pants/pant-4.png",
    price: 135,
  },
  {
    id: 24,
    name: "Casual Cotton Pants",
    category: "pants",
    type: "casual",
    description: "Lightweight cotton pants for relaxed and stylish comfort.",
    image: "/images/pants/pant-5.png",
    price: 95,
  },
  {
    id: 25,
    name: "Brown Formal Pants",
    category: "pants",
    type: "formal",
    description: "Rich brown tone suitable for formal and semi-formal outfits.",
    image: "/images/pants/pant-6.png",
    price: 125,
  },
  {
    id: 26,
    name: "Checked Pattern Pants",
    category: "pants",
    type: "casual",
    description: "Stylish checked pants for a modern casual look.",
    image: "/images/pants/pant-7.png",
    price: 100,
  },
  {
    id: 27,
    name: "Tailored Office Pants",
    category: "pants",
    type: "professional",
    description: "Precision-tailored pants designed for long office hours.",
    image: "/images/pants/pant-8.png",
    price: 118,
  },
  {
    id: 28,
    name: "Luxury Wool Pants",
    category: "pants",
    type: "formal",
    description: "Premium wool pants offering warmth and sophistication.",
    image: "/images/pants/pant-9.png",
    price: 140,
  },
  {
    id: 29,
    name: "Beige Summer Pants",
    category: "pants",
    type: "casual",
    description: "Breathable beige pants ideal for summer wear.",
    image: "/images/pants/pant-10.png",
    price: 105,
  },
  {
    id: 30,
    name: "Slim Fit Formal Pants",
    category: "pants",
    type: "formal",
    description: "Modern slim-fit pants crafted for formal occasions.",
    image: "/images/pants/pant-11.png",
    price: 130,
  },
  {
    id: 31,
    name: "Custom Tailored Pants",
    category: "pants",
    type: "custom",
    description: "Made-to-measure pants tailored exactly to your fit.",
    image: "/images/pants/pant-12.png",
    price: 150,
  },
]

