import { XhrFactory } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class NSHTTPXMLHttpRequest {
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    DONE: number;
    onabort: (...args: any[]) => void;
    onerror: (...args: any[]) => void;
    onload: (...args: any[]) => void;
    onloadend: (...args: any[]) => void;
    onloadstart: (...args: any[]) => void;
    onprogress: (...args: any[]) => void;
    private _options;
    private _readyState;
    private _status;
    private _response;
    private _responseTextReader;
    private _headers;
    private _errorFlag;
    private _sendFlag;
    private _responseType;
    private _overrideMimeType;
    private _listeners;
    onreadystatechange: Function;
    get upload(): this;
    get readyState(): number;
    get responseType(): string;
    set responseType(value: string);
    get responseText(): string;
    get response(): any;
    get status(): number;
    get statusText(): string;
    constructor();
    private _loadResponse;
    private emitEvent;
    private _setReadyState;
    private _setRequestError;
    addEventListener(eventName: string, handler: Function): void;
    removeEventListener(eventName: string, toDetach: Function): void;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    abort(): void;
    send(data?: any): void;
    setRequestHeader(header: string, value: string): void;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string;
    overrideMimeType(mime: string): void;
}
export declare class NSHTTPXhr implements XhrFactory {
    constructor();
    build(): any;
    static ɵfac: i0.ɵɵFactoryDef<NSHTTPXhr, never>;
    static ɵprov: i0.ɵɵInjectableDef<NSHTTPXhr>;
}