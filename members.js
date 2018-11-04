'use strict';

//change this to the desired number of columns for displaying board members

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var num_columns = 4;

//follow this format for adding members
//if a member has a custom JPG image name, add an additional argument with just the name of the image! For example, for viviantsai.jpg, add the additional argument 'viviantsai'
var members = [['Mia Boloix', 'Sophomore CS/Math double major; enjoys all things vegan &amp; is most definitely #teamVim.'], ['Camila Camacho', 'Camila is the vice chair of ACM and works for the Hopkins IT department on JaySquad.'], ['Coco Li', 'Coco is a junior studying cognitive science and computer science; can be easily made happy with food.'], ['Rena Liu', 'CS frosh currently curious about blockchain and political theory. Doesn’t really want to take a side, but uses emacs at the moment.'], ['Aubin Lohier', 'CS sophomore, from NYC (QUEENS); enjoys Java, coffee, and not burning his kitchen down when he cooks.'], ['Julia Oppenheim', 'Junior studying Computer Science and Cognitive Science; passionate about education and avoiding gluten.'], ['Bill Watson and Bailey Parker', '"We\'re being shipped as a unit. An absolute unit."', "billbailey"], ['Andrew Rojas', 'Treasurer of ACM, apple eater, bad cook. West coast === best coast'], ['Nancy Wang', 'CS/Econ junior; interested in bridging people + societal barriers. Mostly likes random walks and mangoes.', "nancy"], ['Sara Weill', 'Sara is a sophomore CS/CE double major interested in cybersecurity; enjoys volunteering locally with APO.'], ['Tony Yang', 'Junior studying CS with an interest in networks; involved in oSTEM and local volunteering; enjoys cooking and is willing to try any food at least once.'], ['Evonne Zhu', 'Evonne is a junior majoring in Computer Science with minors in Music and Film &amp; Media Studies.'], ['Aly Kruglak', ''], ['Hailey Lee', ''], ['Daya Lu', ''], ['Natalie Martinez', ''], ['Madhu Rajmohan', ''], ['Momo Steele', ''], ['Gayatri Susarla', ''], ['Sharmila Tamby', ''], ['Kristin Yim', '']];

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
      React.createElement('img', { className: 'card-img-top', src: "img/members/" + extractFirstName(person.length == 3 ? person[2] : person[0]) + ".jpg", alt: '' }),
      React.createElement(
        'div',
        { className: 'card-body' },
        React.createElement(
          'h4',
          { className: 'card-title' },
          person[0]
        ),
        React.createElement(
          'p',
          { className: 'card-text' },
          person[1]
        )
      )
    )
  );
});

//class for rendering the actual members

var Members = function (_React$Component) {
  _inherits(Members, _React$Component);

  function Members(props) {
    _classCallCheck(this, Members);

    return _possibleConstructorReturn(this, (Members.__proto__ || Object.getPrototypeOf(Members)).call(this, props));
  }

  _createClass(Members, [{
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

  return Members;
}(React.Component);

//React rendering the board members


ReactDOM.render(React.createElement(Members, null), document.getElementById('members_container'));