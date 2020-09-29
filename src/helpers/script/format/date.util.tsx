import moment from 'moment';

interface propsType {
  date: string;
}

interface changeHourProps {
  date: string;
  hour: number;
  minute: number;
}

export interface dataObject {
  date: string;
  dateLetter: string;
  smallDate: string;
  hourMinute: string;
  hour: string;
  minute: string;
}

export const timestampConverter = ({ date }: propsType) => {
  if (date !== '' && date !== null) {
    return {
      date: moment(new Date(date.replace(' ', 'T'))).format('DD/MM/YYYY'),
      smallDate: moment(new Date(date.replace(' ', 'T'))).format('DD/MM'),
      dateLetter: moment(new Date(date.replace(' ', 'T'))).format('dddd Do MMMM'),
      hourMinute: moment(new Date(date.replace(' ', 'T'))).format('HH:mm'),
      hour: moment(new Date(date.replace(' ', 'T'))).format('HH'),
      minute: moment(new Date(date.replace(' ', 'T'))).format('HH'),
    };
  }

  return {
    date: '',
    smallDate: '',
    dateLetter: '',
    hourMinute: '',
    hour: '',
    minute: '',
  };
};

export const changeHour = ({ date, hour, minute }: changeHourProps) => {
  if (date !== '' && date !== null) {
    const momentDate = moment(date);
    momentDate.set({ h: hour, m: minute, s: 0 });
    if (momentDate) {
      return momentDate.toISOString();
    }
  }

  return '';
};

export const isPast = (date: string): boolean => moment(date).isBefore(moment(), 'day');

export const getTodayAtom = () => new Date().toISOString();

export const dateToAtom = (date: Date) => date.toISOString();

export const dateSmall = (date: string) => moment(date).format('DD/MM');

export const durationHours = (start: string, end: string) => {
  const momentStart = moment(start);
  const momentEnd = moment(end);
  return momentStart.diff(momentEnd, 'hour');
};
export const isToday = (date: string): boolean => moment(date).isSame(moment(), 'day');
