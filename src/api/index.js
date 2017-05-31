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
          description: 'Perdurabo casts its lethal radiance out from the molten slag-droplets of the inner system to the charred debris that circles at the outer rim. It is monstrously hostile to all living flesh. The radioactivity emitted by the star is enough to burn through ship shielding in a matter of days and the only safety lies in hiding behind the scorched bulk of some lonely stone. Brightside Station, the only settlement, was built here fifty years ago to mine novium, a rare substance vital for the maintenance and upkeep of many pretech manufacturing devices. Recently tombs of an extinct alien species have been found inside some asteroids within the system.',
          explored: true,
          star: {
            name: 'Perdurabo',
            type: 'K5 III Red giant',
            radius: 44.2,
            mass: 1.5,
            luminosity: 518,
          },
          celestialBodies: [
            {
              name: 'Aegis',
              type: 'Dwarf Planet',
              notes: 'An iron-carbon planetoid which shields Brightside Station from the radiation of Perdurabo',
            }, {
              name: 'Brightside Station',
              type: 'Station',
              population: 100,
              techLevel: '4',
              extendedInfo: {
                tags: [
                  {
                    name: 'Local Specialty',
                    description: 'The heavy biotechnical infrastructure produces cheap, advanced cyberware',
                  }, {
                    name: 'Bubble Cities',
                    description: 'The release of The Stain, a bioweapon, on the surface requires settlements to exist within pressurised domes',
                  },
                ],
                description: '',
              },
            },
          ],
        },
        '0204': {
          name: 'Polychrome',
          description: 'In addition to Polychrome, the only inhabited planet, the system has two significant gas giants, Titania and Oberon, and numerous small rocky planetoids in eccentric orbits. There are no other remotely habitable planets in the system. Space traffic is limited to small mining operations in the system asteroid belt and a station in geosynchronous orbit above the Warrens, the capital and only major settlement on Polychrome.',
          explored: true,
          star: {
            name: 'AA-556 "The Sun"',
            type: 'G2V',
            radius: 1.059,
            mass: 1.01,
            luminosity: 1.102,
          },
          celestialBodies: [
            {
              name: 'Polychrome',
              type: 'Terrestrial World',
              atmosphere: 'Invasive toxic',
              temperature: '-15 C to 30 C by season',
              biosphere: 'Trace',
              gravity: 0.98,
              radius: 0.965,
              population: 10768000,
              techLevel: '4+',
              moons: 0,
              extendedInfo: {
                tags: [
                  {
                    name: 'Local Specialty',
                    description: 'The heavy biotechnical infrastructure produces cheap, advanced cyberware',
                  }, {
                    name: 'Bubble Cities',
                    description: 'The release of The Stain, a bioweapon, on the surface requires settlements to exist within pressurised domes',
                  },
                ],
                description: '',
              },
            }, {
              name: 'Asteroid Belt',
              type: 'Asteroid Belt',
              notes: 'There are a few small mining operations',
            }, {
              name: 'Titania',
              type: 'Gas Giant',
              gravity: 2.528,
              radius: 11.209,
              population: 0,
              moons: 67,
            }, {
              name: 'Oberon',
              type: 'Gas Giant',
              gravity: 0.886,
              radius: 4.007,
              population: 0,
              moons: 27,
            },
          ],
        },
        '0206': {
          name: 'Hephaestus',
          description: 'Until recently the Hephaestus system was the primary exporter of raw minerals in the sector due to its unusually dense and mineral rich asteroid belts. Exports have been interrupted due to long simmering tensions which have recently erupted into civil war between the population of Erichthonius and the Spacers who are residents of the asteroid belts and stations and moons of the gas giants, who feel like the Erichthonians are enriching themselves off their labor. Matters have been exacerbated by the interference of other sector powers, with Lemuria supporting the Spacers and Giedi supporting the Erichthonians.',
          explored: true,
          star: {
            name: 'Hephaestus',
            type: 'K1V',
            radius: 0.865,
            mass: 0.907,
            luminosity: 0.502,
          },
          celestialBodies: [
            {
              name: 'Erichthonius',
              type: 'Terrestrial World',
              atmosphere: 'Breathable',
              temperature: 'Warm',
              biosphere: 'Immiscible',
              gravity: 1.321,
              radius: 1.465,
              population: 2256978000,
              techLevel: '4',
              moons: 2,
              extendedInfo: {
                tags: [
                  {
                    name: 'Civil War',
                    description: '',
                  }, {
                    name: 'Heavy Mining',
                    description: '',
                  },
                ],
                description: '',
              },
            }, {
              name: 'Asteroid Belt',
              type: 'Asteroid Belt',
              notes: 'Especially dense with mineral rich asteroids and heavy mining operations',
            }, {
              name: 'Periphetes',
              type: 'Gas Giant',
              gravity: 1.436,
              radius: 8.748,
              population: 1678000,
              moons: 49,
              techLevel: '4',
            }, {
              name: 'Eupheme',
              type: 'Gas Giant',
              gravity: 1.833,
              radius: 10.984,
              population: 1334000,
              moons: 57,
              techLevel: '4',
            }, {
              name: 'Asteroid Belt',
              type: 'Asteroid Belt',
              notes: 'Especially dense with mineral rich asteroids and heavy mining operations',
            }, {
              name: 'Cabeiri',
              type: 'Ice Giant',
              gravity: 1.314,
              radius: 5.213,
              population: 393000,
              moons: 23,
              techLevel: '4',
            },
          ],
        },
        '0207': {
          name: 'Gateway',
          description: 'One thousand years ago, Gateway was the only world in the sector that rated a jump gate. Most of the later colonization of the sector came through Gateway, and countless estates and pleasure-palaces were erected on the tropical shores and high mountains of the world. When the Scream came, Gateway suffered a brutal population crash as bulk food transports could no longer reach the planet. Today, while Gateway is much diminished from its former glory it is a stable and peaceful world and maintains an old pride in its former preeminence.',
          explored: true,
          star: {
            name: 'Apollo',
            type: 'G2V',
            radius: 1.127,
            mass: 1.07,
            luminosity: 1.219,
          },
          celestialBodies: [
            {
              name: 'Orpheus',
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
              techLevel: '4',
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
              name: 'Linus',
              type: 'Gas Giant',
              gravity: 1.065,
              radius: 9.449,
              population: 0,
              moons: 42,
              notes: 'Extensive ring system',
            }, {
              name: 'Ialemus',
              type: 'Ice Giant',
              gravity: 1.14,
              radius: 3.883,
              population: 0,
              moons: 65,
            },
          ],
        },
        '0301': {
          name: 'Zoon',
          explored: true,
          description: 'This system is largely unknown. The only known populated planet is Zoon, a backwards swamp planet and the homeworld of Eeg, who was captured by offworld slavers for their fighting pits. There are no publicly know drill routes.',
          star: {
            name: 'Kappa2 Ceti "The Sun"',
            type: 'G5V',
            radius: 0.95,
            mass: 0.98,
            luminosity: 0.85,
          },
          celestialBodies: [
            {
              name: 'Zoon',
              type: 'Terrestrial World',
              atmosphere: 'Breathable',
              temperature: 'Warm/Temperate',
              biosphere: 'Miscible',
              gravity: 1.023,
              radius: 1.129,
              population: 2345000,
              techLevel: '2',
              moons: 3,
              extendedInfo: {
                tags: [
                  {
                    name: 'Out of Contact',
                    description: 'The natives have been largely out of contact with the greater galaxy since the Scream',
                  }, {
                    name: 'Warlords',
                    description: 'The world is plagued by warlords. Numerous powerful men and women control private armies an constantly fight for supremacy.',
                  },
                ],
                description: 'A backwoods swamp world',
              },
            },
          ],
        },
        '0305': {
          name: 'Giedi',
          explored: true,
          star: {
            name: 'Ares',
            type: 'F8V',
            radius: 1.480,
            mass: 1.27,
            luminosity: 3.57,
          },
          celestialBodies: [
            {
              name: 'Hera',
              type: 'Terrestrial World',
              atmosphere: 'Corrosive',
              temperature: 'Burning',
              biosphere: 'None',
              gravity: 0.897,
              radius: 0.932,
              population: 0,
              moons: 0,
            }, {
              name: 'Giedi Prime',
              type: 'Terrestrial World',
              atmosphere: 'Thick',
              temperature: 'Warm',
              biosphere: 'Hybrid',
              gravity: 1.134,
              radius: 1.216,
              population: 7512784000,
              techLevel: '4',
              moons: 2,
              extendedInfo: {
                tags: [
                  {
                    name: 'Police State',
                    description: 'Surveillance and secret police are commonplace and considered necessary to keep the population in line.',
                  }, {
                    name: 'Heavy Industry',
                    description: 'Mega corporations produce a huge amount of goods with little concern for the welfare of their workers or the environment.',
                  },
                ],
                description: '',
              },
            }, {
              name: 'Enyo',
              type: 'Asteroid Belt',
              notes: 'Heavy mining operations',
            },
          ],
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
