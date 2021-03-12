import { container } from '../../styles/FeaturedPost.module.css'

const FeaturedPost = ({ children }) => (
  <div className={container}>{children}</div>
)

export default FeaturedPost
