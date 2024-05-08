import styles from './Produtos.module.css'

export default function Produtos() {
  return (
    <section className="container">
      <div className={styles.section_produto}>
        <div>
          <h3>Nossos Produtos</h3>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes
            transitio nos modelos masculino, feminino e infantil.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
          </p>
        </div>

        <div>

        </div>
        
        <div>
          <h3>Todos os nossos produtos incluem:</h3>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>
    </section>
  )
}