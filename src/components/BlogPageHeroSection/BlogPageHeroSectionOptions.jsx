import GradientSelect from "../GradientSelect/GradientSelect";

export default function BlogPageHeroSectionOptions({options, updateComponent}) {
    let {title, name, gradient, image} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="title" value={title} onChange={(handleChange)} />

            <label className="block">Name:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="name" value={name} onChange={(handleChange)} />

            <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange} />

            <label className="block">Image Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image" value={image} onChange={(handleChange)} />

        </div>
    )
}