import { useRef } from "react";
import { CompanyOptions } from "./TrustedCompaniesComponent";

export default function CompanysSectionOptions({options, updateComponent}) {
    let {Title, Companies} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleCompanyChange(index, e){
        let newCompanies = [...Companies];
        newCompanies[index] = {...newCompanies[index], [e.target.name]: e.target.value};

        updateComponent({ Companies: newCompanies });
    }

    function handleAddCompany(){
        let newCompanies = [...Companies];
        newCompanies.push(new CompanyOptions('Company 1', "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/Logo1.png?raw=true"))
        
        updateComponent({ Companies: newCompanies })
    }

    function handleDeleteCompany(index){
        let newCompanies = [...Companies];
        newCompanies.splice(index, 1);
        
        updateComponent({ Companies: newCompanies })
    }

    
    return (
        <div className="p-3">
            <label className="options-label">Title:</label>
            <input type="text" name="Title" className="options-input" value={Title} onChange={handleChange} />
            <button onClick={handleAddCompany} className="options-btn bg-blue-500 hover:bg-blue-700 font-bold text-white">Add Item</button>
            {Companies.map((Company, index) => <CompanyOption key={index} Company={Company} index={index} handleChange={handleCompanyChange} handleDelete={handleDeleteCompany}  />)}
        </div>
    )
}

function CompanyOption({index, Company, handleChange, handleDelete}){
    const { Name, Picture } = Company;
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
            <summary className="font-bold">Company {index+1}: {Name}</summary>
            <div className="p-2">
                <label className="options-label">Title:</label>
                <input type="text" className="options-input" name="Name" value={Name} onChange={e => handleChange(index, e)} />
                <label className="options-label">Image:</label>
                <input name="Picture" type="text" className="options-input" value={Picture} onChange={e => handleChange(index, e)}/>
                <p className="font-bold">OR</p>
                <input ref={imageInput} name="Picture" onChange={handleImageImport} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg"></input>
                <button className="options-btn" onClick={handleSelect}>Select Image</button>
                <button onClick={() => handleDelete(index)} className="options-btn bg-red-500 hover:bg-red-700 font-bold text-white">Delete Item {index + 1}</button>
            </div>
        </details>
    )
}