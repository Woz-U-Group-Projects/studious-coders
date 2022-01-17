async function main(){
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://test:h5VfLwJWJl1TJalm@gamer-gate-game-db.itp7x.mongodb.net/Gamer-Gate-Game-DB?retryWrites=true&w=majority'

const client = new MongoClient(uri);

try{
    await client.connect();
    console.log('connected');
    await createListing(client, {

     firstname:document.getElementById('firstName').value,
     lastname: document.getElementById('lastName').value,
     email:    document.getElementById('email').value,
     password: document.getElementById('password').value
     
  })
    

}catch(e){
    console.error(e);
}finally {
    await client.close();
}
}


main().catch(console.error);




















/*
const {MongoClient} = require('mongodb');

async function main(){}
 
    const uri = 'mongodb+srv://test:h5VfLwJWJl1TJalm@gamer-gate-game-db.itp7x.mongodb.net/Gamer-Gate-Game-DB?retryWrites=true&w=majority'

    const client = new MongoClient(uri);

    try{
        await client.connect();

        

    }catch(e){
        console.error(e);
    }finally {
        await client.close();
    }
}



async function createListing(client, newListing) {
    const result  = await client.db("Gamer-Gate").collection("App-Users").insertOne(newListing);

;
}

async function listDatabases(client)
{
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}
*/


async function createListing(client, newListing) {
    const result  = await client.db("Gamer-Gate").collection("App-Users").insertOne(newListing);
    console.log(`New listing created with the new id ${result.insertedId}`)
  }  