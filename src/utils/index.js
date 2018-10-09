import moment from 'moment';
import { DATE_FORMAT } from '../constants';

export const formatDate = (date) => moment(date).format(DATE_FORMAT);