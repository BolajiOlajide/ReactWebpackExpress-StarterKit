// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const details = [
    {
        id: 4,
        username: 'Chuks',
        age: 20
    },
    {
      id: 5,
      username: 'Louis',
      age: 71
    }
];

class DetailApi {
    static getAllDetails() {
        console.log('Here');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], details));
            });
        });
    }

    static saveDetail(detail) {
        detail = Object.assign({}, detail); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                details.push(detail);
                resolve(detail);
            });
        });
    }
}

export default DetailApi;