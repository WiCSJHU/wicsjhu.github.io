'use strict';

//change this to the desired number of columns for displaying board members
const num_columns = 3;

//follow this format for adding members
//if a member has a custom JPG image name, add an additional argument with just the name of the image! For example, for viviantsai.jpg, add the additional argument 'viviantsai'
const members=[
['Vivian Tsai',
'Chair',
'Currently obsessed with <a href="http://happenapps.com/#quiver" target="_blank" rel="nofollow">Quiver</a>; parchment paper with grid lines; the card game <a href="https://en.wikipedia.org/wiki/Set_(card_game)" target="_blank" rel="nofollow">Set</a>; and literary candles.',
'viv@jhu.edu']

,['Adriana Donis Noriega',
'Vice Chair',
'Adriana is a senior computer science major. She loves pink and ice cream. Favorite coding language: Python. <i>#teamVim</i>',
'adonisn1@jhu.edu']

,['Dorothy Hu',
'Treasurer',
'Computer Science Combined BS/MS student at Johns Hopkins, expected to graduate in May 2020.',
'yhu44@jhu.edu']


,['Cindy Ge',
'Secretary',
'Avid lover of dogs, Korean BBQ, and long walks on the beach.',
'cge2@jhu.edu']

,['Claudia Moncaliano',
'Events Chair',
'Exploring CS through projects, Python, and puns. <i>#rushCS</i>',
'claudia@jhu.edu']

];

//takes first and last name and outputs just the first name
function extractFirstName(nameString)
{
   const nameList=nameString.split(' ');
   return nameList[0].toLowerCase();
}

//takes the 2D array of members and generates a list of HTML blocks for rendering
const memArray=members.map((person)=>

        <div data-aos= "flip-down"  className="col-sm-3 mb-4">
          <div className="card h-100 text-center">
            <img className="card-img-top" src={"img/members/"+extractFirstName(person.length==5 ? person[4] : person[0])+".jpg"} alt=""/>
            <div className="card-body">
              <h5 className="card-title">{person[0]}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{person[1]}</h6>
              <div dangerouslySetInnerHTML={{__html: '<p className="card-text" >'+person[2]+'</p>'}}>

              </div>
            </div>
            <div className="card-footer">
              <a href={"mailto:"+person[3]}>{person[3]}</a>
            </div>
          </div>
        </div>
   );

//class for rendering the actual members
class BoardMembers extends React.Component {
  constructor(props) {
    super(props);
  }

  createList() {
    let list = [];

    // generates rows of members
    for (let i = 0; i < members.length; i+=num_columns) {

        var row=[];

        //generating a row of members
        for(let j=0; j<num_columns; j++)
            if(i+j<members.length)
                row.push(memArray[i+j]);

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
ReactDOM.render(<BoardMembers/>, document.getElementById('exec_board_container'));