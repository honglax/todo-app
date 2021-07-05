const KEY_CODES = {
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
}

const ORDER_BY = {
  ASC: 'ascending',
  DESC: 'descending'
}

const LOCAL_STORAGE_ITEM = 'taskList'

const FILTER_TYPES = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETE: 'Complete'
}

const NOOP_FUNC = () => {}

export { KEY_CODES, ORDER_BY, LOCAL_STORAGE_ITEM, FILTER_TYPES, NOOP_FUNC }
