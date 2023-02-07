// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dbConnect } from '@/utils/mongoose.js'

dbConnect()

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
