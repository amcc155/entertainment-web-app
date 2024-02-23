import HomeIcon from "../../public/assets/HomeIcon";
import MoviesIcon from "../../public/assets/MoviesIcon";
import TVIcon from "../../public/assets/TVIcon";
import BookMarkIcon from "./BookMarkIcon";
import ProfilePhoto from "../../public/assets/images/image-avatar.png"
import Logo from "../../public/assets/logo"
import {Link} from "react-router-dom"
import "../styles/nav.css"


const NavBar = () => {
  return (
    <>
      <nav>
      <div className="leftSide">
        <li id = 'logo'>
            <Logo/>
            </li>
            </div>
        

        <ul>
          <div className="middleIcons">
          <li id="home">
            <Link to = "./">
            <HomeIcon />
            </Link>
          </li>

          <li id="movie">
            <Link to = "./movies">
            <MoviesIcon />
            </Link>
          </li>



          <li id="TV">
            <Link to = "./television-shows">
            <TVIcon />
            </Link>
          </li>

         
          <li id="Bookmark">
          <Link to =  '/bookmarked'> 
            <BookMarkIcon />
            </Link>
          </li>
          
          </div>


          <li id = 'ProfileImage'>
          <img id = 'photo' src = {ProfilePhoto} alt = 'profile-photo' />

          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
