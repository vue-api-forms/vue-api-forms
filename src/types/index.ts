export interface ControlData {
    type: string;
    text: string;
    click: ControlFunction;
}

export interface ControlFunction {
    arguments: string;
    body: string;
}
