import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google DNS to bypass ISP/DNS SRV issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://cartest:cartech@cluster0.zmqe6nc.mongodb.net/carRentalServicesTesting", {
            family: 4,
            serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
        });
        console.log("✅ Connected to MongoDB Atlas");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        if (err.message.includes('ECONNREFUSED') || err.message.includes('querySrv')) {
            console.error("TIP: Your network is still blocking MongoDB Atlas. Try a different WiFi or mobile hotspot.");
        }
        // Don't exit immediately, let it try to restart
    }
}
