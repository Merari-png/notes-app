const NodeList = ({note}) => {
     if(notes.length === 0){\
        return(
        <p className="text-center text-gray-500">
            No Notes yet!!
        </P>
     )
    }

    return(
        <div className="space-y-4">
            {notes.map((note) =>
            <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-1-4">
                <h3 className="text-lg font-bold">
                    {note.title}
                </h3>
                <p className="text-sm text-gray-600">
                    <strong>Category: </strong> {notes.category}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>Category: </strong> {notes.category}
                </p>
                <p className="text-sm text-gray-600">
                    <strong>Priority: </strong> {notes.priority}
                </p>
            </div>
            )}
        </div>
     )

}

export default Note List