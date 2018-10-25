'use strict';

//change this to the desired number of columns for displaying board members

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var num_columns = 3;

//follow this format for adding members
//if a member has a custom JPG image name, add an additional argument with just the name of the image! For example, for viviantsai.jpg, add the additional argument 'viviantsai'
var members = [['Vivian Tsai', 'Chair', 'Currently obsessed with <a href="http://happenapps.com/#quiver" target="_blank" rel="nofollow">Quiver</a>; parchment paper with grid lines; the card game <a href="https://en.wikipedia.org/wiki/Set_(card_game)" target="_blank" rel="nofollow">Set</a>; and literary candles.', 'viv@jhu.edu'], ['Adriana Donis Noriega', 'Vice Chair', 'Adriana is a senior computer science major. She loves pink and ice cream. Favorite coding language: Python. <i>#teamVim</i>', 'adonisn1@jhu.edu'], ['Dorothy Hu', 'Treasurer', 'Computer Science Combined BS/MS student at Johns Hopkins, expected to graduate in May 2020.', 'yhu44@jhu.edu'], ['Cindy Ge', 'Secretary', 'Avid lover of dogs, Korean BBQ, and long walks on the beach.', 'cge2@jhu.edu'], ['Claudia Moncaliano', 'Events Chair', 'Exploring CS through projects, Python, and puns. <i>#rushCS</i>', 'claudia@jhu.edu']];

//takes first and last name and outputs just the first name
function extractFirstName(nameString) {
  var nameList = nameString.split(' ');
  return nameList[0].toLowerCase();
}

//takes the 2D array of members and generates a list of HTML blocks for rendering
var memArray = members.map(function (person) {
  return React.createElement(
    'div',
    { 'data-aos': 'flip-down', className: 'col-sm-3 mb-4' },
    React.createElement(
      'div',
      { className: 'card h-100 text-center' },
      React.createElement('img', { className: 'card-img-top', src: "img/members/" + extractFirstName(person.length == 5 ? person[4] : person[0]) + ".jpg", alt: '' }),
      React.createElement(
        'div',
        { className: 'card-body' },
        React.createElement(
          'h5',
          { className: 'card-title' },
          person[0]
        ),
        React.createElement(
          'h6',
          { className: 'card-subtitle mb-2 text-muted' },
          person[1]
        ),
        React.createElement('div', { dangerouslySetInnerHTML: { __html: '<p className="card-text" >' + person[2] + '</p>' } })
      ),
      React.createElement(
        'div',
        { className: 'card-footer' },
        React.createElement(
          'a',
          { href: "mailto:" + person[3] },
          person[3]
        )
      )
    )
  );
});

//class for rendering the actual members

var BoardMembers = function (_React$Component) {
  _inherits(BoardMembers, _React$Component);

  function BoardMembers(props) {
    _classCallCheck(this, BoardMembers);

    return _possibleConstructorReturn(this, (BoardMembers.__proto__ || Object.getPrototypeOf(BoardMembers)).call(this, props));
  }

  _createClass(BoardMembers, [{
    key: 'createList',
    value: function createList() {
      var list = [];

      // generates rows of members
      for (var i = 0; i < members.length; i += num_columns) {

        var row = [];

        //generating a row of members
        for (var j = 0; j < num_columns; j++) {
          if (i + j < members.length) row.push(memArray[i + j]);
        }list.push(React.createElement(
          'div',
          { className: 'row' },
          row
        ));
      }
      return list;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.createList()
      );
    }
  }]);

  return BoardMembers;
}(React.Component);

//React rendering the board members


ReactDOM.render(React.createElement(BoardMembers, null), document.getElementById('exec_board_container'));