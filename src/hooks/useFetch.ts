import { useEffect, useState } from "react";



type State<T> = {
    data: T | null
    loading: boolean
    error: string | null 
}

export function useFetch<T>(url: string){
    const[state, setState] = useState<State<T>>({
        data:null,
        loading: false,
        error:null,
})
 useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        
        const data: T = await response.json();
        
        if (!cancelled) {
          setState(prev  => ({...prev, data}));
        }
      } catch (err) {
        if (!cancelled) {
          setState(prev  => ({...prev, error: (err as Error).message}));
        }
      } finally {
        if (!cancelled) {
          setState(prev  => ({...prev, loading: false}))
        }
      }
    }

    load()

    return () => {
      cancelled = true;
    };
  }, [url]);
  return state

}