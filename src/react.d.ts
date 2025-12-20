declare module 'react' {
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  export type ReactNode = ReactElement | ReactText | ReactFragment | ReactPortal | boolean | null | undefined;
  export type ReactText = string | number;
  export type ReactFragment = {} | ReactNodeArray;
  export type ReactNodeArray = Array<ReactNode>;
  export type ReactPortal = { key: Key | null, children: ReactNode };
  export type Key = string | number;
  export type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any>) | (new (props: P) => Component<any, any>);
  export class Component<P, S> {
    props: P;
    state: S;
    setState(state: S, callback?: () => void): void;
    render(): ReactElement | null;
  }

  export interface FunctionComponent<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement<any, any> | null;
    displayName?: string;
  }
  export type FC<P = {}> = FunctionComponent<P>;

  export = React;
  export as namespace React;
}

declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
  export function jsx(type: any, props: any): JSX.Element;
  export function jsxs(type: any, props: any): JSX.Element;
}

declare module 'react-dom/client' {
  import { ReactNode } from 'react';
  
  export interface Root {
    render(children: ReactNode): void;
    unmount(): void;
  }
  
  export function createRoot(container: Element | DocumentFragment): Root;
} 