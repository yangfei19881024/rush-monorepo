// packages/core/index.ts
import { log } from '@y/utils'
const core = () => {
    console.log('core change')
    console.log('core change again!!!')
    log.info('test', 'Hello world!')
}
core()
export default core