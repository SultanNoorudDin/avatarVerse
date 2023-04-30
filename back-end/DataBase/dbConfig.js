var config = {
  "user": 'sa',
  "password": '123456789',
  "server": 'DESKTOP-QI6H2EA',
  "database": 'Database',
  "port": 1433, // make sure to change port
  "dialect": "mssql",
  encrypt: false,
  "dialectOptions": {
      "instanceName": "SQLEXPRESS"
  }
};

module.exports = config