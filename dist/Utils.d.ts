import { IEventPropTypes } from './components/EditorPropTypes';
import { IAllProps } from './components/Editor';
import type { Editor as TinyMCEEditor, EditorEvent } from 'tinymce';
export declare const isFunction: (x: unknown) => x is Function;
type PropLookup = <K extends keyof IAllProps>(key: K) => IAllProps[K] | undefined;
export declare const configHandlers2: <H>(handlerLookup: PropLookup, on: (name: string, handler: H) => void, off: (name: string, handler: H) => void, adapter: <K extends keyof IEventPropTypes>(lookup: PropLookup, key: K) => H, prevProps: Partial<IAllProps>, props: Partial<IAllProps>, boundHandlers: Record<string, H>) => void;
export declare const configHandlers: (editor: TinyMCEEditor, prevProps: Partial<IAllProps>, props: Partial<IAllProps>, boundHandlers: Record<string, (event: EditorEvent<any>) => unknown>, lookup: PropLookup) => void;
export declare const uuid: (prefix: string) => string;
export declare const isTextareaOrInput: (element: Element | null) => element is (HTMLTextAreaElement | HTMLInputElement);
export declare const mergePlugins: (initPlugins: string | string[] | undefined, inputPlugins: string | string[] | undefined) => string[];
export declare const isBeforeInputEventAvailable: () => boolean;
export declare const isInDoc: (elem: Node) => boolean;
export declare const setMode: (editor: TinyMCEEditor | undefined, mode: "readonly" | "design") => void;
export {};
