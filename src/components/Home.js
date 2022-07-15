import { Link } from 'react-router-dom';

const Home = () => { // : React.FC 

  return (
    <div>
      <h2>Metalab Design for Metaverse</h2>
      <nav>
        <ul>
          <li>
            <Link to="/gallery">(1). Art Gallery</Link>
          </li>
          <li>
            <Link to="/shopping">(2). Shopping</Link>
          </li>
          <li>
            <Link to="/mathematical-space">(3). Mathematical Space</Link>
          </li>
          <li>
            <Link to="/poster">(4). Poster</Link>
          </li>
          {/* <li>
            <Link to="/ai-human">(5). AI Human</Link>
          </li> */}
          {/* <li>
            <a href="https://london-multiplay.herokuapp.com" target="_blank" rel="noreferrer">(6). Multiplay</a>
          </li> */}
        </ul>
      </nav>
    </div>
  )
};

export default Home;
