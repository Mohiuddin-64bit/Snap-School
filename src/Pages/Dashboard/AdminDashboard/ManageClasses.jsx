import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const ManageClasses = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allClass").then((res) => {
      const data = res.data;
      setDatas(data);
    });
  }, [datas]);
  // const [isModalOpen, setIsModalOpen] = useState(false);


  const handleApproved = (id) => {
    fetch(`http://localhost:5000/allClass/approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Approved!", "Class Is Approved", "success");
          console.log(data);
        }
      });
  };
  const handleDenied = (id) => {
    fetch(`http://localhost:5000/allClass/denied/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire("Denied!", "Class Is Denied", "success");
          console.log(data);
        }
      });
  };


  const onSubmit = (data) => {
    console.log(data);
    // setIsModalOpen(false);
    reset();
  };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // }
  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

  return (
    <div>
      <div className="w-full">
        <div className="overflow-x-auto w-full ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th></th>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.instructorName}</td>
                  <td>{item.email}</td>
                  <td>{item.availableSeats}</td>
                  <td>${item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    {item.status === "Approved" ? (
                      <div className="flex items-center gap-3">
                        <button className="btn btn-disabled">Approved</button>
                        <button
                          onClick={() => handleDenied(item._id)}
                          className="btn btn-ghost bg-blue-600 text-white"
                        >
                          Denied
                        </button>
                      </div>
                    ) : item.status === "Denied" ? (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleApproved(item._id)}
                          className="btn btn-ghost bg-blue-600 text-white"
                        >
                          Approved
                        </button>
                        <button className="btn btn-disabled  bg-slate-300">
                          Denied
                        </button>
                      </div>
                    ) : item.status === "pending" ? (
                      <>
                        <button
                          onClick={() => handleApproved(item._id)}
                          className="btn btn-ghost mr-3 bg-orange-600 text-white"
                        >
                          Approved
                        </button>
                        <button
                          onClick={() => handleDenied(item._id)}
                          className="btn btn-ghost bg-blue-600 text-white"
                        >
                          Denied
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleApproved(item._id)}
                          className="btn btn-ghost mr-3 bg-orange-600 text-white"
                        >
                          Approved
                        </button>
                        <button
                          onClick={() => handleDenied(item._id)}
                          className="btn btn-ghost bg-blue-600 text-white"
                        >
                          Denied
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    {item.status === "Denied" ? (
                      <>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => window.my_modal_4.showModal()}
                        >
                          FeedBack
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-sm btn-disabled"
                          onClick={() => window.my_modal_4.showModal()}
                        >
                          FeedBack
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box w-11/12 max-w-5xl"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <input
              type="text"
              {...register("feedback", { required: true })}
              name="feedback"
              placeholder="Feedback"
              className="input input-bordered h-[100px]"
            />
            {errors.feedback && (
              <span className="text-red-600">Feedback is required</span>
            )}
          </div>
          <div className="form-control">
            <button className="btn btn-primary my-5">Send</button>
            
          </div>
            
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
