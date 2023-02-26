import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material"
import useNoticias from "../hooks/useNoticias"

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

function Formulario() {

    const { categoria, handleChangeCategoria } = useNoticias();

  return (
    <form action="">
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                label="categoria"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                        key={categoria.value} 
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    </form>
  )
}
export default Formulario