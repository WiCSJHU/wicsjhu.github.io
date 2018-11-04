'use strict';

//change this to the desired number of columns for displaying board members
const num_columns = 4;

//follow this format for adding members
//if a member has a custom JPG image name, add an additional argument with just the name of the image! For example, for viviantsai.jpg, add the additional argument 'viviantsai'
const members = [

  ['Mia Boloix',
    'Sophomore CS/Math double major; enjoys all things vegan and is most definitely #teamVim.']

  , ['Camila Camacho',
    'Camila is the vice chair of ACM and works for the Hopkins IT department on JaySquad.']

  , ['Coco Li',
    'Coco is a junior studying cognitive science and computer science; can be easily made happy with food.']

  , ['Rena Liu',
  'CS frosh currently curious about blockchain and political theory. Doesn’t really want to take a side, but uses emacs at the moment.']

  , ['Aubin Lohier',
  'CS sophomore, from NYC (QUEENS); enjoys Java, coffee, and not burning his kitchen down when he cooks.']

  , ['Julia Oppenheim',
    'Junior studying Computer Science and Cognitive Science; passionate about education and avoiding gluten.']

  , ['Bill Watson and Bailey Parker',
  '"We\'re being shipped as a unit. An absolute unit."', "billbailey"]

  , ['Andrew Rojas',
  'Treasurer of ACM, apple eater, bad cook. West coast === best coast']

  , ['Nancy Wang',
  'CS/Econ junior; interested in bridging people + societal barriers. Mostly likes random walks and mangoes.', "nancy"]

  , ['Sara Weill',
  'Sara is a sophomore CS/CE double major interested in cybersecurity; enjoys volunteering locally with APO.']

  , ['Tony Yang',
    'Junior studying CS with an interest in networks; involved in oSTEM and local volunteering; enjoys cooking and is willing to try any food at least once.']

  , ['Evonne Zhu',
    'Evonne is a junior majoring in Computer Science with minors in Music and Film and Media Studies.']

  , ['Aly Kruglak',
    '']

  , ['Hailey Lee',
    '']

  , ['Daya Lu',
    '']

  , ['Natalie Martinez',
    '']

  , ['Madhu Rajmohan',
    '']

  , ['Momo Steele',
    '']

  , ['Gayatri Susarla',
    '']

  , ['Sharmila Tamby',
    '']

  , ['Kristin Yim',
  '']

];

//takes first and last name and outputs just the first name
function extractFirstName(nameString) {
  const nameList = nameString.split(' ');
  return nameList[0].toLowerCase();
}

//takes the 2D array of members and generates a list of HTML blocks for rendering
const memArray = members.map((person) =>

  <div data-aos="flip-down" className="col-sm-3 mb-4">
    <div className="card h-100 text-center">
      <img className="card-img-top" src={"img/members/" + extractFirstName(person.length == 3 ? person[2] : person[0]) + ".jpg"} alt="" />
      <div className="card-body">
        <h4 className="card-title">{person[0]}</h4>
        <p className="card-text">{person[1]}</p>
      </div>
    </div>
  </div>
);

//class for rendering the actual members
class Members extends React.Component {
  constructor(props) {
    super(props);
  }

  createList() {
    let list = [];

    // generates rows of members
    for (let i = 0; i < members.length; i += num_columns) {

      var row = [];

      //generating a row of members
      for (let j = 0; j < num_columns; j++)
        if (i + j < members.length)
          row.push(memArray[i + j]);

      list.push(<div className="row">{row}</div>);
    }
    return list;
  }

  render() {
    return (
      <div>{this.createList()}</div>
    );
  }
}

//React rendering the board members
ReactDOM.render(<Members />, document.getElementById('members_container'));