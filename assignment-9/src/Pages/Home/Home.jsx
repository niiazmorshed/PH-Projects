import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import "animate.css";
import InfoCard from "./InfoCard";

import { Helmet } from "react-helmet";

const Home = () => {
  const info = useLoaderData();

  return (
    <div className="mt-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home|Peaky Motel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <div className="text-center mt-12 mb-12 sm :p-4">
        <h1 className="text-4xl font-semibold">Our Motels</h1>
        <p className="text-2xl font-normal pt-4">
          Dive into Our Motels Today! <br /> Explore a World Class Experience
          With a Realtime Enjoyments
        </p>
      </div>
      <div  className="md:grid md:grid-cols-3 gap-6 mt-20  ">
        {info.map((i) => (
          <InfoCard key={i.id} info={i}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
