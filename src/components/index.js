import SvgIcon from './SvgIcon/SvgIcon.vue'

const components = [SvgIcon]

const globalComponents = {
  install(app) {
    components.forEach((comp) => {
      app.component(comp.name, comp)
    })
  },
}

export function setupGlobalComponents(app) {
  app.use(globalComponents)
}