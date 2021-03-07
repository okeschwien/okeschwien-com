import { container, textBig, textSmall } from '../../styles/Header.module.css'

const Header = ({ headline, subline }) => (
  <div className={container}>
    <div>
      <h1 className={textBig}>{headline}</h1>
      <p className={textSmall}>{subline}</p>
    </div>
  </div>
)

export default Header
