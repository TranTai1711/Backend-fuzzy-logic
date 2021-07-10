import mongoose from 'mongoose'

export interface ProductInput {
    name: string,
    price: number,
    desc: string,
    rates: number,
    brand: string
}

const productSchema = new mongoose.Schema<ProductInput>({
    name : {
        type : String,
        required: true
    },
    price: {
        type: Number,
        required:true
    },
    desc: {
        type: String,
        required:true
    },
    rates: {
        type: Number,
        required:true
    },
    brand: {
        type: String,
        required:true
    },
})

export default mongoose.model<ProductInput>("Product", productSchema)