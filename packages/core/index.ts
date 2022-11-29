// packages/core/index.ts
import { log } from '@y/utils'

const core = () => {
    console.log('core change')
    log.info('test', 'Hello world!')
}
core()
export default core