import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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

interface State {
    foo: number;
}
class CardProfile extends React.Component <Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            foo: 0,
        }
    }

    render(){
        return(
            <Card className='profile'>
                <CardHeader className='profile-card-header' title='title' subheader='but not sub title'/>
                <CardMedia title="gavator" image="https://www.gravatar.com/avatar/4210d8e14db97e647b8cedc9fa3c4119?s=500&amp;r=pg&d=monsterid" />
                <CardContent>
                    I didn't think I'd miss Grommet Box, but now using this, I really miss Box component.
                </CardContent>
            </Card>
        )
    }
}

export default CardProfile;