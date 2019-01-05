const horseFilters = {
  age: {
    name: 'age',
    label: 'Age',
    display: true,
    options: [
      {
        value: 'Baby',
        label: 'Foal',
        long_label: 'Foal',
        default: false,
      },
      {
        value: 'Young',
        label: 'Young',
        long_label: 'Young',
        default: false,
      },
      {
        value: 'Adult',
        label: 'Adult',
        long_label: 'Adult',
        default: false,
      },
      {
        value: 'Senior',
        label: 'Senior',
        long_label: 'Senior',
        default: false,
      },
    ],
  },
  breed: {
    name: 'breed',
    label: 'Breed',
    display: true,
    options: [
      {
        value: 'Appaloosa',
        label: 'Appaloosa',
        long_label: 'Appaloosa',
        facet_value: '144',
        default: false,
      },
      {
        value: 'Arabian',
        label: 'Arabian',
        long_label: 'Arabian',
        facet_value: '145',
        default: false,
      },
      {
        value: 'Belgian',
        label: 'Belgian',
        long_label: 'Belgian',
        facet_value: '146',
        default: false,
      },
      {
        value: 'Clydesdale',
        label: 'Clydesdale',
        long_label: 'Clydesdale',
        facet_value: '147',
        default: false,
      },
      {
        value: 'Connemara',
        label: 'Connemara',
        long_label: 'Connemara',
        facet_value: '704',
        default: false,
      },
      {
        value: 'Curly Horse',
        label: 'Curly Horse',
        long_label: 'Curly Horse',
        facet_value: '148',
        default: false,
      },
      {
        value: 'Donkey',
        label: 'Donkey',
        long_label: 'Donkey',
        facet_value: '167',
        default: false,
      },
      {
        value: 'Draft',
        label: 'Draft',
        long_label: 'Draft',
        facet_value: '149',
        default: false,
      },
      {
        value: 'Friesian',
        label: 'Friesian',
        long_label: 'Friesian',
        facet_value: '700',
        default: false,
      },
      {
        value: 'Gaited',
        label: 'Gaited',
        long_label: 'Gaited',
        facet_value: '150',
        default: false,
      },
      {
        value: 'Grade',
        label: 'Grade',
        long_label: 'Grade',
        facet_value: '151',
        default: false,
      },
      {
        value: 'Haflinger',
        label: 'Haflinger',
        long_label: 'Haflinger',
        facet_value: '701',
        default: false,
      },
      {
        value: 'Icelandic Horse',
        label: 'Icelandic Horse',
        long_label: 'Icelandic Horse',
        facet_value: '702',
        default: false,
      },
      {
        value: 'Lipizzan',
        label: 'Lipizzan',
        long_label: 'Lipizzan',
        facet_value: '152',
        default: false,
      },
      {
        value: 'Miniature Horse',
        label: 'Miniature Horse',
        long_label: 'Miniature Horse',
        facet_value: '168',
        default: false,
      },
      {
        value: 'Missouri Foxtrotter',
        label: 'Missouri Foxtrotter',
        long_label: 'Missouri Foxtrotter',
        facet_value: '153',
        default: false,
      },
      {
        value: 'Morgan',
        label: 'Morgan',
        long_label: 'Morgan',
        facet_value: '154',
        default: false,
      },
      {
        value: 'Mule',
        label: 'Mule',
        long_label: 'Mule',
        facet_value: '169',
        default: false,
      },
      {
        value: 'Mustang',
        label: 'Mustang',
        long_label: 'Mustang',
        facet_value: '155',
        default: false,
      },
      {
        value: 'Paint / Pinto',
        label: 'Paint / Pinto',
        long_label: 'Paint / Pinto',
        facet_value: '156',
        default: false,
      },
      {
        value: 'Palomino',
        label: 'Palomino',
        long_label: 'Palomino',
        facet_value: '157',
        default: false,
      },
      {
        value: 'Paso Fino',
        label: 'Paso Fino',
        long_label: 'Paso Fino',
        facet_value: '158',
        default: false,
      },
      {
        value: 'Percheron',
        label: 'Percheron',
        long_label: 'Percheron',
        facet_value: '159',
        default: false,
      },
      {
        value: 'Peruvian Paso',
        label: 'Peruvian Paso',
        long_label: 'Peruvian Paso',
        facet_value: '160',
        default: false,
      },
      {
        value: 'Pony',
        label: 'Pony',
        long_label: 'Pony',
        facet_value: '170',
        default: false,
      },
      {
        value: 'Pony of the Americas',
        label: 'Pony of the Americas',
        long_label: 'Pony of the Americas',
        facet_value: '705',
        default: false,
      },
      {
        value: 'Quarterhorse',
        label: 'Quarterhorse',
        long_label: 'Quarterhorse',
        facet_value: '161',
        default: false,
      },
      {
        value: 'Rocky Mountain Horse',
        label: 'Rocky Mountain Horse',
        long_label: 'Rocky Mountain Horse',
        facet_value: '703',
        default: false,
      },
      {
        value: 'Saddlebred',
        label: 'Saddlebred',
        long_label: 'Saddlebred',
        facet_value: '162',
        default: false,
      },
      {
        value: 'Shetland Pony',
        label: 'Shetland Pony',
        long_label: 'Shetland Pony',
        facet_value: '171',
        default: false,
      },
      {
        value: 'Standardbred',
        label: 'Standardbred',
        long_label: 'Standardbred',
        facet_value: '163',
        default: false,
      },
      {
        value: 'Tennessee Walker',
        label: 'Tennessee Walker',
        long_label: 'Tennessee Walker',
        facet_value: '164',
        default: false,
      },
      {
        value: 'Thoroughbred',
        label: 'Thoroughbred',
        long_label: 'Thoroughbred',
        facet_value: '165',
        default: false,
      },
      {
        value: 'Warmblood',
        label: 'Warmblood',
        long_label: 'Warmblood',
        facet_value: '166',
        default: false,
      },
    ],
  },
};

export default horseFilters;
