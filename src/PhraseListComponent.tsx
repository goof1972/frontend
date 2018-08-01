import * as React from 'react';
import * as Actions from './Actions';
import './App.css';
// import PhraseItemComponent from './PhraseItemComponent';

type myProps = {};
type myState = { phrases: any };

export default class PhraseListComponent extends React.Component<myProps, myState> {

  constructor(props: any) {
    super(props);
    this.state = {
      phrases: { "phrases": [] }
    }
  }

  public componentWillMount() {
    this.setState({
      phrases: Actions.read()
    });
  }

  public render() {

    return (
      <div>
        <table className="table  table-hover">
          <tbody>
            <tr>
              <th scope="col">Line Number</th>
              <th scope="col">Phrase</th>
              <th scope="col" />
            </tr>
            {this.state.phrases.phrases.map((phrase: any) => {
              return (<tr key={phrase.id}>
                <td>{phrase.id}</td>
                <td>{phrase.phrase}</td>
                <td><button type="button" className="btn btn-secondary" onClick={this.deleteClick.bind(this, phrase.id)} >Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }


  public deleteClick(id: string) {
    
    if (Actions.remove(id)) {
      let pos: number = -1;

      for (let x: number = 0; x < this.state.phrases.phrases.length; x++) {
        if (this.state.phrases.phrases[x].id === id) {
          pos = x;
          break;
        }
      }

      let modifiedPhrases: any[] = this.state.phrases.phrases;
      modifiedPhrases.splice(pos, 1);
      
      this.setState({
        phrases: { "phrases": modifiedPhrases }
      })
    }
  }
}


