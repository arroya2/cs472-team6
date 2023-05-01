import { Gradients } from "../../utils/utils";
import ImageInput from "../ImageInput/ImageInput";


export default function SocialMediaOption({options, updateComponent}){
    let {title, body, imageUrl, gradient, socials, socialCount} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleSocialChange(index, e){
        let newSocial = [...socials];
        newSocial[index] = {...newSocial[index], [e.target.name]: e.target.value};

        updateComponent({socials: newSocial})
    }

    
    return (
        <div className='p-3'>

            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="title" value={title} onChange={(handleChange)} />
            <label className="block">Title Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Body:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="body" value={body} onChange={(handleChange)} />
            {/* <label className="block">Image Link:</label> */}
            <ImageInput label="Image" value={imageUrl} name="imageUrl" handleChange={(e) => handleChange(e)} />

            {/* <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={(handleChange)} /> */}
            
            <details>
            <summary>Socials Options</summary>
            <label className="block">Number of Socials</label>
            <input className="block mb-3 p-2 rounded-lg bg-gray-200" type="number" name="socialCount" value={socialCount} min="0" max="6" onChange={(handleChange)}/>
            {socials.slice(0,socialCount).map((social, index) => {
                    return(
                        <SocialMediaOptions key={index} index={index} social={social} handleSocialChange={handleSocialChange}/>
                    )
                })}
            </details>
        </div>
    )
}
function SocialMediaOptions({social, index, handleSocialChange}) {
    const {imagelink, link} = social;
    return (
        <details>
            <summary>Socials {index + 1}</summary>
            <label className="block"></label>
            <ImageInput label="Image" value={imagelink} name="imagelink" handleChange={(e) => handleSocialChange(index, e)} />
            {/* <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={e => handleSocialChange(index, e)} /> */}
            <label className="block">Reference Link:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="link" value={link} onChange={e => handleSocialChange(index, e)} />            
        </details>
    )
}