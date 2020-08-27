import React from 'react'
import MyCard from './MyCard'

const OrgItem = ({ name, description, url, imgUrl }) => {
    return <MyCard name={name} description={description} imgUrl={imgUrl} url={url} />
}

export default OrgItem