import Request from 'superagent';

const TIMEOUT = 10000;

export default {

  get (path) {
    const url = `http://local.postnote.io:3000/api${path}`;

    return new Promise((resolve, reject) => {
      Request
        .get(url)
        .set('Accept', 'application/json')
        .timeout(TIMEOUT)
        .end((err, res) => {
          if (err) {
            reject(path);
          } else {
            resolve(res.body);
          }
        });
    })
    .catch((path) => {
      console.error(`error resolving GET '${url}'`);
    });
  }

}
