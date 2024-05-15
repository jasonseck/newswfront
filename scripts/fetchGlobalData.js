const { default: axios} = require('axios');

const fs = require('fs');
require('dotenv').config();
const {loadEnvConfig} =  require('@next/env');

loadEnvConfig(process.cwd());

async function fetchGlobalData() {
    try {
        console.log('running initial fetch')
        const [header,footer,announce] =
            await Promise.all([
                axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/header`).then(
                    (res)=>res?.data
                ),
                axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/footer`).then(
                    (res)=>res?.data
                ),
                axios(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/globals/announce`).then(
                    (res)=>res?.data
                )

            ])
        const globalData = {
            header,
            footer,
            announce
        };

        for (const[key,value] of Object.entries(globalData)) {
            if(value) {
                const jsonValue = JSON.stringify(value,null,2);
                fs.writeFileSync(`src/globalData/${key}.json`, jsonValue);
            }
        }
    } catch(error) {
        console.error('error loading data',error)
        process.exit(1);
    }
}
console.log("FETCH GLOBAL DATA")
fetchGlobalData();



