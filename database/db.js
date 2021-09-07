import mongoose from 'mongoose';



 const Connection = async (username , password)=>{
    const URL =`mongodb+srv://${username}:${password}@ecommerceweb.phwiv.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`
   try {
    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,'useCreateIndex': true});
    console.log('Database connected Succesfully');
   } catch (error) {
       console.log('Error:',error.message);
   }
    
}
export default Connection;