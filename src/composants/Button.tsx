import React from "react";


type Variant = 'primary'| 'secondary' | 'danger'

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?:Variant
}

export  function Button({ variant = 'primary', className = '', ...props}:Props) {

    const base = 'inline-flex items-center rounded-md px-4 py-2 font-semibold duration-200 transition'

    const variants: Record<Variant, string> = {
        primary:'bg-slate-900 text-white hover:opacity-95',
        secondary: 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-900',
        danger:'bg-red-600 text-white hover:bg-red-500'
    }
    return(
        <a
        className = {` ${base} ${variants[variant]} ${className}`} {...props} />
    )
}