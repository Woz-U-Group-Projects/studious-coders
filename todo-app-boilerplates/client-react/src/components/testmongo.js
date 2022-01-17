const mongo = import('../server-express-mongodb/routes/mongofile.js')
const usersSchema = import('../server-express-mongodb/models/usersSchema.js')

const connectToMongoDB = async () => {
    await mongo.then(async (mongoose) => {
    try{
      console.log('Connected to mongodb!')
      
      const user={
        email: 'test@gmail.com',
        firstname: 'Anthony',
        lastname: 'Malone',
        password: 'yeet123'
    
      }
      await new usersSchema(user).save()
    } finally
      {
      mongoose.connection.close()
      }
  
    })
  }
  connectToMongoDB()