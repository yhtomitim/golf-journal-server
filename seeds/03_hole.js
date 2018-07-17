
module.exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('hole').del()
    .then(() => {
      // Inserts seed entries
      return knex('hole').insert([
        {
          id: 1,
          round_id: '1',
          hole: '1',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        },
        {
          id: 2,
          round_id: '1',
          hole: '2',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        },
        {
          id: 3,
          round_id: '1',
          hole: '3',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        },
        {
          id: 4,
          round_id: '1',
          hole: '4',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        },
        {
          id: 5,
          round_id: '1',
          hole: '5',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        },
        {
          id: 6,
          round_id: '1',
          hole: '6',
          par: '3',
          score: '6',
          notes: 'hit into water'
        },
        {
          id: 7,
          round_id: '1',
          hole: '7',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        },
        {
          id: 8,
          round_id: '1',
          hole: '8',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        },
        {
          id: 9,
          round_id: '1',
          hole: '9',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        },
        {
          id: 10,
          round_id: '1',
          hole: '10',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        },
        {
          id: 11,
          round_id: '1',
          hole: '11',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        },
        {
          id: 12,
          round_id: '1',
          hole: '12',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        },
        {
          id: 13,
          round_id: '1',
          hole: '13',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        },
        {
          id: 14,
          round_id: '1',
          hole: '14',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        },
        {
          id: 15,
          round_id: '1',
          hole: '15',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        },
        {
          id: 16,
          round_id: '1',
          hole: '16',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        },
        {
          id: 17,
          round_id: '1',
          hole: '17',
          par: '4',
          score: '5',
          notes: 'two chips from off green, 1 putt'
        },
        {
          id: 18,
          round_id: '1',
          hole: '18',
          par: '5',
          score: '7',
          notes: 'felt tired, 3 putts'
        },
        {
          id: 19,
          round_id: '2',
          hole: '1',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        },
        {
          id: 20,
          round_id: '2',
          hole: '2',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        },
        {
          id: 21,
          round_id: '2',
          hole: '3',
          par: '3',
          score: '6',
          notes: 'hit into water'
        },
        {
          id: 22,
          round_id: '2',
          hole: '4',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        },
        {
          id: 23,
          round_id: '2',
          hole: '5',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        },
        {
          id: 24,
          round_id: '2',
          hole: '6',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        },
        {
          id: 25,
          round_id: '2',
          hole: '7',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        },
        {
          id: 26,
          round_id: '2',
          hole: '8',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        },
        {
          id: 27,
          round_id: '2',
          hole: '9',
          par: '5',
          score: '7',
          notes: 'felt tired, 3 putts'
        },
        {
          id: 28,
          round_id: '2',
          hole: '10',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        },
        {
          id: 29,
          round_id: '2',
          hole: '11',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        },
        {
          id: 30,
          round_id: '2',
          hole: '13',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        },
        {
          id: 31,
          round_id: '2',
          hole: '14',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        },
        {
          id: 32,
          round_id: '2',
          hole: '15',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        },
        {
          id: 33,
          round_id: '2',
          hole: '16',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        },
        {
          id: 34,
          round_id: '2',
          hole: '17',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        },
        {
          id: 35,
          round_id: '2',
          hole: '18',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        },
        {
          id: 36,
          round_id: '3',
          hole: '1',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        }, {
          id: 37,
          round_id: '3',
          hole: '2',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        }, {
          id: 38,
          round_id: '3',
          hole: '3',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        }, {
          id: 39,
          round_id: '3',
          hole: '4',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        }, {
          id: 40,
          round_id: '3',
          hole: '5',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        }, {
          id: 40,
          round_id: '3',
          hole: '6',
          par: '3',
          score: '6',
          notes: 'hit into water'
        }, {
          id: 42,
          round_id: '3',
          hole: '7',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        }, {
          id: 43,
          round_id: '3',
          hole: '8',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        }, {
          id: 44,
          round_id: '3',
          hole: '9',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        }, {
          id: 45,
          round_id: '3',
          hole: '10',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        }, {
          id: 46,
          round_id: '3',
          hole: '11',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        }, {
          id: 47,
          round_id: '3',
          hole: '12',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        }, {
          id: 48,
          round_id: '3',
          hole: '13',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        }, {
          id: 49,
          round_id: '3',
          hole: '14',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        }, {
          id: 50,
          round_id: '3',
          hole: '15',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        }, {
          id: 51,
          round_id: '3',
          hole: '16',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        }, {
          id: 52,
          round_id: '3',
          hole: '17',
          par: '4',
          score: '5',
          notes: 'two chips from off green, 1 putt'
        }, {
          id: 53,
          round_id: '3',
          hole: '18',
          par: '5',
          score: '7',
          notes: 'felt tired, 3 putts'
        },
        {
          id: 54,
          round_id: '4',
          hole: '1',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        }, {
          id: 55,
          round_id: '4',
          hole: '2',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        }, {
          id: 56,
          round_id: '4',
          hole: '3',
          par: '3',
          score: '6',
          notes: 'hit into water'
        }, {
          id: 57,
          round_id: '4',
          hole: '4',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        }, {
          id: 58,
          round_id: '4',
          hole: '5',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        }, {
          id: 59,
          round_id: '4',
          hole: '6',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        }, {
          id: 60,
          round_id: '4',
          hole: '7',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        }, {
          id: 61,
          round_id: '4',
          hole: '8',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        }, {
          id: 62,
          round_id: '4',
          hole: '9',
          par: '5',
          score: '7',
          notes: 'felt tired, 3 putts'
        }, {
          id: 63,
          round_id: '4',
          hole: '10',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        }, {
          id: 64,
          round_id: '4',
          hole: '11',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        }, {
          id: 65,
          round_id: '4',
          hole: '13',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        }, {
          id: 66,
          round_id: '4',
          hole: '14',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        }, {
          id: 67,
          round_id: '4',
          hole: '15',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        }, {
          id: 68,
          round_id: '4',
          hole: '16',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        }, {
          id: 69,
          round_id: '4',
          hole: '17',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        }, {
          id: 70,
          round_id: '4',
          hole: '18',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        },
        {
          id: 71,
          round_id: '5',
          hole: '1',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        }, {
          id: 72,
          round_id: '5',
          hole: '2',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        }, {
          id: 73,
          round_id: '5',
          hole: '3',
          par: '3',
          score: '6',
          notes: 'hit into water'
        }, {
          id: 74,
          round_id: '5',
          hole: '4',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        }, {
          id: 75,
          round_id: '5',
          hole: '5',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        }, {
          id: 76,
          round_id: '5',
          hole: '6',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        }, {
          id: 77,
          round_id: '5',
          hole: '7',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        }, {
          id: 78,
          round_id: '5',
          hole: '8',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        }, {
          id: 79,
          round_id: '5',
          hole: '9',
          par: '5',
          score: '7',
          notes: 'felt tired, 3 putts'
        }, {
          id: 80,
          round_id: '5',
          hole: '10',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        }, {
          id: 81,
          round_id: '5',
          hole: '11',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        }, {
          id: 82,
          round_id: '5',
          hole: '13',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        }, {
          id: 83,
          round_id: '5',
          hole: '14',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        }, {
          id: 84,
          round_id: '5',
          hole: '15',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        }, {
          id: 85,
          round_id: '5',
          hole: '16',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        }, {
          id: 86,
          round_id: '5',
          hole: '17',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        }, {
          id: 87,
          round_id: '5',
          hole: '18',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        },
                {
          id: 88,
          round_id: '6',
          hole: '1',
          par: '4',
          score: '6',
          notes: 'I three putted from 5 feet, fun.'
        },
        {
          id: 89,
          round_id: '6',
          hole: '2',
          par: '5',
          score: '6',
          notes: 'I hit two to get out of greenside bunker, fun.'
        },
        {
          id: 90,
          round_id: '6',
          hole: '3',
          par: '3',
          score: '3',
          notes: 'CHIPPED IN FROM 50ft.!'
        },
        {
          id: 91,
          round_id: '6',
          hole: '4',
          par: '4',
          score: '10',
          notes: 'two drives OB'
        },
        {
          id: 92,
          round_id: '6',
          hole: '5',
          par: '4',
          score: '3',
          notes: 'on in 2, 25 ft putt'
        },
        {
          id: 93,
          round_id: '6',
          hole: '6',
          par: '3',
          score: '6',
          notes: 'hit into water'
        },
        {
          id: 94,
          round_id: '6',
          hole: '7',
          par: '5',
          score: '5',
          notes: '300 yd drive down the middle'
        },
        {
          id: 95,
          round_id: '6',
          hole: '8',
          par: '4',
          score: '9',
          notes: 'popped drive up, hit 3 iron 5 times down the fairway'
        },
        {
          id: 96,
          round_id: '6',
          hole: '9',
          par: '3',
          score: '3',
          notes: 'two putted from 50 ft.'
        },
        {
          id: 97,
          round_id: '6',
          hole: '10',
          par: '4',
          score: '4',
          notes: 'bad drive, but hit 275 yd 3 wood to 20 ft.'
        },
        {
          id: 98,
          round_id: '6',
          hole: '11',
          par: '4',
          score: '7',
          notes: 'three putted from 100 ft'
        },
        {
          id: 99,
          round_id: '6',
          hole: '12',
          par: '4',
          score: '4',
          notes: 'holed out from 75 yd with SW'
        },
        {
          id: 100,
          round_id: '6',
          hole: '13',
          par: '3',
          score: '7',
          notes: 'bad off tee, bad hole'
        },
        {
          id: 101,
          round_id: '6',
          hole: '14',
          par: '4',
          score: '5',
          notes: 'drive OB, rest of hole was great'
        },
        {
          id: 102,
          round_id: '6',
          hole: '15',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        },
        {
          id: 103,
          round_id: '6',
          hole: '16',
          par: '4',
          score: '6',
          notes: '3 shots to get 150yds'
        },
        {
          id: 104,
          round_id: '6',
          hole: '17',
          par: '4',
          score: '5',
          notes: 'two chips from off green, 1 putt'
        }, {
          id: 105,
          round_id: '2',
          hole: '18',
          par: '4',
          score: '3',
          notes: 'hit 2nd to 5 ft w/ 7i from 165'
        }
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE hole_id_seq RESTART WITH 106;'));
};
