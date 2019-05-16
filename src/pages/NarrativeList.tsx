import React, { Component } from "react";
import { fetchNarratives } from '../utils/fetch';

interface State {
    publicNarratives:  Array<object>;
    publicNarrativesFetchedTime: number;
    sharedNarratives: Array<object>;
    sharedNarrativesFetchedTime: number;
    myNarratives: Array<object>;
    myNarrativesFetchedTime: number;
    token: string;
}

class NarrativeList extends Component<any, State>{
    constructor(props:any){
        super(props);
        this.state = {
            publicNarratives: [],
            publicNarrativesFetchedTime: 1557970001257,
            sharedNarratives: [],
            sharedNarrativesFetchedTime: 1557970001257,
            myNarratives: [],
            myNarrativesFetchedTime: 1557970001257,
            token: '5AM5QHKCXTK7YJCPB3DADVU34BFHVH3Q'
        }
    };

    componentDidMount(){
        // fetch all of the public narratives.
        fetchNarratives('public', this.state.token)
        .then((response:Array<any>)=>{
            console.log('fetchNarratives Response', response)
            this.setState(
                {publicNarratives: response, publicNarrativesFetchedTime: Date.now()}
            )
        })

        // fetch all of the shared narratives for the user.
        fetchNarratives('shared', this.state.token)
        .then((response:Array<any>)=>{
            console.log('fetchNarratives Response', response)
            this.setState(
                {publicNarratives: response, sharedNarrativesFetchedTime: Date.now()}
            )
        })
        // fetch user's narratives.
        fetchNarratives('mine', this.state.token)
        .then((response:Array<any>)=>{
            console.log('fetchNarratives Response', response)
            this.setState(
                {publicNarratives: response, myNarrativesFetchedTime: Date.now()}
            )
        })
    }
    
    render(){
        return(
            <div>
            <p>hahah</p>
            </div>
        )
    }
}
    
export default NarrativeList;
