import { useState } from "react"

const NoteForm = () => {
    
    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        desription: ''
    })

    const [isFormVisible, setIsFormVsible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.taret.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //Validacion
        if(!formData.title || !formData.description) return
        //Crear le objeto de la nota
        const NewNote = {id: Date.now(), ...formData}

        //Agregar notas al estado (state)
        setNotes({newNote, ...notes})

        //Reset de campos de formData
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    return(
        <>
            <button>
                className="w-full bg-gray-100 border border-gray-300"
            </button>
        </>
    )
}

export default NoteForm;