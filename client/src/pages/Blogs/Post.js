import React from "react";
import { useForm } from "react-hook-form";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../components/Firebase/firebase.init";

const Post = () => {

    useTabtitle("Write a POST");
    const [user] = useAuthState(auth);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    fetch("https://forhumanity-server.herokuapp.com/blog", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        alert("Added Successfully");
        reset();
      }
    });
  }
console.log(user)
    return (
        <section className="" style={{ minHeight: "75vh" }}>
      <div className="container py-5" style={{maxWidth:"900px"}}>
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>

        <label for="title" className="form-label">Blog Title</label>
          <input
          className="form-control my-3"
          id="title"
            type="text"
            placeholder="Title"
            {...register("title")}
            required
          />
        <label for="name" className="form-label">Your Name</label>
          <input
          value={user?.displayName.toUpperCase()}
          className="form-control my-3"
          id="name"
            type="text"
            placeholder="Name"
            {...register("writer")}
            required
            disabled
          />

        <label for="blog" className="form-label my-3">Write Your Post</label>
          <textarea className="form-control" id="blog" rows="3" placeholder="Your Post"  {...register("blog")} required style={{minHeight:"200px"}}/>
          

          <input value="Post" className="my-3 btn btn-dark w-100" type="submit" />
        </form>
      </div>
    </section>
    );
};

export default Post;