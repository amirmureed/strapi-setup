// module.exports = () => ({});

// config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contact@guzfitness.com',
        defaultReplyTo: 'contact@guzfitness.com',
      },
    },
  },
  // ...
});