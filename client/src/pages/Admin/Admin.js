import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfoCounter from "../../components/InfoCounter/InfoCounter";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Volunteer from "../../components/Volunteer/Volunteer";
import { useTabtitle } from "../../hooks/useTabtitle";
import "./Admin.css";
import TableData from "./TableData";

const Admin = () => {
  useTabtitle("Admin");

  const [volunteers, setVolunteers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://forhumanity-server.herokuapp.com/member")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setVolunteers(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const url = `https://forhumanity-server.herokuapp.com/member/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = volunteers.filter(
            (volunteer) => volunteer._id !== id
          );
          setVolunteers(remaining);
        }
      });
  };

  return (
    <div id="adminPage" className="" style={{ minHeight: "80vh" }}>
      <h1 className="container text-center my-5">Registerd Vlounteers</h1>
      <InfoCounter volunteers={volunteers} />

      <div className="container-fluid row gx-4 my-5">
        <div className="col-12 col-lg-2">
          <div className="fw-bold d-flex justify-content-center align-items-center my-3">
            <i className="fa fa-plus"></i>
            <p className="my-auto">Add Event</p>
          </div>

          <div
            className="fw-bold d-flex justify-content-center align-items-center"
            style={{ color: "#207FEE" }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto mx-3"
            >
              <path
                d="M8.71242 6.65579C9.09037 6.32864 9.39352 5.924 9.60129 5.46935C9.80906 5.0147 9.91659 4.52067 9.91658 4.02079C9.91658 3.08148 9.54345 2.18065 8.87926 1.51646C8.21506 0.852265 7.31423 0.479126 6.37492 0.479126C5.43561 0.479126 4.53477 0.852265 3.87058 1.51646C3.20639 2.18065 2.83325 3.08148 2.83325 4.02079C2.83325 4.52067 2.94078 5.0147 3.14855 5.46935C3.35632 5.924 3.65947 6.32864 4.03742 6.65579C3.04585 7.10479 2.20458 7.82988 1.6142 8.74435C1.02381 9.65882 0.709295 10.724 0.708252 11.8125C0.708252 12.0003 0.78288 12.1805 0.915718 12.3133C1.04856 12.4462 1.22872 12.5208 1.41659 12.5208C1.60445 12.5208 1.78461 12.4462 1.91745 12.3133C2.05029 12.1805 2.12492 12.0003 2.12492 11.8125C2.12492 10.6853 2.57269 9.60429 3.36971 8.80726C4.16674 8.01023 5.24775 7.56246 6.37492 7.56246C7.50209 7.56246 8.58309 8.01023 9.38012 8.80726C10.1772 9.60429 10.6249 10.6853 10.6249 11.8125C10.6249 12.0003 10.6995 12.1805 10.8324 12.3133C10.9652 12.4462 11.1454 12.5208 11.3333 12.5208C11.5211 12.5208 11.7013 12.4462 11.8341 12.3133C11.967 12.1805 12.0416 12.0003 12.0416 11.8125C12.0405 10.724 11.726 9.65882 11.1356 8.74435C10.5453 7.82988 9.70399 7.10479 8.71242 6.65579ZM6.37492 6.14579C5.95463 6.14579 5.54379 6.02116 5.19433 5.78767C4.84488 5.55417 4.57251 5.22229 4.41167 4.834C4.25084 4.4457 4.20876 4.01844 4.29075 3.60623C4.37274 3.19402 4.57513 2.81538 4.87232 2.51819C5.1695 2.221 5.54814 2.01862 5.96035 1.93662C6.37256 1.85463 6.79983 1.89671 7.18812 2.05755C7.57641 2.21839 7.90829 2.49075 8.14179 2.84021C8.37529 3.18966 8.49992 3.60051 8.49992 4.02079C8.49992 4.58438 8.27604 5.12488 7.87752 5.5234C7.47901 5.92191 6.9385 6.14579 6.37492 6.14579ZM13.2741 6.37246C13.7274 5.86199 14.0235 5.23137 14.1268 4.55653C14.23 3.88169 14.1361 3.19139 13.8562 2.56871C13.5763 1.94603 13.1224 1.41752 12.5491 1.0468C11.9758 0.676078 11.3076 0.478944 10.6249 0.479126C10.4371 0.479126 10.2569 0.553754 10.1241 0.686592C9.99121 0.81943 9.91658 0.999598 9.91658 1.18746C9.91658 1.37532 9.99121 1.55549 10.1241 1.68833C10.2569 1.82117 10.4371 1.89579 10.6249 1.89579C11.1885 1.89579 11.729 2.11968 12.1275 2.51819C12.526 2.91671 12.7499 3.45721 12.7499 4.02079C12.7489 4.39284 12.6503 4.7581 12.4638 5.08005C12.2773 5.402 12.0096 5.66935 11.6874 5.85538C11.5824 5.91595 11.4947 6.00247 11.4327 6.10665C11.3707 6.21083 11.3364 6.32918 11.3333 6.45038C11.3303 6.57063 11.358 6.68965 11.4138 6.79623C11.4695 6.9028 11.5515 6.99342 11.652 7.05954L11.9283 7.24371L12.0203 7.29329C12.8742 7.69826 13.5945 8.33879 14.0964 9.13943C14.5984 9.94008 14.8611 10.8675 14.8537 11.8125C14.8537 12.0003 14.9283 12.1805 15.0611 12.3133C15.194 12.4462 15.3741 12.5208 15.562 12.5208C15.7499 12.5208 15.93 12.4462 16.0629 12.3133C16.1957 12.1805 16.2703 12.0003 16.2703 11.8125C16.2761 10.7255 16.0039 9.65506 15.4795 8.70292C14.955 7.75078 14.1959 6.94856 13.2741 6.37246Z"
                fill="#207FEE"
              />
            </svg>
            <p className="my-auto">Volunteer register list</p>
          </div>
        </div>

        <div
          className="col-12 col-md-9 mx-auto rounded-3 py-4 px-4"
          style={{ backgroundColor: "#E5E5E5" }}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : volunteers.length === 0 ? (
            <div
              className="text-center mx-auto my-5 container-fluid"
              style={{ color: "gray" }}
            >
              <h1>No Volunteer Available !!!</h1>
              <Link to="/register"> Go to Register </Link>
            </div>
          ) : (
            <div
            className="table-responsive-md mx-auto"
            style={{
              backgroundColor: "white",
              margin: "auto auto",
              borderRadius: "10px",
            }}
          >
            <table className="admin-table table text-center my-auto">
              <tbody className="table-dark">
                <tr style={{ borderRadius: "12px" }}>
                  <th scope="col">Name</th>
                  <th scope="col">Event</th>
                  <th scope="col">Date</th>
                  <th scope="col">Mobile</th>
                </tr>
              </tbody>
              <tbody>
                {volunteers.map((volunteer) => (
                  <TableData
                    key={volunteer._id}
                    volunteer={volunteer}
                    handleDelete={handleDelete}
                  ></TableData>
                ))}
              </tbody>
            </table>
          </div>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Admin;

// {isLoading ? (
//   <LoadingSpinner />
// ) : volunteers.length === 0 ? (
//     <div className="text-center mx-auto my-5 container-fluid" style={{color:"gray"}}>
//       <h1>No Volunteer Available !!!</h1>
//       <Link to='/register'> Go to Register </Link>
//     </div>
// ) : (
//   volunteers.map((volunteer) => (
//     <Volunteer
//       key={volunteer._id}
//       volunteer={volunteer}
//       handleDelete={handleDelete}
//     ></Volunteer>
//   ))
// )}

{
  /* <div className="cards my-3">
        {isLoading ? (
          <LoadingSpinner />
        ) : volunteers.length === 0 ? (
            <div className="text-center mx-auto my-5 container-fluid" style={{color:"gray"}}>
              <h1>No Volunteer Available !!!</h1>
              <Link to='/register'> Go to Register </Link>
            </div>
        ) : (
          volunteers.map((volunteer) => (
            <Volunteer
              key={volunteer._id}
              volunteer={volunteer}
              handleDelete={handleDelete}
            ></Volunteer>
          ))
        )}
      </div> */
}
