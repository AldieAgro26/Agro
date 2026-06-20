


type Props = {
    children: React.ReactNode
    className?:string
}


export function Container({children, className = ''}: Props) {
    return(
        <div className={`container-app ${className}`}>
            {children}
        </div>
    )
}