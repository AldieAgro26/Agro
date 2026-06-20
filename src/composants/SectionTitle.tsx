type Props = {
    title: string
    subTitle?: string
}

export function SectionTitle({title, subTitle }:Props) {
    return(
        <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
            {subTitle && <p className="mt-1 text-slate-600">{subTitle}</p>}
        </div>
    )
}