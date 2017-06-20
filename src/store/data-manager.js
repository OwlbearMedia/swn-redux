import xhr from './utils/xhr';

const SECTOR_URL = '/api/sector';
const AUTHENTICATE_URL = '/api/authenticate';

export default {
  getSector() {
    return new Promise((resolve, reject) => {
      xhr({
        url: `${SECTOR_URL}/1917`,
        success: resolve,
        error: reject,
      });
    });
  },

  getSpacebook() {
    return new Promise((resolve, reject) => {
      xhr({
        url: '/api/spacebook',
        success: resolve,
        error: reject,
      });
    });
  },

  updateSector(data) {
    return new Promise((resolve, reject) => {
      xhr({
        url: `${SECTOR_URL}/${data._id}`,
        method: 'PUT',
        data: JSON.stringify(data),
        success: resolve,
        error: reject,
      });
    });
  },

  authenticate(data) {
    return new Promise((resolve, reject) => {
      xhr({
        url: AUTHENTICATE_URL,
        method: 'POST',
        data: JSON.stringify(data),
        success: resolve,
        error: reject,
      });
    });
  },
};
