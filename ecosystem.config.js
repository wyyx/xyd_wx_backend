module.exports = {
  apps: [
    {
      name: 'xyd_wx',
      script: './server.js',
      watch: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        PORT: 8080,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 8000,
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: ['118.24.33.228'],
      ref: 'origin/master',
      repo: 'https://github.com/wyyx/xyd_wx_backend.git',
      path: '/home/ubuntu/xyd_wx_backend/production',
      'pre-deploy': 'git fetch origin master && git reset --hard origin/master',
      'post-deploy': 'yarn start && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
