import React, { Component } from "react";
import { fetchProfile, fetchOrgsOfUser, fetchLoggedInUser } from '../utils/fetch';
import ProfileTabs from '../components/ProfileTabs';

interface narrativeData {
    wsID: string; 
    name: string; 
    last_saved: string;
    narrative_detail: object;
}

interface org {
    name: string; url: string;
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
    organizations: Array<org>;
};

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
            narratives: [],
            organizations: [],
        }
    }
    componentDidMount(){
        console.log("id", window.location.search.replace('?', ''))
        const userID = window.location.search.replace('?', '');
        fetchProfile(userID)
        .then((response:{version: string, result:Array<any>})=>{
            console.log('fetchProfile', response)
            let res = response.result[0][0];
            this.setState({
                userName: {
                    name: res['user']['realname'],
                    userID: res['user']['username']
                },
                userProfile: response.result[0][0]['profile']['userdata'],
            })
        });

        fetchOrgsOfUser(userID)
        .then((response:Array<org>)=>{
            console.log('fetchOrgsOfUser', response)
            this.setState(
                {organizations: response}
            )
        })

        fetchLoggedInUser();
    }

    componentDidUpdate(prevProps:any, prevState:any){
        console.log("hello", prevProps, prevState, this.state)
        if(this.state === prevState){
            return
        }
    }
    
    render(){
        return(
            <div>
                <ProfileTabs data={this.state}/>
            </div>
        )
    }
}

export default Home;