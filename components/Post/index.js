import { post } from '../../styles/Post.module.css'

const Post = ({
  post: {
    assetImage: {
      fields: {
        file: { url },
      },
    },
    title,
  },
}) => <img alt={title} src={`https:${url}`} className={post} />

export default Post
