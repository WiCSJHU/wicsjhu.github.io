'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  //adds hamburger icon animation to body


  _createClass(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");
      script.src = "src/hamburger.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {

      var homeLink = void 0,
          aboutLink = void 0,
          eventsLink = void 0,
          faqLink = void 0;
      //handle which links work and which are highlighted white
      homeLink = this.props.page === "home" ? React.createElement(
        "a",
        { className: "nav-link", style: { color: "white" } },
        "Home"
      ) : React.createElement(
        "a",
        { className: "nav-link", href: "/" },
        "Home"
      );
      aboutLink = this.props.page === "about" ? React.createElement(
        "a",
        { className: "nav-link", style: { color: "white" } },
        "About"
      ) : React.createElement(
        "a",
        { className: "nav-link", href: "about" },
        "About"
      );
      eventsLink = this.props.page === "events" ? React.createElement(
        "a",
        { className: "nav-link", style: { color: "white" } },
        "Events"
      ) : React.createElement(
        "a",
        { className: "nav-link", href: "events" },
        "Events"
      );
      faqLink = this.props.page === "faq" ? React.createElement(
        "a",
        { className: "nav-link", style: { color: "white" } },
        "FAQ"
      ) : React.createElement(
        "a",
        { className: "nav-link", href: "faq" },
        "FAQ"
      );

      //basic navbar body
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar fixed-top navbar-expand-lg navbar-dark fixed-top navbar-custom" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "a",
              { className: "navbar-brand", href: "/" },
              React.createElement("img", { src: "img/logo.png", style: { maxHeight: "35px" } })
            ),
            React.createElement(
              "button",
              { className: "hamburger hamburger--slider navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive", "aria-controls": "navbarResponsive", "aria-expanded": "false", "aria-label": "Toggle navigation" },
              React.createElement(
                "span",
                { className: "hamburger-box" },
                React.createElement("span", { className: "hamburger-inner" })
              )
            ),
            React.createElement(
              "div",
              { className: "collapse navbar-collapse", id: "navbarResponsive" },
              React.createElement(
                "ul",
                { className: "navbar-nav ml-auto" },
                React.createElement(
                  "li",
                  { className: "nav-item" },
                  homeLink
                ),
                React.createElement(
                  "li",
                  { className: "nav-item" },
                  aboutLink
                ),
                React.createElement(
                  "li",
                  { className: "nav-item" },
                  eventsLink
                ),
                React.createElement(
                  "li",
                  { className: "nav-item" },
                  faqLink
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NavBar;
}(React.Component);

//React rendering navbar for all pages


if (document.getElementById('navbar_container_home')) ReactDOM.render(React.createElement(NavBar, { page: "home" }), document.getElementById('navbar_container_home'));
if (document.getElementById('navbar_container_about')) ReactDOM.render(React.createElement(NavBar, { page: "about" }), document.getElementById('navbar_container_about'));
if (document.getElementById('navbar_container_events')) ReactDOM.render(React.createElement(NavBar, { page: "events" }), document.getElementById('navbar_container_events'));
if (document.getElementById('navbar_container_faq')) ReactDOM.render(React.createElement(NavBar, { page: "faq" }), document.getElementById('navbar_container_faq'));
if (document.getElementById('navbar_container_404')) ReactDOM.render(React.createElement(NavBar, { page: "404" }), document.getElementById('navbar_container_404'));