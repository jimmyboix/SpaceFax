import { Launch } from './home.component';

export interface IHomeState {
    nextLaunch: Launch;
    nextLaunchCountdown: number;
    error: Error;
}

export const initialHomeState: IHomeState = {
    nextLaunch: null,
    nextLaunchCountdown: null,
    error: null
};
