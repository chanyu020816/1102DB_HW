const db = require('../utilis/database');

const shop_12 = class shop_12 {

        constructor(id, name, local_url, prize) {
                this.id = id;
                this.name = name;
                this.local_url = local_url;
                this.prize = prize;
        }


        static async fetchAll() {
            try {
                let results = await db.query(`SELECT * from jacket_12 ORDER BY id`);
                // console.log('results', JSON.stringify(results.rows));
                return results.rows;
            } catch (err) {
                console.log('error', err);
            }
        }
}

// testing 
//const test = async () => {
//    let results = await shop_12.fetchAll();
//    console.log('test result', JSON.stringify(results))
//}
//test();

module.exports = shop_12;