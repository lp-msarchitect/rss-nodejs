class Task {
  constructor({
    title = 'BOARD',
    order = 0,
    description = '',
    userId = '',
    boardId = '',
    columnId = ''
  } = {}) {
    this.id = '';
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
