import moment from 'moment';
import {STATUS} from '@constants';

export const getStatusColor = status => {
  let color = '#2887ef';
  if (status?.toUpperCase() === STATUS.BOOKED) {
    color = '#2887ef';
  } else if (status?.toUpperCase() === STATUS.CANCELLED) {
    color = 'red';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN) {
    color = 'orange';
  } else if (status?.toUpperCase() === STATUS.COMPLETED) {
    color = 'green';
  } else if (status?.toUpperCase() === STATUS.MISSED) {
    color = 'red';
  } else if (status?.toUpperCase() === STATUS.CHECKED_IN) {
    color = '#2887ef';
  } else if (status?.toUpperCase() === STATUS.PASSED) {
    color = 'red';
  } else if (status?.toUpperCase() === STATUS.SERVING_NOW) {
    color = 'gray';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN_BY_BUSINESS) {
    color = 'green';
  } else if (status?.toUpperCase() === STATUS.CONFIRMED) {
    color = 'lightgreen';
  }
  return color;
};

export const getStatusColorText = status => {
  let color = 'black';
  if (status?.toUpperCase() === STATUS.BOOKED) {
    color = 'black';
  } else if (status?.toUpperCase() === STATUS.CANCELLED) {
    color = 'white';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN) {
    color = 'white';
  } else if (status?.toUpperCase() === STATUS.COMPLETED) {
    color = 'green';
  } else if (status?.toUpperCase() === STATUS.MISSED) {
    color = 'red';
  } else if (status?.toUpperCase() === STATUS.CHECKED_IN) {
    color = '#2887ef';
  } else if (status?.toUpperCase() === STATUS.PASSED) {
    color = 'red';
  } else if (status?.toUpperCase() === STATUS.SERVING_NOW) {
    color = 'white';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN_BY_BUSINESS) {
    color = 'white';
  } else if (status?.toUpperCase() === STATUS.CONFIRMED) {
    color = 'black';
  }
  return color;
};

export const getStatusName = status => {
  let color = status;
  if (status?.toUpperCase() === STATUS.BOOKED) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.CANCELLED) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.COMPLETED) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.MISSED) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.PASSED) {
    color = status;
  } else if (status?.toUpperCase() === STATUS.SERVING_NOW) {
    color = 'Now Serving';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN_BY_BUSINESS) {
    color = 'Biz Checked In';
  } else if (status?.toUpperCase() === STATUS.CONFIRMED) {
    color = status;
  }
  return color;
};

export const getHeaderTitle = status => {
  let title = 'Thank You';
  if (status?.toUpperCase() === STATUS.BOOKED) {
    title = 'Confirmation';
  } else if (status?.toUpperCase() === STATUS.CANCELLED) {
    title = 'Appointment Cancelled';
  } else if (status?.toUpperCase() === STATUS.CHECKEDIN) {
    title = 'Thank You';
  } else if (status?.toUpperCase() === STATUS.COMPLETED) {
    title = 'Thank You';
  } else if (status?.toUpperCase() === STATUS.MISSED) {
    title = 'Appointment Missed';
  } else if (status?.toUpperCase() === STATUS.CHECKED_IN) {
    title = 'Thank You';
  } else if (status?.toUpperCase() === STATUS.PASSED) {
    title = 'Appointment Passed';
  }
  return title;
};

export const getTimeOfMessage = date => {
  const now = moment();
  const remainingTime = now.diff(date, 'days');

  if (remainingTime === 0) {
    return moment.utc(date).local().format('hh:mm A');
  } else if (remainingTime === 1) {
    return 'Yesterday';
  } else if (remainingTime > 1 && remainingTime < 8) {
    return moment.utc(date).local().format('dddd');
  } else {
    // return moment.utc(date).local().format('L');
    return moment.utc(date).local().format('MMM DD');
  }
};

export const handleDate = ({date, setAppointmentDate, setMonthCalendar}) => {
  const a = date.toISOString();
  const dateFormat = moment(a).format('ddd MMM DD yyyy');
  setAppointmentDate(dateFormat);
  setMonthCalendar(date);
  ref.current.setSelectedDate(dateFormat);
};

export const resetScrollDate = (setAppointmentDate, setMonthCalendar) => {
  const date = new Date();
  const a = date.toISOString();
  const dateFormat = moment(a).format('ddd MMM DD yyyy');
  setAppointmentDate(dateFormat);
  setMonthCalendar(new Date());

  ref.current.setSelectedDate(date);
};

export const onSelectedDateHandler = (
  date,
  setMonthCalendar,
  setAppointmentDate,
) => {
  const a = date.toISOString();
  const dateFormat = moment(a).format('ddd MMM DD yyyy');
  //   setMonthCalendar(date);
  setAppointmentDate(dateFormat);
};

export const getSubString = (text, limit) => {
  return text?.length <= limit ? text : `${text.substring(0, limit)}...`;
};
