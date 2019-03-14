module.exports = {
  apps : [{
    name: 'webhook',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '120.79.4.83',
      ref  : 'origin/master',
      repo : 'git@github.com:livissnack/webhook.git',
      path : '/var/www/webhook',
      'post-deploy' : 'cp .env.example .env && npm install && pm2 reload ecosystem.config.js --env production'
    },
    development : {
      user : 'root',
      host : '120.79.4.83',
      ref  : 'origin/master',
      repo : 'git@github.com:livissnack/webhook.git',
      path : '/var/www/webhook',
      'post-deploy' : 'cp .env.example .env && npm install && pm2 reload ecosystem.config.js --env development'
    }
  }
};
