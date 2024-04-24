import path from 'node:path'
import { globSync } from 'glob'

/**
 * @usage 生成 .vue 文件路径列表，用于添加菜单时可下啦选择对应的 .vue 文件路径，防止手动输入报错
 */
export function getPagePathes() {
  const files = globSync('src/views/**/*.vue')
  return files.map(item => `/${path.normalize(item).replace(/\\/g, '/')}`)
}
