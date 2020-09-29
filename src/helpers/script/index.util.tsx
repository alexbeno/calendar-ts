/* --------------------------------- FORMAT IMPORT--------------------------------- */

import { slugify } from './format/slugify.util';
import { apiobject } from './format/apiobj.util';
import { percent } from './format/percent.util';
import { capitalizeFirstLetter, str } from './format/str.utile';
import { timestampConverter, getTodayAtom, dateToAtom, changeHour } from './format/date.util';

/* ----------------------------------- API IMPORT ---------------------------------- */

import { CallGet as get, CallPost as post, CallPut as put, CallDelete as remove } from './api/apicall.util';

/* ------------------------------ RENDER IMPORT ----------------------------- */

import { today, todaySmall } from './render/date.render';

/* ------------------------------ FORMAT OBJECT ----------------------------- */

const format = {
  slugify,
  api: apiobject,
  percent,
  str,
  capitalize: capitalizeFirstLetter,
  timestampConverter,
  changeHour,
  getTodayAtom,
  dateToAtom,
};

/* ------------------------------- API OBJECT ------------------------------- */

const api = {
  get,
  post,
  put,
  remove,
};

/* ------------------------------ RENDER OBJECT ----------------------------- */

const render = {
  today,
  todaySmall,
};

/* ----------------------------- ---- EXPORT --- ---------------------------- */

export default {
  format,
  api,
  render,
};
