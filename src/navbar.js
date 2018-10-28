'use strict';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  //adds hamburger icon animation to body
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "src/hamburger.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {

    let homeLink, aboutLink, eventsLink, faqLink;
    //handle which links work and which are highlighted white
    homeLink = this.props.page === "home" ? <a className="nav-link" style={{ color: "white" }}>Home</a> : <a className="nav-link" href="/" >Home</a>;
    aboutLink = this.props.page === "about" ? <a className="nav-link" style={{ color: "white" }}>About</a> : <a className="nav-link" href="about" >About</a>;
    eventsLink = this.props.page === "events" ? <a className="nav-link" style={{ color: "white" }}>Events</a> : <a className="nav-link" href="events" >Events</a>;
    faqLink = this.props.page === "faq" ? <a className="nav-link" style={{ color: "white" }}>FAQ</a> : <a className="nav-link" href="faq" >FAQ</a>;

    //basic navbar body
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top navbar-custom">
          <div className="container">
            <a className="navbar-brand" href="/"><img src="img/logo.png" style={{ maxHeight: "35px" }} /></a>
            <button className="hamburger hamburger--slider navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {homeLink}
                </li>
                <li className="nav-item">
                  {aboutLink}
                </li>
                <li className="nav-item">
                  {eventsLink}
                </li>
                <li className="nav-item">
                  {faqLink}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

//React rendering navbar for all pages
if (document.getElementById('navbar_container_home'))
  ReactDOM.render(<NavBar page="home" />, document.getElementById('navbar_container_home'));
if (document.getElementById('navbar_container_about'))
  ReactDOM.render(<NavBar page="about" />, document.getElementById('navbar_container_about'));
if (document.getElementById('navbar_container_events'))
  ReactDOM.render(<NavBar page="events" />, document.getElementById('navbar_container_events'));
if (document.getElementById('navbar_container_faq'))
  ReactDOM.render(<NavBar page="faq" />, document.getElementById('navbar_container_faq'));
if (document.getElementById('navbar_container_404'))
  ReactDOM.render(<NavBar page="404" />, document.getElementById('navbar_container_404'));