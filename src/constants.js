export const COLOR_FOCUSED = "#4987ff"
export const COLOR_DEFAULT = "#b4b4b4"

export const HOST = "https://rtrack.ru/"
export const AUTH_URL = HOST + "auth/login"

export const API = {
  me: HOST + 'api/v1/me?all=true',
  userTasks: HOST + 'api/v1/issues?filter=%7B%22assignees%22:[190],%22stateType%22:%22open%22%7D&query=&aggs=true&sort=-ipriority&projects=true'
}

export const PRIORITY = {
  0: {
    name: 'Минимальный',
    color: '#fff8e1'
  },
  1: {
    name: 'Низкий',
    color: '#ffecb3'
  },
  2: {
    name: 'Средний',
    color: '#ffe082'
  },
  3: {
    name: 'Высокий',
    color: '#ffcc80'
  },
  4: {
    name: 'Максимум',
    color: '#ffa726'
  },
  5: {
    name: 'Критический баг',
    color: '#fb8c00'
  },
}

export const STATE = {
  new: {
    name: 'Новый',
    color: '#f77b72',
  },
  paused: {
    name: 'Пауза',
    color: '#a1887f',
  },
  rejected: {
    name: 'Нужны доработки',
    color: '#e24c4c',
  },

}