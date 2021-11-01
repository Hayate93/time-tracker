import { createContext, useState } from "react";

import DATE_TYPE from "../components/reusable/user-card/date-types";

const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [dateType, setDateType] = useState(DATE_TYPE.DAILY);

    return (
        <DateContext.Provider value={[dateType, setDateType]}>
            {children}
        </DateContext.Provider>
    );
};

export default DateContext;