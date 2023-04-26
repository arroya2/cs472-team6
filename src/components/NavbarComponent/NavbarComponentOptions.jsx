export default function NavbarComponentOptions({ options, updateComponent }) {
  let { userName, home, services, projects, about, blog, letsTalk } = options;

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

      <label className="block">Home:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="home"
        value={home}
        onChange={handleChange}
      />

      <label className="block">Services:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="services"
        value={services}
        onChange={handleChange}
      />

      <label className="block">Projects:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="projects"
        value={projects}
        onChange={handleChange}
      />

      <label className="block">About:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="about"
        value={about}
        onChange={handleChange}
      />

      <label className="block">Blog:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="blog"
        value={blog}
        onChange={handleChange}
      />

      <label className="block">Let's Talk:</label>
      <input
        className={`block mb-3 p-2 rounded-lg bg-gray-200`}
        type="text"
        name="letsTalk"
        value={letsTalk}
        onChange={handleChange}
      />
    </div>
  );
}
