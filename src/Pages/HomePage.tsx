import { Container } from "../composants/Container"
import { Button } from "../composants/Button"

export function HomePage(){

    return(

    <main>
    <section className="py-10 px-16">
      <Container>
        <p className="text-sm font-semibold text-orange-600">
          Sunu Marché
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Le goût du Local, livré chez vous.</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Découvrez les meilleurs produits locaux livrés directement chez vous.</p>

        <div className="mt-6 flex flex-wrap gap-3">

          <Button variant="primary">
            Voir les produits
          </Button>
          
          <Button variant="secondary">WatsApp</Button>
        </div>
        </Container>
    </section>
    </main>
    )
}