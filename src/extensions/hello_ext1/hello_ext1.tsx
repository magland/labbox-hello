import { HelloExtensionContext } from "../pluginInterface";
import HelloView1 from "./HelloView1/HelloView1";
import HelloView2 from "./HelloView2/HelloView2";

export function activate(context: HelloExtensionContext) {
    context.registerPlugin({
        type: 'HelloView',
        name: 'HelloView1',
        label: 'Hello View 1',
        component: HelloView1
    })
    context.registerPlugin({
        type: 'HelloView',
        name: 'HelloView2',
        label: 'Hello View 2',
        component: HelloView2
    })
}