module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // ✅ Good: Listen on all interfaces
  port: env.int('PORT', 1337),  // ✅ Good: Uses PORT from Render or defaults to 1337
  app: {
    keys: env.array('APP_KEYS'), // ✅ Good: Required for sessions/cookies
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false), // ✅ Optional, but valid
  },
});
