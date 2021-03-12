import { text, textSmall } from '../../styles/Header.module.css'

const Link = ({ url, children, out = false }) => (
  <p className={`${text} ${textSmall}`}>
    <a href={url} target={out ? '_blank' : undefined} rel='noopener noreferrer'>
      {children}
    </a>
  </p>
)

export default Link
