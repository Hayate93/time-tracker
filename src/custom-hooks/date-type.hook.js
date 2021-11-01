import { useContext } from "react";
import DateContext from "../context/date.context";

const useDateType = () => useContext(DateContext);

export default useDateType;