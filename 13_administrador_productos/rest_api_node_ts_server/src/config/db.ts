import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!,
  {
    dialectOptions: {
      ssl: {
        require: false
      }
    }
  }
)

export default db