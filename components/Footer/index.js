import { text, textSmall } from '../../styles/Header.module.css'
import { container, copy } from '../../styles/Footer.module.css'

import Link from '../Link'

const URL_INSTAGRAM = 'https://instagram.com/oklon'
// const URL_IMPRINT = '/imprint'

const Footer = () => (
  <div className={container}>
    <Link url={URL_INSTAGRAM} out>
      Instagram
    </Link>
    {/* <Link url={URL_IMPRINT}>Imprint</Link> */}
    <div className={copy}>
      <p className={`${text} ${textSmall}`}>{new Date().getFullYear()}</p>
      <p className={`${text} ${textSmall}`}>Hamburg</p>
    </div>
  </div>
)

export default Footer
