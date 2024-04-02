module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfhuf982i3murccbikig-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_9z96'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'TClCLHCnz8onL3wsVJ9lV3nVXUBzy8J1'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
