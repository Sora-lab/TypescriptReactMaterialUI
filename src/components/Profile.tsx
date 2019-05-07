import React from "react";
import Grid from '@material-ui/core/Grid';

interface Props {
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
}

const Profile = (props:Props) => {
    const profile = props.userProfile;
    let affiliations = {title: '',
                        organization: '',
                        started: ''};
    let researchInterests=[];
    if(profile.affiliations[0]){
        affiliations = profile.affiliations[0];
        researchInterests = profile.researchInterests
    }
    return(
        <div>
            <div><img src="https://www.gravatar.com/avatar/4210d8e14db97e647b8cedc9fa3c4119?s=500&amp;r=pg&d=monsterid"></img></div>
            <div><p>Position</p> <p>Title:</p>{ profile.jobTitleOther}<h4>organization:</h4>{ profile.organization} <h4>Department:</h4>{ profile.department}</div>
            <div><p>Research Interests</p><ul><li>{researchInterests[0]}</li><li>{researchInterests[1]}</li><li>{researchInterests[2]}</li></ul></div>
            <div><h2>Affiliations</h2> As { affiliations.title } ({ affiliations.started }-present) at {affiliations.organization}</div>
            <div><h2>Research or personal statement</h2> { profile.researchStatement }</div>
            <div><h2>Research or personal statement</h2> { profile.researchStatement }</div>
        </div>
    )
}


export default Profile;