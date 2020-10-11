const uuid = require('uuid');

class Board {
  constructor({ title = 'BOARD', columns = [] } = {}) {
    this.id = '';
    this.title = title;
    this.columns = columns.map(el => {
      return {
        ...el,
        id: el.id || uuid()
      };
    });
  }
}

module.exports = Board;
