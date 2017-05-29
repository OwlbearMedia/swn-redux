export default {
  getSector() {
    return Promise.resolve({
      id: 1917,
      name: 'Valhalla Beta',
      systems: {
        '0001': {
          name: '',
          explored: false,
        },
        '0003': {
          name: '',
          explored: false,
        },
        '0005': {
          name: '',
          explored: false,
        },
        '0006': {
          name: '',
          explored: false,
        },
        '0008': {
          name: '',
          explored: false,
        },
        '0101': {
          name: '',
          explored: false,
        },
        '0203': {
          name: 'Hard Light',
          explored: true,
        },
        '0204': {
          name: 'Polychrome',
          explored: true,
        },
        '0206': {
          name: 'Hephaestus',
          explored: true,
        },
        '0207': {
          name: 'Gateway',
          explored: true,
        },
        '0301': {
          name: '',
          explored: false,
        },
        '0305': {
          name: 'Giedi',
          explored: true,
        },
        '0306': {
          name: 'Lemuria',
          explored: true,
        },
        '0403': {
          name: '',
          explored: false,
        },
        '0404': {
          name: '',
          explored: false,
        },
        '0407': {
          name: 'Sibyl',
          explored: true,
        },
        '0409': {
          name: '',
          explored: false,
        },
        '0502': {
          name: '',
          explored: false,
        },
        '0505': {
          name: 'Harmonious Repose',
          explored: true,
        },
        '0508': {
          name: '',
          explored: false,
        },
        '0601': {
          name: '',
          explored: false,
        },
        '0602': {
          name: '',
          explored: false,
        },
        '0604': {
          name: '',
          explored: false,
        },
        '0700': {
          name: '',
          explored: false,
        },
        '0703': {
          name: '',
          explored: false,
        },
        '0708': {
          name: '',
          explored: false,
        },
      },
      charts: [
        {
          id: 1917,
          color: 'navy',
          name: 'Lemuria Office of Interstellar Survey Charts',
          playerVisible: true,
          drillRoutes: [
            { pointA: '0203', pointB: '0204' },
            { pointA: '0204', pointB: '0205' },
            { pointA: '0205', pointB: '0305' },
            { pointA: '0205', pointB: '0206' },
            { pointA: '0207', pointB: '0306' },
            { pointA: '0206', pointB: '0306' },
            { pointA: '0206', pointB: '0305' },
            { pointA: '0306', pointB: '0407' },
            { pointA: '0206', pointB: '0207' },
            { pointA: '0305', pointB: '0406' },
            { pointA: '0306', pointB: '0406' },
            { pointA: '0407', pointB: '0406' },
            { pointA: '0406', pointB: '0505' },
          ],
        },
      ],
    });
  },
};
