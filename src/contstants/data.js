import { Award, CheckCircle, Crown, Layers, Palette, Ruler, Scissors, Settings, Shirt, User } from "lucide-react"


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
