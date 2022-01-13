import React from "react";
import { useForm } from "react-hook-form";
const CreatePost = () => {
  const {
    register,
    handleSubmit,
    reset,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://secret-castle-49313.herokuapp.com/addPost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("add successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center text-danger">You Post</h1>
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>

              <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("Title")}
                  placeholder="Title"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("Description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

               

                <input
                  {...register("manImg", { required: true })}
                  placeholder="Writer Img"
                  
                  className="p-2 m-2 w-100 input-field"
                />

              
                <input
                  {...register("name", { required: true })}
                  placeholder="Writer Name"
                  
                  className="p-2 m-2 w-100 input-field"
                />

                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Publish"
                  className="btn btn-info w-50 mb-5"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
