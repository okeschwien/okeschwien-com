import { container, caption } from '../../styles/Lightbox.module.css'
import { text, textSmall } from '../../styles/Header.module.css'

const Lightbox = ({ onClose, selectedPost = undefined }) => {
  if (!selectedPost) {
    return null
  }

  const {
    title,
    assetImage: {
      fields: {
        file: { url },
      },
    },
  } = selectedPost

  return (
    <div className={container} onClick={onClose}>
      <p className={`${text} ${textSmall} ${caption}`}>{title}</p>
      <img alt={title} src={`https:${url}`} />
    </div>
  )
}

export default Lightbox
