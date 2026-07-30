import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://tanweerksh12_db_user:Kashish12@cluster0.snoy2jp.mongodb.net/Fintrack")
    .then(() => console.log("DB CONNECTED"))
}