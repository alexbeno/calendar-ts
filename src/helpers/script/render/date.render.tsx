import moment from 'moment';

export const today = (): string => moment().format('dddd Do MMMM');

export const todaySmall = (): string => moment().format('DD/MM');
