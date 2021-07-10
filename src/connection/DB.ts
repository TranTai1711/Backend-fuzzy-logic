import mongoose from 'mongoose'

const mongoUrl = process.env.mongoUrl || '';

export async function Connection(): Promise<void> {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("🧩[Mongo]: MongoDB connected")
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}