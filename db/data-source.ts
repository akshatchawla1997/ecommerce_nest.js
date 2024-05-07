import {DataSource, DataSourceOptions} from 'typeorm'
export const dataSourceOptions:DataSourceOptions = {
    type:"postgres",
    host:"localhost",
    port:5433,
    username:"postgres",
    password:"admin",
    database:"bazaar_api",
    entities:[],
    migrations:[],
    logging:false,
    synchronize:false
}

const datasource = new DataSource(dataSourceOptions)