const queryStringify = (params: Record<string, any>) => {
  return Object.keys(params).reduce((pre, local, index) => {
    if (index === 0) {
      pre = `${local}=${params[local]}`;
    } else {
      pre += `&${local}=${params[local]}`;
    }
    return pre;
  }, '');
}

const post = (params: Record<string, any>) => {
  const FormData = queryStringify(params);
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': FormData.length
    },
    FormData
  }
}

export default post;