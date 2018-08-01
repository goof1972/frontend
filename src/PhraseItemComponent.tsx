import * as React from 'react';
import * as Actions from './Actions';
import './App.css';
import IPhraseListItemInterface from './PhraseItemInterface';




export default class PhraseItemComponent extends React.Component<IPhraseListItemInterface, {}> {


    
    constructor(props: IPhraseListItemInterface) {
        super(props);
    }


    public  render() {

        return (
            
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.phrase}</td>
                <td><button type="button" className="btn btn-secondary">Delete</button></td>
            </tr>
            
        );
    }

    public deleteClick(id: string) {
         Actions.remove(id);
    }
}


