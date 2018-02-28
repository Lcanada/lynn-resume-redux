export const FETCH_GITHUB = 'FETCH_GITHUB';



export const fetchGithub = 
const token = '8a6992c51c5eafcd01ce9c6a55cee060ae664512';
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
