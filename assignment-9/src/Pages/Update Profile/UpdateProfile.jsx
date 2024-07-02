import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Provider/ContextProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("password"));
    const name = form.get("name");
    const mail = form.get("email");
    const pass = form.get("password");
    console.log(name, mail, pass);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        toast.success("Profile Updated");
      })
      .catch((error) => {
        console.error(error);
      })
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile|Peaky Motel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className=" hero min-h-screen bg-base-200">
        <div className=" hero-content flex-col md:w-96">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Update Your Profile</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={user.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
