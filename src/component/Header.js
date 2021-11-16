function Header() {
  return (
    <div className="Header">
      <div className="Header-content container">        
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-black fs-3 fw-bold">Freaky Fashion</p>
            <p className="text-info fs-5">page name</p>
          </div>
          <div>
            <input className="rounded-3 fs-5" placeholder="search..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
