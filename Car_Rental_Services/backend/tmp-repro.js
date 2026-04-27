import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = 'mongodb+srv://cartest:cartech@cluster0.zmqe6nc.mongodb.net/carRentalServicesTesting';

const main = async () => {
  await mongoose.connect(uri, { dbName: 'carRentalServicesTesting' });
  const user = await mongoose.connection.db.collection('users').findOne({});
  const car = await mongoose.connection.db.collection('cars').findOne({});
  console.log(JSON.stringify({
    user: user ? { _id: user._id, email: user.email || null } : null,
    car: car ? { _id: car._id, make: car.make || car.name || null, model: car.model || null } : null,
  }, null, 2));
  await mongoose.disconnect();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
