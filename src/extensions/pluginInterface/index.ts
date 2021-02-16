import { BasePlugin, ExtensionContext } from "labbox";
import { FunctionComponent } from "react";

export type HelloViewProps = {
    text: string
}

export interface HelloViewPlugin extends BasePlugin {
    type: 'HelloView'
    component: FunctionComponent<HelloViewProps>
}

export type HelloPlugin = HelloViewPlugin

export type HelloExtensionContext = ExtensionContext<HelloPlugin>