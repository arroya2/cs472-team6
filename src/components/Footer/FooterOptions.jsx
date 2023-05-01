import { Gradients } from '../../utils/utils';

export default function FooterOptions({ options, updateComponent }) {
  let {
    userName,
    creator,
    home,
    aboutUs,
    contact,
    linkedIn,
    twitter,
    instagram,
    gradient,
  } = options;

  function handleChange(e) {
    updateComponent({ [e.target.name]: e.target.value });
  }

  return (
    <div className="p-3">
      <label className="block">Portfolio Name:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="userName"
        value={userName}
        onChange={handleChange}
      />

      <label className="block">Designed by:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="creator"
        value={creator}
        onChange={handleChange}
      />

      <label className="block">Home:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="home"
        value={home}
        onChange={handleChange}
      />

      <label className="block">About us:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="aboutUs"
        value={aboutUs}
        onChange={handleChange}
      />

      <label className="block">Contact:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="contact"
        value={contact}
        onChange={handleChange}
      />

      <label className="block">LinkedIn:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="linkedIn"
        value={linkedIn}
        onChange={handleChange}
      />

      <label className="block">Twitter:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="twitter"
        value={twitter}
        onChange={handleChange}
      />

      <label className="block">Instagram:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="instagram"
        value={instagram}
        onChange={handleChange}
      />
      <label className="block">Gradient:</label>
      <select
        value={gradient}
        name="gradient"
        onChange={handleChange}
        className="p-2 rounded-lg bg-gray-200"
      >
        {Array.from(Object.entries(Gradients)).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
