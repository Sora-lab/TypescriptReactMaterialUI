const token = 'WOBB7QB7YW7V6ZHXPH3CJVDX2Y3XZA5O'

/**
 * fetch profile from ID 
 * @param {string} id  profile ID
 */
export const fetchProfile = (id)=>{
    console.log("fetch id", id)
    return fetch('http://localhost:5000/fetchUserProfile/'+id, {
        method: 'GET',
        json: true
    })
    .then((response) => response.json())
    //.then((response) => {console.log(response.toString())})
    .catch(console.error())
}

/** 
 * Fetch Narratives
 * @param {string} param 
 * @param {string} token 
 *  */
export const fetchNarratives = (param, token) => {
    console.log("fetchNarratives para,", param)
    return fetch('http://localhost:5000/narrative_list/'+param+'/'+token, {
        method: 'GET',
        json: true
    })
    .then((response) => response.json())
    //.then((response) => console.log("fetchNarratives", response))
    .catch(console.error())
}

// These are not using python. 
// Why? I already made this once and I'm too lazy to make python version for now.
// TODO: AKIYO - Bring this to BEFFE
// Fetch organizations that a user is associated with
export const fetchOrgsOfUser = (id)=>{
    return fetchOrgs(id).then((orgs) => {
        console.log('orgs', orgs)
        // @ param {orgs} array of org names
        const arr = [];
        orgs.forEach((org) => {
            let orgNameUrl = {name: org.name, url: window.location.origin + "/#org/" + org.id }
            arr.push(orgNameUrl);
        });
        return arr;
    });
}

/**
 * fetch organization details.
 * @param {string} org  group ID
 */
const fetchGroupInfo = (org) => {
    const groupUrl = 'https://ci.kbase.us/services/groups/group/' + org.id;
    return fetch(groupUrl, {
        method: 'GET',
        mode: 'cors',
        json: true,
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => {
        return response;
    })
    .catch((error) => console.error('Error while fetching group info:', error));
}

/**
 * fetch organizations that user is associated.
 * it identifies user from the token
 * @param {string} token  authorization token
 */
const fetchOrgs = (id) => {
    const groupUrl = 'https://ci.kbase.us/services/groups/member/';
    return fetch(groupUrl, {
        method: 'GET',
        mode: 'cors',
        json: true,
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response) => {
        return Promise.all(response.map((group) => fetchGroupInfo(group)));
    })
    .then((groupInfos) => {
        // groupInfos is an array of all the groups the current user is in
        // Find all the groups that the profile user is a member, admin, or owner of.
        const userGroups = groupInfos.filter((group) => {
            const allPeople = [group.owner].concat(group.admins).concat(group.members);
            const memberOf = allPeople.filter((m) => {
                return m.name === id;
            });
            return memberOf.length;
        });
        return userGroups;
    })
    .catch((error) => console.error('Error while fetching groups associated with the user:', error));
}

export const fetchLoggedInUser = () => {
    const cookies = window.document.cookie;
    const cookie  = cookies.slice(cookies.search('kbase_session'));
    const currentToken = cookie.slice(cookie.search('=')+1, cookie.search(';'));
    console.log('Token', currentToken)
    const authMeUrl = "https://ci.kbase.us/services/auth/me";
    return fetch(authMeUrl, {
        method: 'GET',
        mode: 'cors',
        json: true,
        headers: {
            Authorization: 'WOBB7QB7YW7V6ZHXPH3CJVDX2Y3XZA5O',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((response)=>{console.log("headers", response.user)})
}