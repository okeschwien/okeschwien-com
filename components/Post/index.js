import {
  container,
  asset,
  caption,
  text,
  textBig,
  textSmall,
} from '../../styles/Post.module.css'

const Post = ({
  post: {
    assetImage: {
      fields: {
        file: { url },
      },
    },
    title,
    identifier,
  },
}) => (
  <div className={container}>
    <div className={caption}>
      <p className={`${text} ${textBig}`}>{title}</p>
      <p className={`${text} ${textSmall}`}>{identifier}</p>
    </div>
    <img alt={title} src={`https:${url}`} className={asset} />
  </div>
)

export default Post
