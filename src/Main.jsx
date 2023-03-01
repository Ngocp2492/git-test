import "./App.css";

function Main() {
  return (
    <div className="main">
      <div className="container" style={{ marginTop: "16px" }}>
        <div className="row g-3" style={{ width: "100%" }}>
          <div className="col-md-3 col-xs-12">
            <div className="list-filter p-3">
              <h4>Category filter</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Apple
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Samsung
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Lg
                </label>
              </div>
            </div>
          </div>
          <div className="list-item1 col-md-9 col-xs-12">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Open this select menu
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div>
            </form>
            <div className="row g-3">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a href="detail.html" className="item-card">
                  <div className="item-sale">33%</div>
                  <div className="card-image-wrapper">
                    <div className="card-image"></div>
                  </div>
                  <div className="item-card-content">
                    <h2>Name</h2>
                    <h3>$100.000</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="btn_showmore row g-0">
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-outline-primary">
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="back-to-top">Top</div>
    </div>
  );
}

export default Main;
