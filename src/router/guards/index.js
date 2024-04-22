import { createPageLoadingGuard } from './page-loading-guard'

export function setupRouterGuards(router) {
  createPageLoadingGuard(router)
}