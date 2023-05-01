import { useRef } from "react";
import GradientSelect from "../GradientSelect/GradientSelect";
import { Gradients } from "../../utils/utils";
import { ProjectOptions } from "./ProjectsComponent"

export default function ProjectsOptions({options, updateComponent}) {
    let {Title, Highlight, Gradient, Description, Projects} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleProjectChange(index, e){
        let newProjects = [...Projects];
        newProjects[index] = {...newProjects[index], [e.target.name]: e.target.value};

        updateComponent({ Projects: newProjects });
    }

    function handleAddProject(){
        let newProjects = [...Projects];
        newProjects.push(new ProjectOptions('Finance Landing Page', 'Landing Page UI Kit', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/ProjectOne.png?raw=true", ''))

        updateComponent({ Projects: newProjects })
    }

    function handleDeleteProject(index){
        let newProjects = [...Projects];
        newProjects.splice(index, 1);

        updateComponent({ Projects: newProjects })
    }

    return (
        <div className="p-3">
            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Title" value={Title} onChange={handleChange} />
            <label className="block">Highlight:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Highlight" value={Highlight} onChange={handleChange} />
            <label className="block">Gradient:</label>
            <select value={Gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Description:</label>
            <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Description" value={Description} onChange={handleChange} />
            <button onClick={handleAddProject} className="options-btn bg-blue-500 hover:bg-blue-700 font-bold text-white">Add Item</button>
            {Projects?.map((Project, index) => <ProjectOption key={index} project={Project} index={index} handleChange={handleProjectChange} handleDelete={handleDeleteProject}  />)}
        </div>
    )
}

function ProjectOption({index, project, handleChange, handleDelete}){
    const { Title, Description, Picture, URL } = project;
    const imageInput = useRef(null);

    // handles updating state (saving the image) after the user has selected an image
    function handleImageImport() {
        if (imageInput !== null && imageInput.current !== null){
            let input = imageInput.current;
            if (input.files !== null && input.files.length > 0){
                const image = input.files[0];
                const reader = new FileReader();

                reader.onabort = () => alert("ERROR: Image could not be imported");
                reader.onerror = () => alert("ERROR: Image could not be imported");
                reader.onload = () => {
                    const imageURL = reader.result || '';
                    handleChange(index, { target: { name: "Picture", value: imageURL } })
                }

                // read the image file as Base64
                reader.readAsDataURL(image);
            }
        }
    }

    // used to click the hidden input element (this allows us to have a custom file input button)
    function handleSelect(){
        if (imageInput !== null && imageInput.current !== null){
            let input = imageInput.current;
            input.click();
        }
    }

    return (
        <details className="mt-3">
            <summary className="font-bold">Project {index+1}: {Title}</summary>
            <div className="p-2">
                <label className="options-label">Title:</label>
                <input type="text" className="options-input" name="Title" value={Title} onChange={e => handleChange(index, e)} />
                <label className="options-label">Description:</label>
                <input type="text" className="options-input" name="Description" value={Description} onChange={e => handleChange(index, e)} />
                <label className="options-label">URL:</label>
                <input type="text" className="options-input" name="URL" value={URL} onChange={e => handleChange(index, e)} />
                <label className="options-label">Image:</label>
                <input name="Picture" type="text" className="options-input" value={Picture} onChange={e => handleChange(index, e)}/>
                <p className="font-bold">OR</p>
                <input ref={imageInput} name="picture" onChange={handleImageImport} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg"></input>
                <button className="options-btn" onClick={handleSelect}>Select Image</button>
                <button onClick={() => handleDelete(index)} className="options-btn bg-red-500 hover:bg-red-700 font-bold text-white">Delete Project {index + 1}</button>
            </div>
        </details>
    )
}