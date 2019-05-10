import React, { Component } from "react";
import { fetchProfile, fetchNarratives} from '../utils/fetch';
import ProfileTabs from '../components/ProfileTabs';

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}
interface State {
    tabTitle: Array<string>;
    userName: {
        name: string;
        userID: string;
    };
    userProfile: {
        organization: string;
        department: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        affiliations: Array<any>;
        researchStatement: string;
        jobTitle: string;
        jobTitleOther: string;
        researchInterests: Array<any>;
    };
    narratives: Array<narrativeData>;
}
class Home extends Component<any, State> {
    constructor(props: any){
        super(props);
        this.state = {
            tabTitle: ['Profile', 'Narratives', 'Collaborator Network', 'Search users'],
            userName: {
                name: '',
                userID: '',
            },
            userProfile: {
                organization: '',
                department: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                affiliations: [],
                researchStatement: '',
                jobTitle: '',
                jobTitleOther: '',
                researchInterests: [],
            },
            narratives: []
        }
    }
    componentDidMount(){
        fetchProfile()
        .then((response:{version: string, result:Array<any>})=>{
            let res = response.result[0][0];
            this.setState({
               // tabTitle: [res['user']['realname'],'Narratives', 'Collaborator Network', 'Search other users'],
                userName: {
                    name: res['user']['realname'],
                    userID: res['user']['username']
                },
                userProfile: response.result[0][0]['profile']['userdata'],
            })
        });
        fetchNarratives()
        .then((response:Array<any>)=>{
            console.log('fetchNarratives', response)
            this.setState(
                {narratives: response}
            )
        })
    }

    componentDidUpdate(prevProps:any, prevState:any){
        console.log("hello", prevProps, prevState, this.state)
        if(this.state === prevState){
            return
        }
    }
    
    render(){
        return(
            <ProfileTabs data={this.state}/>
        )
    }
}

export default Home;