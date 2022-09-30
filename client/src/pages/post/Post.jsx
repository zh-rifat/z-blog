import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}
