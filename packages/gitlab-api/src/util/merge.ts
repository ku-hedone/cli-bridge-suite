const merge = (privateToken: string) => (options: Record<string, any>) => {
  const { headers, method } = options;
  return {
    headers: {
      'Accept': "*/*",
      'PRIVATE-TOKEN': privateToken,
      ...headers
    },
    method,
  };
}

export default merge;