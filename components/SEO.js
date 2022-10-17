import React, { Fragment } from "react"

const SEO = ({children, title, desc, keywords}) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content = "initial-scale=1.0, width=device-width" />
			</Head>
			{children}
		</Fragment>
	)
}

export default SEO;