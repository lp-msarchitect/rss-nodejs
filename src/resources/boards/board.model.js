const mongoose = require('mongoose');

const boardSchema = mongoose.Schema(
  {
    title: { type: String, default: 'BOARD' },
    columns: [{}]
  },
  { versionKey: false, collection: 'boards' }
);

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
