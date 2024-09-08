import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen mt-16">
      <div className="  flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shivam's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This a demo Project. You can sign up with email and password or with
            Google
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                placeholder="Username"
                type="text"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                placeholder="name@gmail.com"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Your password" />
              <TextInput
                placeholder="**********"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link
              to="/signin"
              className="text-blue-500 hover:underline hover:underline-offset-2"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
