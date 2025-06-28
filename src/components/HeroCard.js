export default function HeroCard({ heroi }) {
    return (
        <div className="hero-card">
            <h2>🦸‍♂️ Ficha do Herói 🦸‍♀️</h2>
            <p><strong>Nome:</strong> {heroi.nome}</p>
            <p><strong>Super Poder:</strong> {heroi.superPoder}</p>
            <p><strong>Idade:</strong> {heroi.idade}</p>
            <p><strong>Origem:</strong> {heroi.origem}</p>
            <p><strong>Fraqueza:</strong> {heroi.fraqueza}</p>
            <p><strong>Possui Equipamento:</strong> {heroi.equipamento ? "Sim" : "Não"}</p>
        </div>
    )
}