const getBaseUrl = () => {
  if (process.env.DEVELOPMENT === 'true') {
    return 'http://localhost:3000';
  }

  return '';
};

const baseUrl = getBaseUrl();

export default baseUrl;
