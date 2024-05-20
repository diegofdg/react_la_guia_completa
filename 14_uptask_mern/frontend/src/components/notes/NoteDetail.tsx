import { Note } from "@/types/index"
import { formatDate } from "@/utils/utils"

type NoteDetailProps = {
  note: Note
}

export default function NoteDetail({ note }: NoteDetailProps) {
  return (
    <div className="p-3 flex justify-between items-center">
      <div>
        <p>
          {note.content} por: <span className="font-bold">{note.createdBy.name}</span>
        </p>
        <p className="text-xs text-slate-500">
          {formatDate(note.createdAt)}
        </p>
      </div>


      <button
        type="button"
        className="bg-red-400 hover:bg-red-500 p-2 text-xs text-white font-bold cursor-pointer transition-colors"
        onClick={() => { }}
      >Eliminar</button>

    </div>
  )
}
