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
          star: {
            name: 'Perdurabo',
            type: 'Red giant',
          },
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
          star: {
            name: 'Krumine',
            type: 'G2V',
            radius: 1.127,
            mass: 1.07,
            luminosity: 1.219,
          },
          stellarBodies: [
            {
              name: 'Krumine I',
              type: 'Terrestrial World',
              atmosphere: 'Corrosive',
              temperature: 'Burning',
              biosphere: 'None',
              gravity: 0.904,
              radius: 0.949,
              population: 0,
              moons: 0,
            }, {
              name: 'Gateway',
              type: 'Terrestrial World',
              atmosphere: 'Breathable',
              temperature: 'Warm/Temperate',
              biosphere: 'Miscible',
              gravity: 1.102,
              radius: 1.129,
              population: 3215000,
              techLevel: 4,
              moons: 1,
              extendedInfo: {
                tags: [
                  {
                    name: 'Forbidden Tech',
                    description: 'The maltech remnants remaining in the bunker sites',
                  }, {
                    name: 'Pilgrimage Site',
                    description: 'The orbital jump gate',
                  },
                ],
                description: 'One thousand years ago, Gateway was the only world in the sector that rated a jump gate. Most of the later colonization of the sector came through Gateway, and countless estates and pleasure-palaces were erected on the tropical shores and high mountains of the world. When the Scream came, Gateway suffered a brutal population crash as bulk food transports could no longer reach the planet. In the chaos, countless wealthy and powerful citizens fortified their homes with supplies and automated defenses in hope of riding out the catastrophe. Many never emerged. Today, the Salvage Board issues permits to explore these sites to suitably brave souls. Oversight is necessary because some of these sites engaged in extremely dangerous maltech experimentation in a desperate attempt to restore the jump gate and the maddened psychics that once powered it. Modern psychic training on Gateway is done at the Perfect Mirror Academy, founded by a refugee from the Temple of the Clear Sky on Tecalco. The methods of the Academy are strictly orthodoxtoo orthodox for some. A sect of renegade psychics seeks to use some of the ancient experimentation to fuel greater power than the Academy offers, no matter the cost to them or those around them.',
              },
            }, {
              name: 'Asteroid Belt',
              type: 'Asteroid Belt',
            }, {
              name: 'Krumine III',
              type: 'Gas Giant',
              gravity: 1.065,
              radius: 9.449,
              population: 0,
              moons: 42,
              notes: 'Extensive ring system',
            }, {
              name: 'Krumine IV',
              type: 'Ice Giant',
              gravity: 1.14,
              radius: 3.883,
              population: 0,
              moons: 65,
            },
          ],
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
