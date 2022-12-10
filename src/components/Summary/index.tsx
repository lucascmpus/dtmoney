import { Container } from "./styles";
import incomeImg from '../../assets/icon1.svg'
import outcomeImg from '../../assets/icon2.svg'
import total from '../../assets/icon3.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>

    </Container>
  )
}