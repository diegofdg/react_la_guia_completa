import type { Request, Response } from "express"
import Note, { INote } from "../models/Note"
import { Types } from "mongoose"

type NoteParams = {
  noteId: Types.ObjectId
}

export class NoteController {
  static createNote = async (req: Request<{}, {}, INote>, res: Response) => {
    res.send("Creando nota...")
  }  
}