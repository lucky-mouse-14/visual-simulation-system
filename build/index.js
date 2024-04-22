import { globSync } from 'glob'
import path from 'path'

/**
 * @usage 生成icons，用于 unocss safelist，一直吃也难免动态渲染自定义图标
 */
export function getIcons() {
  const feFiles = globSync('src/assets/icons/feather/*.svg', { nodir: true, strict: true })
  const meFiles = globSync('src/assets/icons/isme/*.svg', { nodir: true, strict: true })
  const feIcons = feFiles.map((filePath) => {
    const fileName = path.basename(filePath) // 获取文件名，包括后缀
    const fileNameWithoutExt = path.parse(fileName).name // 获取取出缀的文件名
    return `i-fe:${fileNameWithoutExt}`
  })
  const meIcons = meFiles.map((filePath) => {
    const fileName = path.basename(filePath) // 获取文件名，包括后缀
    const fileNameWithoutExt = path.parse(fileName).name // 获取取出缀的文件名
    return `i-me:${fileNameWithoutExt}`
  })

  return [...feIcons, ...meIcons]
}

/**
 * @usage 生成 .vue 文件路径列表，用于添加菜单时可下啦选择对应的 .vue 文件路径，防止手动输入报错
 */
export function getPagePathes() {
  const files = globSync('src/views/**/*.vue')
  return files.map(item => '/' + path.normalize(item).replace(/\\/g, '/'))
}