import { fetchNarratives } from './fetch';

/**
 * caching narratives in JS maps for faster look up with a user ID. 
 * 
 * Search result as of "FetchedTime" is returned 
 * 
 * 
 */


// save all the narrative 
let fetchNarrativesTimeStamp: number = 0;
let myNarratives: Array<narrativeData> = [];
let token: string = 'WOBB7QB7YW7V6ZHXPH3CJVDX2Y3XZA5O';
let publicNarrativesMap = new Map;
let sharedNarrativesMap = new Map;
let NarrativeMap: Map<string, Array<narrativeData>> = new Map;

interface narrativeData {
    wsID: string;
    name: string;
    last_saved: string;
    narrative_detail: narrativeDetail;
}

interface narrativeDetail{
    creator: string;
    description: string;
    name: string;
    ws_name: string;
}


// the function to be called to 

export const PublicSharedNarrratives = (token:string, option:string, userID:string) => {
    // option can be load/refresh or switch
    // load is when app is initally loading
    // refresh is when refresh list is selected 
    // switch is simply when the rout changes to different user
    // if map already exist and option is switch, then 
    // return map.has(userID) result
    // otherwise fetch, populate the narrativemap, then
    // return map.has(userId) result
    if(option === 'switch' && NarrativeMap.size > 0){
        
        return [ fetchNarrativesTimeStamp, NarrativeMap.get(userID)];
        
    } else {
        fetchNarrativesTimeStamp = Date.now();
        // run fetch to populate narrative map with new time stamp
        publicNarrativesMap = fetchNarratives('public', token)
        .then((response:Array<narrativeData>)=>{
            return mapNarratives(response, NarrativeMap);
        });
        sharedNarrativesMap = fetchNarratives('shared', token)
        .then((response:Array<narrativeData>)=>{
            return mapNarratives(response, NarrativeMap);
        });
        Promise.all([publicNarrativesMap, sharedNarrativesMap]).then(()=>{
            console.log("in  PublicSharedNarrratives", NarrativeMap.get(userID))
            return [ fetchNarrativesTimeStamp, NarrativeMap.get(userID)];
        })
    }

}

// make hash table with users
const mapNarratives = (narrativeList:Array<narrativeData>, map:Map<string, Array<narrativeData>>) => {
    for(let i=0; i < narrativeList.length; i += 1){
        let narrative = narrativeList[i];
        if(!map.has(narrative['narrative_detail']['creator'])){
            map.set(narrative['narrative_detail']['creator'], [narrative]);
        } else {
            // map.get() returns 'undefined' when the key cann't be found. 
            // it needs a type check within a block = { }
            // (meaning the if statement and logic in it is ignored)
            // for typescript to know 'undefined' is not passed to
            // arr.push(), thus below type check is needed.
            let arr= map.get(narrative['narrative_detail']['creator']);
            if(typeof arr !== "undefined"){
                arr.push(narrative);
                map.set(narrative['narrative_detail']['creator'], arr);
            } else {
                console.error("undefined narrative shouldn't be in this array!")
            }
        }
    }
    console.log('mapNarratives', map)
    return map;
}


// mine
export const userNarratives = () => {
    return fetchNarratives('mine', token)
    .then((response:Array<any>)=>{
        //console.log('fetchNarratives Response', response)
        myNarratives = response;
    })
}
