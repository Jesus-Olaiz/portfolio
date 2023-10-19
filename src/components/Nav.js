import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className='nav'>
     <div className="pages">
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
     </div>
      

      <div className="socialContacts">
        <a href="something.com">SVG</a>
      </div>
    </div>
  );
}
