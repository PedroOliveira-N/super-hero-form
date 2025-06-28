import { useState } from "react"

export const useForm = (valoresIniciais) => {
    const [form, setForm] = useState(valoresIniciais)

    const onChange = (e) => {
        const {name, value, type, checked} = e.target;
        setForm((prevForm)=>({
            ...prevForm,
            [name] : type === 'checkbox' ? checked : value,
        }))  
}

    return { form , onChange }







}