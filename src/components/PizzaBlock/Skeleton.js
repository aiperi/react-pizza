import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="131" cy="98" r="97" />
        <rect x="0" y="259" rx="10" ry="10" width="280" height="63" />
        <rect x="0" y="338" rx="10" ry="10" width="95" height="30" />
        <rect x="0" y="214" rx="8" ry="8" width="280" height="25" />
        <rect x="164" y="335" rx="8" ry="8" width="110" height="35" />
    </ContentLoader>
)

export default Skeleton