import * as getUrlParams from './getUrlParams.js';
import deepClone from './deepClone.js';
import * as getObjField from './getObjField.js';
import myCall from './myCall.js';
import myBind from './myBind.js';
import instance_of from './instance_of.js';
import myNew from './myNew.js';
import promiseAll from './promiseAll.js';
import debounce from './debounce.js';
import throttle from './throttle.js';

export default {
  ...getUrlParams,
  deepClone,
  ...getObjField,
  myCall,
  myBind,
  instance_of,
  myNew,
  promiseAll,
  debounce,
  throttle,
};
