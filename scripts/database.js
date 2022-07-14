const poisonArray = [
    {
      id: 1,
      species: "Atropa belladonna",
      commonName: "Deadly Nightshade",
      fatal: true,
      antidote: "Atropine "
    },
    {
      id: 2,
      species: "Conium maculatum",
      commonName: "Hemlock",
      fatal: true,
      antidote: "none"
    },
    {
      id: 3,
      species: "Aconitum",
      commonName: "Wolf's Bane",
      fatal: true,
      antidote: "atropine"
    },
    {
      id: 4,
      species: "Cascabela thevetia",
      commonName: "Yellow oleander",
      fatal: true,
      antidote: "Digoxin-specific antibody fragments"
    },
    {
      id: 5,
      species: "Datura stramonium",
      commonName: "Devil's trumpets",
      fatal: true,
      antidote: "physostigmine"
    }
  ];
  const zodiacArray = [
    {
      id: 1,
      name: "Aries",
      mascot: "Ram",
      dates: "March 21-April 19",
      element: "Fire",
      wvAnimal: "Monarch Butterfly"
    },
    {
      id: 2,
      name: "Taurus",
      mascot: "Bull",
      dates: "April 20-May 20",
      element: "Earth",
      wvAnimal: "Box Turtle"
    },
    {
      id: 3,
      name: "Gemini",
      mascot: "Twins",
      dates: "May 21-June 21",
      element: "Air",
      wvAnimal: "Cicada"
    },
    {
      id: 4,
      name: "Cancer",
      mascot: "Crab",
      dates: "June 22-July 22",
      element: "Water",
      wvAnimal: "Hellbender"
    },
    {
      id: 5,
      name: "Leo",
      mascot: "Lion",
      dates: "July 23-August 22",
      element: "Fire",
      wvAnimal: "Copperhead"
    },
    {
      id: 6,
      name: "Virgo",
      mascot: "Virgin",
      dates: "August 23-September 22",
      element: "Earth",
      wvAnimal: "Black Bear"
    },
    {
      id: 7,
      name: "Libra",
      mascot: "Balance",
      dates: "September 23-October 23",
      element: "Air",
      wvAnimal: "Brook Trout"
    },
    {
      id: 8,
      name: "Scorpius",
      mascot: "Scorpion",
      dates: "October 24-November 21",
      element: "Water",
      wvAnimal: "O'Possum"
    },
    {
      id: 9,
      name: "Sagittarius",
      mascot: "Archer",
      dates: "November 22-December 21",
      element: "Fire",
      wvAnimal: "Raccoon"
    },
    {
      id: 10,
      name: "Capricorn",
      mascot: "Goat",
      dates: "December 22-January 19",
      element: "Earth",
      wvAnimal: "Cardinal"
    },
    {
      id: 11,
      name: "Aquarius",
      mascot: "Water Bearer",
      dates: "January 20-February 18",
      element: "Air",
      wvAnimal: "Groundhog"
    },
    {
      id: 12,
      name: "Pisces",
      mascot: "Fish",
      dates: "February 19-March 20",
      element: "Water",
      wvAnimal: "White-Tailed Deer"
    }
  ]
  export const useZodiac = () => zodiacArray.map(x => ({...x}))