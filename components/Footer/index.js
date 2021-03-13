import { text, textSmall } from '../../styles/Header.module.css'
import { container, copy } from '../../styles/Footer.module.css'

import Link from '../Link'

const URL_INSTAGRAM = 'https://instagram.com/oklon'

const Footer = () => (
  <div className={container}>
    <Link url={URL_INSTAGRAM} out>
      Instagram
    </Link>
    <div className={copy}>
      <p className={`${text} ${textSmall}`}>{new Date().getFullYear()}</p>
      <p className={`${text} ${textSmall}`}>Hamburg, Germany</p>
    </div>
  </div>
)

export default Footer
