
export interface IPastState {
    pastLaunch: any;
    error: Error;
}

export const initialPastState: IPastState = {
    pastLaunch: null,
    error: null
};
