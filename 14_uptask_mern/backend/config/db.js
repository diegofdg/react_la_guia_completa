import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://usuario:password@cluster0.rofwoii.mongodb.net/uptask?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB conectado en ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
}

export default conectarDB;