import PropTypes from "prop-types";
import { getStoredBooks } from "../../Utility/LocalStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { Tooltip } from "@material-tailwind/react";

const PageRelode = () => {
  const house = getStoredBooks("ReadList");
  console.log(house);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="mt-12">
      <BarChart

        width={1350}
        height={500}
        data={house}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <Tooltip></Tooltip>
        <Tooltip></Tooltip>
        <XAxis dataKey={"bookName"} />
        <YAxis></YAxis>

        <Bar dataKey="totalPages" fill="#8884d8"  shape={<TriangleBar />} label={{ position: 'top' }}>
          {house.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};
PageRelode.propTypes = {
  house: PropTypes.object.isRequired,
};
export default PageRelode;
