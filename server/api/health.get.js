import { version } from '~~/package.json'

export default defineEventHandler(async (event) => {
  const health = await $fetch('https://httpbin.org/get')

  return health
  // return {
  //   ...health,
  //   version
  // }
})