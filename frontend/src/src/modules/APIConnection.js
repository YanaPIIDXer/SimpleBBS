import conn from './BasicConnection'

export const getApi = async (api) => {
    const endpoint = "http://localhost:3000/api" + api;
    return await conn.get(endpoint);
}
