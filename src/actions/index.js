export const FETCH_GITHUB = 'FETCH_GITHUB';

export const fetchGithub = () => {
 const token = 'e2df78c12aeb7efa365d550b48236a74c5e77a9e';
      fetch('https://api.github.com/users/Lcanada', {
      headers: {
        Authorization: `token ${token}`
     }
    }).then(res => res.json()).then(json => console.log(json))

    return {
        type: FETCH_GITHUB,
        payload: token
      };
    }
