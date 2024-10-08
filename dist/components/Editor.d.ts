import * as React from 'react';
import { IEvents } from '../Events';
import { ScriptItem } from '../ScriptLoader2';
import { IEditorPropTypes } from './EditorPropTypes';
import type { Editor as TinyMCEEditor, TinyMCE } from 'tinymce';
import '../styles/globals.css';
type OmitStringIndexSignature<T> = {
    [K in keyof T as string extends K ? never : K]: T[K];
};
interface DoNotUse<T extends string> {
    __brand: T;
}
type OmittedInitProps = 'selector' | 'target' | 'readonly' | 'license_key';
type EditorOptions = Parameters<TinyMCE['init']>[0];
export type InitOptions = Omit<OmitStringIndexSignature<EditorOptions>, OmittedInitProps> & {
    selector?: DoNotUse<'selector prop is handled internally by the component'>;
    target?: DoNotUse<'target prop is handled internally by the component'>;
    readonly?: DoNotUse<'readonly prop is overridden by the component, use the `disabled` prop instead'>;
    license_key?: DoNotUse<'license_key prop is overridden by the integration, use the `licenseKey` prop instead'>;
} & {
    [key: string]: unknown;
};
export type Version = `${'4' | '5' | '6' | '7'}${'' | '-dev' | '-testing' | `.${number}` | `.${number}.${number}`}`;
export interface IProps {
    apiKey: string;
    id: string;
    inline: boolean;
    initialValue: string;
    onEditorChange: (a: string, editor: TinyMCEEditor) => void;
    value: string;
    init: InitOptions;
    tagName: string;
    tabIndex: number;
    cloudChannel: Version;
    plugins: NonNullable<EditorOptions['plugins']>;
    toolbar: NonNullable<EditorOptions['toolbar']>;
    disabled: boolean;
    textareaName: string;
    tinymceScriptSrc: string | string[] | ScriptItem[];
    rollback: number | false;
    scriptLoading: {
        async?: boolean;
        defer?: boolean;
        delay?: number;
    };
}
export interface IAllProps extends Partial<IProps>, Partial<IEvents> {
}
export declare class Editor extends React.Component<IAllProps> {
    static propTypes: IEditorPropTypes;
    static defaultProps: Partial<IAllProps>;
    editor?: TinyMCEEditor;
    private id;
    private elementRef;
    private inline;
    private currentContent?;
    private boundHandlers;
    private rollbackTimer;
    private valueCursor;
    constructor(props: Partial<IAllProps>);
    private get view();
    componentDidUpdate(prevProps: Partial<IAllProps>): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{
        ref: React.RefObject<HTMLElement>;
        id: string;
        tabIndex: number | undefined;
    }, string | React.JSXElementConstructor<any>>;
    private changeEvents;
    private beforeInputEvent;
    private renderInline;
    private renderIframe;
    private getScriptSources;
    private getInitialValue;
    private bindHandlers;
    private rollbackChange;
    private handleBeforeInput;
    private handleBeforeInputSpecial;
    private handleEditorChange;
    private handleEditorChangeSpecial;
    private initialise;
}
export {};
