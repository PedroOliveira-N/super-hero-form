import { useForm } from "../hooks/useForm"

export default function HeroForm ({ setHeroi }) {

    const { form , onChange }= useForm({
        nome: "",
        superPoder: "",
        idade: Number,
        origem: "",
        fraqueza: "",
        equipamento: false
        // adicionar os outros campos (equipamento é booleano [começa falso])
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setHeroi(form);
    }

    return(
        <div>
            <form className="hero-form" onSubmit={handleSubmit}>
                <input 
                    placeholder='Digite o Nome do Herói:' 
                    value={form.nome} 
                    onChange={onChange} 
                    name='nome'
                />

                <input 
                    placeholder='Digite o Super Poder do Herói:' 
                    value={form.superPoder} 
                    onChange={onChange} 
                    name='superPoder'
                />

                <input 
                    placeholder='Digite a Idade do Herói:' 
                    value={form.idade} 
                    onChange={onChange} 
                    name='idade'
                />

                <input 
                    placeholder='Digite a Origem do Herói:' 
                    value={form.origem} 
                    onChange={onChange} 
                    name='origem'
                />

                <input 
                    placeholder='Digite a Fraqueza do Herói:' 
                    value={form.fraqueza} 
                    onChange={onChange} 
                    name='fraqueza'
                />

                <label>
                    Este Herói Possui Equipamentos? 

                    <input 
                    placeholder='Você Possui Equipamentos?' 
                    checked={form.equipamento} 
                    onChange={onChange} 
                    name='equipamento' 
                    type="checkbox"
                    />
                    
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}