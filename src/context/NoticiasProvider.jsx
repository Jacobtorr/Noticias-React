import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

function NoticiasProvider ({children}) {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([])
    const [totalNoticias, setTotalNoticias] = useState(0)
    const [pagina, setPagina] = useState(1);

    // useEffect para la Categoria
    useEffect(() => {
        async function consultarAPI () {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
        }

        consultarAPI()
    }, [categoria]);

    // UseEffect para la paginacion
    useEffect(() => {
        async function consultarAPI () {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
        }

        consultarAPI()
    }, [pagina]);

    function handleChangeCategoria (e) {
        setCategoria(e.target.value)
    }

    function handleChangePagina(e, valor) {
        setPagina(valor)
    }


    return (
        <NoticiasContext.Provider 
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext
