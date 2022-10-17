import React, {useState, useEffect} from "react";

export const InvitationContext = React.createContext();

export const Invitation = ({children}) => {
	const [value, setValue] = useState();
	return (
		<InvitationContext.Provider value={{
			value,setValue
		}}>
			{children}
		</InvitationContext.Provider>
	);
}

export default InvitationContext;
