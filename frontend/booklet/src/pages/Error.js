import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from "react-router-dom"
export default function Error() {
    return (
        <div>
        <Hero ></Hero>
        <Banner title="404" subtitle="Page not found error">
        <Link to="/" className="btn-primary">Home</Link>
   </Banner>
        </div>
    )
}
