import { useState } from "react";

const Hiring = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Administrative",
    role: "employee",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch("https://beautyshop-backend-1.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        return resp.json();
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });

    setFormData({
      name: "",
      email: "",
      department: "Administrative",
      role: "employee",
      password: "",
      image: "",
    });
  }

  return (
    <div className="flex justify-center items-start bg-primary min-h-screen border border-solid-dark-mode">
      <div className="max-w-md w-full p-4">
        <div className="flex items-center justify-center mb-5">
          <h1 className="text-2xl mb-2 font-bold text-textprimary dark:text-primary-light">
            Hiring
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-primary border border-solid border-secondary rounded p-5"
        >
          <h3 className="text-lg text-center font-bold mb-2 text-Heading dark:text-secondary">
            Add new hire
          </h3>
          <div className="flex flex-col space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Employee's Name"
              value={formData.name}
              onChange={handleChange}
              className="py-2 rounded-xl bg-primary border border-solid border-secondary"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 rounded-xl bg-primary border border-solid border-secondary"
              required
            />
            <select
              id="department"
              className="py-2 rounded-xl bg-primary border border-solid border-secondary"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="Administrative">Administrative</option>
              <option value="Product manager">Product manager</option>
              <option value="Sales">Sales</option>
              <option value="Operations">Logistics</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            <select
              id="role"
              className="py-2 rounded-xl bg-primary border border-solid border-secondary"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 rounded-xl bg-primary border border-solid border-secondary"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-textsecondary p-2 rounded-xl font-bold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
