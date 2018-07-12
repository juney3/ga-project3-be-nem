const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/comicly')


var Character = require("./models/character");

CharacterList = [
  {
    characterName: 'Spider-Man',
    characterMarvelId: 1009610
  },
  {
    characterName: 'Thor',
    characterMarvelId: 1009664
  },
  {
    characterName: 'Wolverine',
    characterMarvelId: 1009718
  },
  {
    characterName: 'Iron Man',
    characterMarvelId: 1009368
  },
  {
    characterName: 'Hulk',
    characterMarvelId: 1009351
  },
  {
    characterName: 'Captain America',
    characterMarvelId: 1009220
  },
  {
    characterName: 'Deadpool',
    characterMarvelId: 1009268
  },
  {
    characterName: 'Black Panther',
    characterMarvelId: 1009187
  },
  {
    characterName: 'Doctor Strange',
    characterMarvelId: 1009282
  },
  {
    characterName: 'Daredevil',
    characterMarvelId: 1009262
  },
  {
    characterName: 'Silver Surfer',
    characterMarvelId: 1009592
  },
  {
    characterName: 'Professor X',
    characterMarvelId: 1009504
  },
  {
    characterName: 'Jean Grey',
    characterMarvelId: 1009496
  },
  {
    characterName: 'Storm',
    characterMarvelId: 1009629
  },
  {
    characterName: 'Rogue',
    characterMarvelId: 1009546
  },
  {
    characterName: 'Colossus',
    characterMarvelId: 1009243
  },
  {
    characterName: 'Punisher',
    characterMarvelId: 1009515
  },
  {
    characterName: 'Cyclops',
    characterMarvelId: 1009257
  },
  {
    characterName: 'Gambit',
    characterMarvelId: 1009313
  },
  {
    characterName: 'Nightcrawler',
    characterMarvelId: 1009472
  },
  {
    characterName: 'Beast',
    characterMarvelId: 1009175
  },
  {
    characterName: 'Star-Lord',
    characterMarvelId: 1010734
  },
  {
    characterName: 'Iceman',
    characterMarvelId: 1009362
  },
  {
    characterName: 'Scarlet Witch',
    characterMarvelId: 1009562
  },
  {
    characterName: 'Groot',
    characterMarvelId: 1010743
  },
  {
    characterName: 'Ghost Rider',
    characterMarvelId: 1009318
  },
  {
    characterName: 'Black Widow',
    characterMarvelId: 1009189
  },
  {
    characterName: 'Rocket Raccoon',
    characterMarvelId: 1010744
  },
  {
    characterName: 'Cable',
    characterMarvelId: 1009214
  },
  {
    characterName: 'Human Torch',
    characterMarvelId: 1009356
  },
  {
    characterName: 'Vision',
    characterMarvelId: 1009697
  },
  {
    characterName: 'Ms. Marvel',
    characterMarvelId: 1017577
  },
  {
    characterName: 'Hawkeye',
    characterMarvelId: 1009338
  },
  {
    characterName: 'Psylocke',
    characterMarvelId: 1009512
  },
  {
    characterName: 'Thing',
    characterMarvelId: 1009662
  },
  {
    characterName: 'Kitty Pryde',
    characterMarvelId: 1009508
  },
  {
    characterName: 'Quicksilver',
    characterMarvelId: 1009524
  },
  {
    characterName: 'Nick Fury',
    characterMarvelId: 1009471
  },
  {
    characterName: 'Luke Cage',
    characterMarvelId: 1009215
  },
  {
    characterName: 'X-23',
    characterMarvelId: 1009722
  },
  {
    characterName: 'Ant-Man',
    characterMarvelId: 1010801
  },
  {
    characterName: 'Blade',
    characterMarvelId: 1009191
  },
  {
    characterName: 'Moon Knight',
    characterMarvelId: 1009452
  },
  {
    characterName: 'Drax',
    characterMarvelId: 1010735
  },
  {
    characterName: 'Gamora',
    characterMarvelId: 1010763
  },
  {
    characterName: 'Iron Fist',
    characterMarvelId: 1009367
  },
  {
    characterName: 'She-Hulk',
    characterMarvelId: 1009583
  },
  {
    characterName: 'Captain Marvel',
    characterMarvelId: 1010338
  },
  {
    characterName: 'Havok',
    characterMarvelId: 1009337
  },
  {
    characterName: 'Warbird',
    characterMarvelId: 1009703
  },
  {
    characterName: 'Sunspot',
    characterMarvelId: 1009638
  },
  {
    characterName: 'Cannonball',
    characterMarvelId: 1009219
  },
  {
    characterName: 'Lockheed',
    characterMarvelId: 1009405
  },
  {
    characterName: 'Deathlok',
    characterMarvelId: 1010890
  },
  {
    characterName: 'Squirrel Girl',
    characterMarvelId: 1010860
  },
  {
    characterName: 'Legion',
    characterMarvelId: 1009399
  },
  {
    characterName: 'Multiple Man',
    characterMarvelId: 1011056
  },
  {
    characterName: 'Layla Miller',
    characterMarvelId: 1011100
  },
  {
    characterName: 'Dazzler',
    characterMarvelId: 1009267
  },
  {
    characterName: 'Tigra',
    characterMarvelId: 1009670
  },
  {
    characterName: 'Jessica Jones',
    characterMarvelId: 1009378
  },
  {
    characterName: 'Loki',
    characterMarvelId: 1009407
  },
  {
    characterName: 'Hellcat',
    characterMarvelId: 1010351
  },
  {
    characterName: 'Karma',
    characterMarvelId: 1011386
  },
  {
    characterName: 'Misty Knight',
    characterMarvelId: 1010682
  },
  {
    characterName: 'Winter Soldier',
    characterMarvelId: 1010740
  },
  {
    characterName: 'Red Skull',
    characterMarvelId: 1009535
  },
  {
    characterName: 'Leader',
    characterMarvelId: 1009398
  },
  {
    characterName: 'Cloak',
    characterMarvelId: 1009241
  },
  {
    characterName: 'Dagger',
    characterMarvelId: 1009258
  },
  {
    characterName: 'Magneto',
    characterMarvelId: 1009417
  },
  {
    characterName: 'Strong Guy',
    characterMarvelId: 1011051
  },
  {
    characterName: 'Banshee',
    characterMarvelId: 1009168
  },
  {
    characterName: 'Jessica Drew',
    characterMarvelId: 1010667
  },
  {
    characterName: 'Beta-Ray Bill',
    characterMarvelId: 1009180
  },
  {
    characterName: 'Emma Frost',
    characterMarvelId: 1009310
  }
]


Character.remove({}, function(err, characters){
    // code in here runs after all posts are removed
    Character.create(CharacterList, function(err, characters){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all characters:", characters);
      console.log("created", characters.length, "characters");
      process.exit();
    });

  });
