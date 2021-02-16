
import { ExtensionContext } from 'labbox'
import { activate as activatehello_ext1 } from './extensions/hello_ext1/hello_ext1'
import { HelloPlugin } from './extensions/pluginInterface'

const registerExtensions = (context: ExtensionContext<HelloPlugin>) => {
    activatehello_ext1(context)
}

export default registerExtensions