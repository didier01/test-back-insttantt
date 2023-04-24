import mongoose from "mongoose"

export async function conection() {
  try {
        let query = process.env.DATABASE || 'mongodb+srv://admin:admin123@clusterinsttantt.qihtkv4.mongodb.net/test'
        await mongoose.connect(query, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   useCreateIndex: true,
        //   useFindAndModify: false,
        });
    
        console.log('bd connected!!!');
      } catch (error) {
        console.log(error);
        throw new Error("error al iniciar la bd");
      }
}

