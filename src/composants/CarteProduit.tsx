import { type Produit } from "../types/Produit";
import { Button } from "./Button";


type Props = {
    produit:Produit
    onAddToCart: () => void
}

export function CarteProduit({produit, onAddToCart}:Props){
    return(
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md ">
         <div className="h-28 bg-slate-200 "/>
         <div className="p-4 ">
            <h3 className="text-lg font-medium">{produit.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{produit.prixFCFA} FCFA / {produit.unit}</p>
            <Button variant='primary' className="mt-4 w-full" onClick={onAddToCart}>
              Ajouter au Panier()
            </Button>
         </div>
        </article>
    )
}