import GradientSelect from "../GradientSelect/GradientSelect";

export default function CtaSection2Options({ options, updateComponent }) {
    let {link, text, button, gradient} = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">link:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="link" value={link} onChange={(handleChange)} />
        <label className="block">Text:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text" value={text} onChange={(handleChange)} />
        <label className="block">Button:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="button" value={button} onChange={(handleChange)} />
        <GradientSelect name={"gradient"} value={gradient} handleChange={e => handleChange(e)} />
      </div>
    )
  }