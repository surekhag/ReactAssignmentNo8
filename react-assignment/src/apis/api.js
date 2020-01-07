import axios from 'axios';

export function loginToSiteApi() {
    const getMenuApi =`http://www.mocky.io/v2/5e1443c92d00004f00166e57`;    
    return axios.get(getMenuApi);
  }

