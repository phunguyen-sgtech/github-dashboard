import React from 'react'
import MyCard from './MyCard'

const RepoItem = ({ name, description, htmlUrl }) => {
    return <MyCard name={name} description={description} url={htmlUrl} />
}

export default RepoItem