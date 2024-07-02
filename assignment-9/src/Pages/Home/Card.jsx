import { Helmet } from "react-helmet";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import { useLoaderData, useParams } from "react-router-dom";
import { googleAPIkey } from "./googleAPIkey";
const AnyReactComponent = () => (
  <div style={{ color: "red" }}>
    <FaMapMarkerAlt className="text-4xl"></FaMapMarkerAlt>
  </div>
);

const Card = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const info = data.find((i) => i.id === idInt);
  console.log(info);
  //
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{info.estate_title}|Peaky Motel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Content */}

      <div className="md:grid md: grid-cols-4 gap-6 sm: p-4 min-h-screen mt-12">
        <div className="col-span-3">
          <img src={info.image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{info.estate_title}</h1>
          <br />
          <p className="text-text-base font-normal pb-2">{info.description}</p>
          <hr className="border-dashed" />
          <br />
          <p className="text-lg font-semibold">Location- {info.location}</p>
          <p className="text-lg font-semibold">
            Current Status-{" "}
            <span className="text-lg font-bold text-green-600">
              {info.status}
            </span>{" "}
          </p>
          <br />
          <p className="text-lg font-semibold">
            {"We are providing :"}
            <ul className="p-2 pb-6 font-normal text-lg">
              {info.facilities.map((i) => (
                <li key={i.id}> • {i} </li>
              ))}
            </ul>
          </p>
          <br />
          <div className="flex justify-center">
            <button className=" bg-green-600 text-white btn   md:btn-md lg:btn-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Map */}
      <div
        className="md: max-w-7xl md:mx-auto sm: p-4"
        style={{ height: "500px", width: "full" }}
      >
        <h1 className="m-4 text-4xl text-center font-semibold">
          Check Our Location Here
        </h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIkey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Pointer"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Card;
