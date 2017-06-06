import xhr from './utils/xhr';

const GET_SECTOR_URL = '/api/sector/1917';

window.xhr = xhr;

export default {
  getSector() {
    return new Promise((resolve, reject) => {
      xhr({
        url: GET_SECTOR_URL,
        success: resolve,
        error: reject,
      });
    });
  },
};
