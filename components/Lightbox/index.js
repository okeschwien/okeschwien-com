import {
  container,
  caption,
  buttons,
  asset,
} from '../../styles/Lightbox.module.css'
import { text, textSmall } from '../../styles/Header.module.css'
import { useCallback } from 'react'

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

  const handleInboundClick = useCallback((event) => {
    event.stopPropagation()
  }, [])

  return (
    <div className={container} onClick={onClose}>
      <p
        className={`${text} ${textSmall} ${caption}`}
        onClick={handleInboundClick}
      >
        {title}
      </p>
      <div className={asset}>
        <img alt={title} src={`https:${url}`} onClick={handleInboundClick} />
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
