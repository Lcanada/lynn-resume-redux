export const FETCH_GITHUB = 'FETCH_GITHUB';



export const fetchGithub =
const token = 'token here';
      fetch('https://api.github.com/user/lcanada', {
      headers: {
        Authorization: `token ${token}`
     }
    }).then(res => res.json()).then(json => console.log(json))


    //console.log('Request:', request);
    return{
        type: FETCH_GITHUB,
        payload: token
      };
    }
