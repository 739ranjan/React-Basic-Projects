import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("/");

  useEffect(() => {
    setTab(location.pathname);
  }, [location]);

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Projects</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/" className={`nav-link text-white ${tab === '/' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/counter" className={`nav-link text-white ${tab === '/counter' && 'active'}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#counter"></use></svg>
            Counter
          </Link>
        </li>
        <li>
          <Link to="/clock" className={`nav-link text-white ${tab === '/clock' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#clock"></use></svg>
            Clock
          </Link>
        </li>
        <li>
          <Link to="/bgchanger" className={`nav-link text-white ${tab === '/bgchanger' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#bgchanger"></use></svg>
            Colour Changer
          </Link>
        </li>
        <li>
          <Link to="/calculator" className={`nav-link text-white ${tab === '/calculator' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#calculator"></use></svg>
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/timer" className={`nav-link text-white ${tab === '/timer' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#timer"></use></svg>
            Timer
          </Link>
        </li>
        <li>
          <Link to="/list" className={`nav-link text-white ${tab === '/list' && 'active'}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#list"></use></svg>
            List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
