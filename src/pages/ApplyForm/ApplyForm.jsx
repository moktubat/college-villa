import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ApplyForm = () => {
    const { user, loading } = useContext(AuthContext);
  
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const myApply = {
        image,
        name,
        email: user.email,
        subject,
        phone,
        dateOfBirth,
        address,
      };
  
      try {
        const response = await fetch("http://localhost:5000/colleges", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(myApply),
        });
  
        const data = await response.json();
  
        if (data.insertedId) {
          // Show SweetAlert on successful submission
          Swal.fire({
            title: "",
            text: "Added College Successfully!",
            icon: "success",
            confirmButtonColor: "#05b6d1",
            confirmButtonText: "Added",
          });
  
          // Clear the form inputs after successful submission
          setImage("");
          setName("");
          setSubject("");
          setPhone("");
          setDateOfBirth("");
          setAddress("");
        }
      } catch (error) {
        // Handle any error that occurs during form submission
        console.error("Error submitting the form:", error);
  
        // Show an error message using SweetAlert
        Swal.fire({
          title: "Error",
          text: "An error occurred while submitting the form.",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "OK",
        });
      }
    };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="mt-10 mx-auto bg-[#CF5261] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <form onSubmit={handleSubmit}>
            <label className="font-semibold">Name</label>
            <br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1] text-slate-500"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
            <br />
            <label className="font-semibold">Email</label>
            <br />
            <input
              readOnly
              value={user && user?.email}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1]"
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
            />
            <br />
            <label className="font-semibold">Subject</label>
            <br />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1]"
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
            />
            <br />
            <label className="font-semibold">Phone No.</label>
            <br />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1]"
              type="number"
              name="phone"
              id=""
              placeholder="Phone Number"
            />
            <br />
            <label className="font-semibold">Date of Birth</label>
            <br />
            <input
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1]"
              type="date"
              name="dateOfBirth"
              id=""
              placeholder="Date of Birth"
            />
            <br />
            <label className="font-semibold">Address</label>
            <br />
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 mb-2 px-32 rounded-md border border-bg-[#05b6d1]"
              type="text"
              name="address"
              placeholder="Enter Your Address"
            />
            <br />
            <label className="font-semibold">Image URL</label>
            <br />
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full p-3 mb-3 px-32 rounded-md border border-bg-[#05b6d1]"
              type="text"
              name="image"
              alt=""
              placeholder="Enter Photo URL"
            />
            <br />
            <input
              className="block mx-auto bg-blue-500 hover:bg-blue-700 w-full p-3 mt-4 text-white rounded-md font-bold cursor-pointer"
              type="submit"
              value="Submit"
            />
            <br />
          </form>
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948357.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ApplyForm;
