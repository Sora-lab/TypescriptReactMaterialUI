import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardProfile from './CardProfile';

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}

interface Props {
    data: {
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
}
interface State {
    activeTab: number;
}

class ProfileTabs extends React.Component <Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            activeTab: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event:any, value:number)=>{
        console.log(value)
        this.setState({activeTab: value})
    }
    render(){
        const gutter = 8;
        let data = this.props.data;
        console.log(this.state.activeTab)
        return (
            <div id="profile-tabs"> 
                <Tabs value={this.state.activeTab} onChange={this.handleChange}>
                    <Tab icon={<FontAwesomeIcon icon="user" />} label={data.tabTitle[0]} />
                    <Tab icon={<FontAwesomeIcon icon="file-code" />}label={data.tabTitle[1]} />
                    <Tab icon={<FontAwesomeIcon icon="users" />}label={data.tabTitle[2]} />
                    <Tab icon={<FontAwesomeIcon icon="search" />} label={data.tabTitle[3]} />
                    <Tab icon={<FontAwesomeIcon icon="id-card" />}label='Card is not great' />
                    {/* <Narratives narratives={data.narratives}/> */}
                </Tabs>
                <div className="container">
                    { this.state.activeTab === 4 && <CardProfile userName={data.userName} userProfile={data.userProfile} />}
                </div>
            </div>    
        )
    }
}
export default ProfileTabs;