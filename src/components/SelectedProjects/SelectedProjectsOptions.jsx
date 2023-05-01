import { Gradients } from "../../utils/utils";

export default function SelectedProjectsOptions({options, updateComponent}){
    let  {header, descr, image1, image2, projName, projField, caseStudy, caseStudyLink,btn1, btn1Link, btn2, btn2Link, gradient} = options 

    function handleChange(h) {
        updateComponent({ [h.target.name]: h.target.value});
    }

    return (
        <div className="p-3">
            
            <label className="block">Display Header:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200 `} type="text" name="header" value={header} onChange={(handleChange)} />

            <details>
                <summary>Project Details</summary>
                <label className="block pl-4">Project Description:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200 translate-x-3`} type="text" name="descr" value={descr} onChange={(handleChange)} />

            <label className="block pl-4">Project Name:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200 translate-x-3`} type="text" name="projName" value={projName} onChange={(handleChange)} />

            <label className="block pl-4">Project Field(Subject):</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200 translate-x-3`} type="text" name="projField" value={projField} onChange={(handleChange)} />
            </details>

            <details>
                <summary>Button Options</summary>
                <details className="translate-x-4">
                    <summary>Left Button</summary>
                    <label className="block ">Left Button Text:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="btn1" value={btn1} onChange={(handleChange)} />

                    <label className="block">Left Button Link:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="btn1Link" value={btn1Link} onChange={(handleChange)} />
                </details>

                <details className="translate-x-4">
                    <summary>Right Button</summary>
                    <label className="block">Right Button Text:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="btn2" value={btn2} onChange={(handleChange)} />

                    <label className="block">Right Button Link:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="btn2Link" value={btn2Link} onChange={(handleChange)} />
                </details>

                <details className="translate-x-4">
                    <summary>Center Button(Large Screens)</summary>
                    <label className="block">Center Button Text:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="caseStudy" value={caseStudy} onChange={(handleChange)} />

                    <label className="block">Center Button Link:</label>
                    <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="caseStudyLink" value={caseStudyLink} onChange={(handleChange)} />
                </details>

                
            </details>

            
            <details>
                <summary>Images</summary>
                <label className="block">Image #1:</label>
                <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image1" value={image1} onChange={(handleChange)} />

                <label className="block">Image #2:</label>
                <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image2" value={image2} onChange={(handleChange)} />
            </details>


            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>

        </div>
    )


}