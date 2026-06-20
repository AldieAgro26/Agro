type Props = {
    page: number
    totalPages: number
    onPrevius: () => void
    onNext: () => void
}

export function Pagination({page, totalPages, onPrevius, onNext}: Props){
    return(
        <div className="mt-6 flex items-center justify-between gap-3">
            
            <button 
                type="button" 
                onClick={onPrevius} 
                disabled={page <= 1} 
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold disabled:opacity-50"
            >
                précédent
            </button>
            
            
            <p className="text-sm text-slate-600">
                Page <span className="font-semibold text-slate-900">{page}</span> / {totalPages}
            </p>
            
            <button 
                type="button" 
                onClick={onNext} 
                disabled={page >= totalPages} 
                className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold disabled:opacity-50"
            >
                Suivant
            </button>
        </div>
    )
}