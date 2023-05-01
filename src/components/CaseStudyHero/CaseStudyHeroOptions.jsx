import { Gradients } from "../../utils/utils";

export default function CaseStudyHeroOptions({options, updateComponent}){
    let {clientName, projTask, role, location, projPreview, briefDescr, extendDescr, gradient} = options;
    
    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleUpload(m){
        if(m.target.files.length > 0){
            const file = m.target.files[0]
            const reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = () => {
                updateComponent({[m.target.name]: reader.result})
            }
        }
    }
    
    return (
        <div className="pl-3.5 pb-3">
            <details className="pb-1">
                <summary>Header</summary>
                    <div className="pl-4">
                        <label className="block">Project Task:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="projTask" value={projTask}     onChange={handleChange} />

                        <label className="block">Client Name:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="clientName" value={clientName} onChange={handleChange} />

                        <label className="block">Role:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="role" value={role} onChange={handleChange} />

                        <label className="block">Location:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="location" value={location} onChange={handleChange} />
                    </div>
            </details>

            <details className="pt-2">
                <summary>About Project</summary>
                <div className="pl-4">
                    <label className="block">Brief Project Description:</label>
                    <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%] h-24`} type="text" name="briefDescr" value={briefDescr} onChange={handleChange} />

                    <label className="block">Extended Project Description:</label>
                    <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%] h-24`} type="text" name="extendDescr" value={extendDescr} onChange={handleChange} />
                </div>
            </details>

            <label className="block mb-2 pt-4" htmlFor="file_input">Upload Image of your Work:</label>
            <input className="block w-full text-sm text-black cursor-pointer" type="file" name="projPreview" accept="image/png, image/jpeg, image/svg+xml" onChange={e => handleUpload(e)}/>
            <p className="mt-2 ml-1 text-xs pb-4" id="file_input_help">PNG, JPG, or SVG.</p>

            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
        </div>
    )
}