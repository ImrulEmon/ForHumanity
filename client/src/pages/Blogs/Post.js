import React from "react";
import { useForm } from "react-hook-form";
import { useTabtitle } from "../../hooks/useTabtitle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../components/Firebase/firebase.init";
import { toast } from 'react-toastify';

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
    toast.info('Posting...')
    fetch("https://forhumanity-server.herokuapp.com/blog", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        toast.success('Successfully Posted')
        reset();
      }
      else{
        toast.error('Something Went Wrong');
      }
    });
  }
// console.log(user)
    return (
        <section className="" style={{ minHeight: "75vh",overflow:"hidden" }}>
      <div className="container py-5" style={{maxWidth:"900px"}}>
        <form className="form-control fw-bold " onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="title" className="form-label animate__animated animate__heartBeat">Blog Title</label>
          <input
          className="form-control my-3 animate__animated animate__pulse"
          id="title"
            type="text"
            placeholder="Title"
            {...register("title")}
            required
          />
        <label htmlFor="name" className="form-label animate__animated animate__heartBeat">Your Name</label>
          <input
          className="form-control my-3 animate__animated animate__pulse"
          id="name"
            type="text"
            placeholder={user?.displayName.toUpperCase()}
            {...register("writer")}
            required
            
          />

        <label htmlFor="blog" className="form-label my-3 animate__animated animate__heartBeat">Write Your Post</label>
          <textarea className="form-control animate__animated animate__pulse" id="blog" rows="3" placeholder="Your Post"  {...register("blog")} required style={{minHeight:"200px"}}/>
          

          <input value="Post" className="my-3 fw-bold btn btn-dark w-100 post-btn animate__animated animate__pulse" type="submit" />
        </form>
      </div>
    </section>
    );
};

export default Post;