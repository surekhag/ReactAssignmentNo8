import axios from 'axios';

export function loginToSiteApi() {
    const getMenuApi =`http://www.mocky.io/v2/5e12e1733100003600d47427`;
    console.log(axios.get(getMenuApi));
    return axios.get(getMenuApi);
  }