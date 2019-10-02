export const COLOR_FOCUSED = "#4987ff"
export const COLOR_DEFAULT = "#b4b4b4"

export const PRIORITY_COLOR_MAX = '#ffa726'

export const HOST = "https://rtrack.ru/"
export const AUTH_URL = HOST + "auth/login"

export const API = {
  me: HOST + 'api/v1/me?all=true',
  userTasks: HOST + 'api/v1/issues?filter=%7B%22assignees%22:[190],%22stateType%22:%22open%22%7D&query=&aggs=true&sort=-ipriority&projects=true'
}