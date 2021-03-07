import { header, copy } from '../../styles/Header.module.css'

const Header = ({ headline }) => (
  <div className={header}>
    <h1 className={copy}>{headline}</h1>
  </div>
)

export default Header
