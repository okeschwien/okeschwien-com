import {
  container,
  caption,
  buttons,
  asset,
} from '../../styles/Lightbox.module.css'
import { text, textSmall } from '../../styles/Header.module.css'

const Lightbox = ({ onClose, selectedPost = undefined, onNextOrPrevious }) => {
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
      <div className={asset}>
        <img alt={title} src={`https:${url}`} />
        <div className={buttons}>
          <button type='button' onClick={onNextOrPrevious('previous')}>
            Previous
          </button>
          <button type='button' onClick={onNextOrPrevious('next')}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
