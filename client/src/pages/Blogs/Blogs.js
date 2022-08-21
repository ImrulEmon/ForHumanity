import React from "react";
import { useForm } from "react-hook-form";
import { useTabtitle } from "../../hooks/useTabtitle";

const Blogs = () => {
  useTabtitle("Blogs");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <section className="" style={{ minHeight: "75vh" }}>
      <div className="container-fluid py-5">
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>

        <label for="name" class="form-label">Your Name</label>
          <input
          class="form-control my-3"
          id="name"
            type="text"
            placeholder="Name"
            {...register("writer")}
            required
          />

        <label for="blog" class="form-label my-3">Write Your Post</label>
          <textarea class="form-control" id="blog" rows="3" placeholder="Your Post"  {...register("blog")} required/>
          

          <input value="Post" className="my-3 btn btn-dark w-100" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Blogs;
