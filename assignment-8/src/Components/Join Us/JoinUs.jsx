const JoinUs = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-96">
        <h1 className="text-4xl font-medium mb-4">Join Us Now</h1>
      <div className="w-96">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Enter Your Mail" />
        </label>
        <br />
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Enter Your Password"
          />
        </label>
        <br />
        <div className="flex justify-center">
          <button className="  btn btn-active btn-accent text-xl font-medium text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
