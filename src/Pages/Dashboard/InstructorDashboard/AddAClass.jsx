import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const image_hosting_token = import.meta.env.VITE_IMG_API;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const { name, email, availableSeats, price } = data;

    axios
      .post("http://localhost:5000/allClass", data)
      .then((response) => {
        console.log(response.data);
        axios.post(image_hosting_url, formData).then((res) => {
          const imgRes = res.data;
          if (imgRes.success) {
            const imgURL = imgRes.data.display_url;
            const newItem = {
              name,
              email,
              availableSeats,
              price,
              image: imgURL,
            };
            console.log(newItem);
          }
        });
        Swal.fire("Class Added", "Your Class Add Successfully", "success");
      })
      .catch((error) => {
        console.error(error);
      });
    // reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full  mx-auto p-8 border border-gray-300 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Add A Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="name"
              {...register("name", { required: true })}
              name="name"
              placeholder="Class Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered  w-full"
            />
          </div>
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={user.displayName}
                {...register("name", { required: false })}
                name="name"
                placeholder="Instructor Name"
                className="input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={user.email}
                {...register("email", { required: false })}
                name="email"
                placeholder="Instructor Email"
                className="input"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seat</span>
            </label>
            <input
              type="text"
              {...register("number", { required: true })}
              name="number"
              placeholder="Available Seats"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              {...register("Price", { required: true })}
              name="Price"
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-blue-600 text-white"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
