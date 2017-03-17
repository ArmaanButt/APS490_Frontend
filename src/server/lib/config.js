const config = {
  Api: {
    host: process.env.DOCKER_ENABLED ? 'tcp://ajax:5000' : 'http://192.168.99.100:5000',
  },
};

export default config;
