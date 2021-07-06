module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 8031),
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', '112a5696c361cb79204a8fdc56a54144'),
      },
    },
  });
  