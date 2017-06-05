import * as _ from 'lodash';

export default function (opts) {
  const request = new XMLHttpRequest();
  const DEFAULT_ACCEPT = 'application/json';
  const DEFAULT_CONTENT_TYPE = 'application/json; charset=utf-8';
  const options = _.assign({
    url: '',
    method: 'GET',
    accept: DEFAULT_ACCEPT,
    contentType: DEFAULT_CONTENT_TYPE,
    data: null,
  }, opts);

  request.onload = function load() {
    if (this.status >= 200 && this.status < 400) {
      const data = /json/.test(options.accept) && this.response !== '' ? JSON.parse(this.response) : this.response;
      // Success
      if (typeof options.success === 'function') {
        if (options.returnChecksum) {
          options.success({
            data,
            checksum: this.getResponseHeader('checksum'),
          });
        } else {
          options.success(data);
        }
      }
    } else {
      // We reached our target server, but it returned an error
      options.error(this.response);
    }
  };

  request.onerror = function error() {
    // There was a connection error of some sort
    if (typeof options.error === 'function') {
      options.error(new Error(`XMLHttpRequest Error: ${this.statusText}`));
    }
  };

  request.open(options.method, options.url);
  request.setRequestHeader('Accept', options.accept);
  request.setRequestHeader('Content-type', options.contentType);

  // Add any additional headers
  if (options.headers) {
    const keys = Object.keys(options.headers);
    const values = Object.values(options.headers);

    for (let i = 0, l = keys.length; i <= l; i += 1) {
      request.setRequestHeader(keys[i], values[i]);
    }
  }

  request.send(options.data);
}
