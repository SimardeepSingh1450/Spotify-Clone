//Authorization:
export const authEndpoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/";
const clientId="6589992edb3c48ee80cf8b805dc41956";//Client ID generated from Spotify for Developers

const scopes=[//Imported from Authorization Scopes from Spotify for Developers->These scopesare just the permissions granted by Spotify to perform a function which asks the user about its account agreements
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl=()=>{
    return window.location.hash//Way to extract the Access Token from the URL
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
        
    },{});
    
}


export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;//We will get Access Token in URL after agreement with the authorize Link.