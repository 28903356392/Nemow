import { request } from '@/utils/request'
enum URL {
  search_all = '/filebrowser/_search',
}

export const filebrowser_search = (data: string) => request({ url: URL.search_all + data, method: 'get', data })
