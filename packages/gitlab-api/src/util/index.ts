import https from 'https';
import merge from './merge';
import post from './post';
import get from './get';

type METHOD =  "POST" | "GET" | "get" | "post";

export interface Options {
  method?: METHOD;
  path: string;
}

const request = async <T = any>(config: Options, privateToken: string, data?: any): Promise<T> => {
  let options:https.RequestOptions;
  let params:string;
  const prepare = merge(privateToken);
  const { method = 'GET', path } = config;
  if (method.toLocaleUpperCase() === 'POST') {
    const POST_OPTION = post(data);
    options = prepare(POST_OPTION)
    params = POST_OPTION.FormData;
  } else if (method.toLocaleUpperCase() === 'GET') {
    const GET_OPTION = get();
    options = prepare(GET_OPTION);
    params = '';
  }

  const response = await new Promise<T>((resolve, reject) => {
    let RESPONSE = '';
    const request = https.request({
      hostname: 'git.silvrr.com',
      path: `/api/v4/${path}`,
      ...options
    }, (res) => {
      res.on('data', (d) => {
        RESPONSE += d;
      })
      res.on('end', () => {
        resolve(JSON.parse(RESPONSE));
      })
    });
    if (params) {
      request.write(params);
    }
    request.on('error', (e) => {
      console.log('error', e)
      reject(e);
    })
    request.end();
  })
  return response;
}

export default request;