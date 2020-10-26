const mongoose = require('mongoose');

// class Board {
//   constructor({ title = 'BOARD', columns = [] } = {}) {
//     this.id = '';
//     this.title = title;
//     this.columns = columns.map(el => {
//       return {
//         ...el,
//         id: el.id || uuid()
//       };
//     });
//   }
// }

const boardSchema = mongoose.Schema(
  {
    title: { type: String, default: 'BOARD' },
    columns: [
      {
        title: String,
        order: Number
      }
    ]
  },
  { versionKey: false }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
