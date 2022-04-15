import * as getUrlParams from './getUrlParams.js';
import deepClone from './deepClone.js';
import * as getObjField from './getObjField.js';
import myCall from './myCall.js';
import myBind from './myBind.js';

export default {
  ...getUrlParams,
  deepClone,
  ...getObjField,
  myCall,
  myBind,
};
