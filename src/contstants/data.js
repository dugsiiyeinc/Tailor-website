import { LogOut, Package, User } from "lucide-react"

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

export const dropdownItems=[
    {
        id:1,
        icon:User,
        label:'Profile'
    },
    {
        id:2,
        icon:Package,
        label:'View Orders'
    },
    {
        id:3,
        icon:LogOut,
        label:'Sign out'
    }
]