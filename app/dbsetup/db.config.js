module.exports = {
  host: process.env.host,
  username: process.env.db_username,
  password: process.env.db_password,
  db: "mail_storage",
  main_db_options: {
    dialect: "mysql",
    pool: {
      max: 30,
      min: 0,
      idle: 10000,
    },
    timezone: "+05:30",
  },
};
