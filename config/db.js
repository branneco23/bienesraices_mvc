import { Sequelize } from "sequelize";

const db = new Sequelize('bienesraices_node_mvc', 'root', 'Aa8ge0050*', {
    host: 'localhost',
    port: '3307',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    aperatorAliases: false
});

export default db;

