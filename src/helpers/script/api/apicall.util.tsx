import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
axios.defaults.headers.common['access-control-allow-methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Call get
 * @param {*} url
 * @param {*} params
 */

interface getPropsType {
  url: string;
  params: object;
  headers: object;
}

export const CallGet = async (props: getPropsType) =>
  new Promise(resolve => {
    axios
      .get(`${props.url}`, {
        params: props.params,
        headers: props.headers,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        resolve(err);
      });
  });

/**
 * Call post
 * @param {*} url
 * @param {*} params
 */

export const CallPost = async (props: getPropsType) =>
  new Promise(resolve => {
    axios
      .post(`${props.url}`, props.params, {
        headers: props.headers,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        resolve(err);
      });
  });

/**
 * Call put
 * @param {*} url
 * @param {*} params
 */

export const CallPut = async (props: getPropsType) =>
  new Promise(resolve => {
    axios
      .put(`${props.url}`, props.params, {
        headers: props.headers,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        resolve(err);
      });
  });

/**
 * Call delete
 * @param {*} url
 * @param {*} params
 */

export const CallDelete = async (props: getPropsType) =>
  new Promise(resolve => {
    axios
      .delete(`${props.url}`, {
        headers: props.headers,
        data: props.params,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        resolve(err);
      });
  });
