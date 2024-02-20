import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('bookstore', 'root', 'siva%$#@', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
