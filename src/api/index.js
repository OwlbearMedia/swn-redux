export default {
  getSector() {
    return Promise.resolve({
      id: 1917,
      name: 'Valhalla Beta',
      systems: [{
        column: 1,
        row: 3,
      }, {
        column: 3,
        row: 6,
      }],
    });
  },
};
