import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { User } from "../../hook/user";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hook/useTitle";

const Login = () => {
  useTitle(Login);
  const { googleSignIn, githubSignIn, signIn, resetPassword } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      console.log(result.user);
      navigate(from, { replace: true });
    });
    console.log(data);
  };

  const handleGoogleUser = () => {
    googleSignIn().then((result) => {
      User(result.user, result.user.photoURL);
      navigate(from, { replace: true });
      console.log(result.user);
    });
  };

  const handleGithubUser = () => {
    githubSignIn().then((result) => {
      navigate(from, { replace: true });
      console.log(result.user);
    });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email).then(() => {
      alert("Please Check your Email");
    });
  };

  return (
    <div className="relative h-full w-full">
      <img
        src="https://www.pe.senac.br/wp-content/uploads/2019/01/372010-PBA7RC-878.jpg"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="m-20 grid grid-cols-1">
          <div className="mx-20 mt-8 p-6 border bg-[#CF5261] border-gray-300 rounded">
            <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="mb-4 font-bold text-white">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block mb-1 font-bold text-white">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#ec6b21] text-white py-2 px-4 rounded hover:bg-[#f07c39] outlined"
              >
                Login
              </button>
            </form>

            <div className="mt-4 flex gap-3">
              <button
                onClick={handleGoogleUser}
                className="border flex gap-3 items-center py-2 px-4 rounded mr-2"
              >
                <FcGoogle /> Sign Up with Google
              </button>
              <button
                onClick={handleGithubUser}
                className="bg-black flex gap-3 items-center text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                <FaGithub /> Sign Up with GitHub
              </button>
            </div>

            {/* Reset Password Button */}
            <div className="mt-4">
              <button
                onClick={handleResetPassword}
                className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
              >
                Reset Password
              </button>
            </div>

            {/* Link to Register Page */}
            <div className="mt-4">
              <Link
                to="/register" // Replace with the link to your register page
                className="text-white hover:underline"
              >
                Don&apos;t have an account? Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
