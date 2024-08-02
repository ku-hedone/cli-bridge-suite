import http from 'http';
import merge from './merge';
import post from './post';
import get from './get';

type METHOD =  "POST" | "GET" | "get" | "post";

export interface Options {
  method?: METHOD;
  path: string;
}

const request = async <T = any>(config: Options, privateToken: string, data?: any): Promise<T> => {
  let options:http.RequestOptions;
  let params:string;
  const prepear = merge(privateToken);
  const { method = 'GET', path } = config;
  if (method.toLocaleUpperCase() === 'POST') {
    const POST_OPTION = post();
    options = prepear(POST_OPTION)
    params = JSON.stringify(data);
  } else if (method.toLocaleUpperCase() === 'GET') {
    const GET_OPTION = get();
    options = prepear(GET_OPTION);
    params = '';
  }

  const response = await new Promise<T>((resolve, reject) => {
    const request = http.request({
      protocol: 'http:',
      host: '192.168.6.121',
      port: 9000,
      path: `/api/0/${path}`,
      ...options
    }, (res) => {
      const RESPONSE: Uint8Array[] = [];
      res.on('data', (d) => {
        RESPONSE.push(d)
      })
      res.on('end', () => {
        const response = JSON.parse(Buffer.concat(RESPONSE).toString());
        resolve(response)
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