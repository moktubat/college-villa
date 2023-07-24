import axios from "axios";

export const User = (user, url) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: url
  };

  axios
    .put(`https://college-villa-server-side.vercel.app/users/${user?.email}`, currentUser)
    .then((data) => console.log(data));
};