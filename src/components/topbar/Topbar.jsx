import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
    <span className="logo">KashifSocial</span>
    </div>
    <div className="topbarCenter">
    <div className="searchbar">
      <SearchIcon/>

      <input placeholder="Search for a friend, post or video" className="searchInput"/>
    </div>
    </div>



   
    <div className="topbarRight"></div>


    </div>
  )
}
