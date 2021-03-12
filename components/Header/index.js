import {
  container,
  text,
  textBig,
  textSmall,
} from '../../styles/Header.module.css'

const Header = ({ headline, subline }) => (
  <div className={container}>
    <div>
      <h1 className={`${text} ${textBig}`}>{headline}</h1>
      <p className={`${text} ${textSmall}`}>{subline}</p>
    </div>
  </div>
)

export default Header
