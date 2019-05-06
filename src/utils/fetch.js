export const fetchProfile = ()=>{
    return fetch('http://localhost:5000/fetchUserProfile', {
        method: 'GET',
        json: true
    })
    .then((response) => response.json())
    .catch(console.error())
}

export const fetchNarratives = ()=>{
    return fetch('http://localhost:5000/narrative_list', {
        method: 'GET',
        json: true
    })
    .then((response) => response.json())
    .catch(console.error())
}

