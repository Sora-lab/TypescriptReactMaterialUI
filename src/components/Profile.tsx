import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import Paper from '@material-ui/core/Paper';

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

const Profile = (props: Props) => {
    const profile = props.userProfile;

    let affiliations = [];
    let researchInterests = [];
    if (profile.affiliations[0]) {
        affiliations = profile.affiliations;
        console.log("how afflications look now?", affiliations)
    }
    if (profile.researchInterests) {
        researchInterests = profile.researchInterests
    }
    const click = () => {
        console.log("hello")
    }

    // const helperTexttext = 'label is props.userName.name'
    const helperTexttext = ' '
    return (
        <Grid container justify="flex-start" direction="row">
            <Grid alignContent="flex-start" alignItems="flex-start" 
                    id="main-user-info" container direction="row" xs={3}>
                <Paper className="margin-8px padding-8px">
                    <Grid container direction="row">
                        <Grid item xs={12}>
                            <img className="margin-8px" width="75%" alt="user profile picture" src="https://www.gravatar.com/avatar/4210d8e14db97e647b8cedc9fa3c4119?s=500&amp;r=pg&d=monsterid" />
                            <TextField
                                id="full-name" label="Full name"
                                className="dispaly-block margin-8px"
                                fullWidth multiline
                                defaultValue={props.userName.name}
                                helperText={helperTexttext} InputProps={{ readOnly: true, disabled: false, }}
                                value={props.userName.name}
                            />
                            <TextField
                                id="job-title" label="Job title"
                                className="dispaly-block margin-8px"
                                fullWidth multiline
                                defaultValue="Job title"
                                helperText={helperTexttext}
                                InputProps={{ readOnly: true, disabled: false, }}
                                value={props.userProfile.jobTitleOther}
                            />
                            <TextField
                                id="organizations" label="Organizaion"
                                className="dispaly-block margin-8px"
                                fullWidth multiline
                                defaultValue="Oragnization"
                                helperText={helperTexttext}
                                InputProps={{ readOnly: true, disabled: false, }}
                                value={props.userProfile.organization}
                            />
                            <TextField
                                id="departmenet" label="Department"
                                className="dispaly-block margin-8px"
                                fullWidth multiline
                                defaultValue="Department"
                                helperText={helperTexttext}
                                InputProps={{ readOnly: true, disabled: false, }}
                                value={props.userProfile.department}
                            />
                        </Grid>
                        <EditIcon onClick={click} />
                        <SaveIcon onClick={click} />
                    </Grid>
                </Paper>
                <Paper className="margin-8px padding-8px">
                    <p>Location</p>
                    <TextField
                        id="country" label="Country"
                        className="dispaly-block margin-8px"
                        fullWidth multiline
                        defaultValue="Country"
                        helperText={helperTexttext}
                        InputProps={{ readOnly: false, disabled: false, }}
                        value={props.userProfile.country}
                    />
                    <TextField
                        id="city" label="City"
                        className="dispaly-block margin-8px"
                        fullWidth multiline
                        defaultValue="Country"
                        helperText={helperTexttext}
                        InputProps={{ readOnly: false, disabled: false, }}
                        value={props.userProfile.city}
                    />
                    <TextField
                        id="state" label="State/Province/Region"
                        className="dispaly-block margin-8px"
                        fullWidth multiline
                        defaultValue="State/Province/Region"
                        helperText={helperTexttext}
                        InputProps={{ readOnly: false, disabled: false, }}
                        value={props.userProfile.state}
                    />
                    <TextField
                        id="postal-code" label="PostalCode"
                        className="dispaly-block margin-8px"
                        fullWidth multiline
                        defaultValue="Postal code"
                        helperText={helperTexttext}
                        InputProps={{ readOnly: false, disabled: false, }}
                        value={props.userProfile.postalCode}
                    />
                </Paper>
            </Grid>
            <Grid id="other-user-info" direction="row" alignContent="flex-start" alignItems="flex-start" container item xs={9}>
                <Grid item xs={4}>
                    <Paper className="padding-8px margin-8px">
                        <p>Research Interests</p><ul>
                            {researchInterests.map(interest => (
                                <li>{interest}</li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className="padding-8px margin-8px">
                        <p>Associated Organizations</p><ul>
                            {researchInterests.map(interest => (
                                <li>{interest}</li>
                            ))}
                        </ul>
                    </Paper>
                </Grid>
                <Grid>
                    <Paper className="padding-8px margin-8px">
                        <p>Research or personal statement</p>{profile.researchStatement}
                    </Paper>
                    <Paper className="padding-8px margin-8px width-100">
                        <p>Past positions</p>
                        {affiliations.map(position => (
                            <div className="past-positions">
                                <TextField
                                    label="Job Title"
                                    className="margin-16px"
                                    defaultValue="Job Title"
                                    margin="normal"
                                    helperText={helperTexttext}
                                    InputProps={{ readOnly: false, disabled: false, }}
                                    value={position.title}
                                />
                                <TextField
                                    label="Organization"
                                    defaultValue="Organization"
                                    margin="normal"
                                    className="margin-16px"
                                    helperText={helperTexttext}
                                    InputProps={{ readOnly: false, disabled: false, }}
                                    value={position.organization}
                                />
                                <TextField
                                    label="Years in position"
                                    defaultValue="start and end year"
                                    margin="normal"
                                    className="margin-16px"
                                    helperText={helperTexttext}
                                    value={position.started +  " - " + position.ended}
                                />
                            </div>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Profile