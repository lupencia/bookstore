
import { useState, useEffect } from "react";
import { ProductList } from "../types/Product";

export function useSearchProducts(searchTerm: string) {
  const [data, setData] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return; // No hacer nada si el término de búsqueda está vacío

    setLoading(true);
    const url = `https://dummyjson.com/products/search?q=${searchTerm}`;

    fetch(url)
      .then(res => res.json())
      .then(json => setData(json.products || []))
      .catch(err => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [searchTerm]); // Se vuelve a ejecutar cada vez que cambia el término de búsqueda

  return { data, loading };
}