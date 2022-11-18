import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <p>oops not found</p>
      <Link to="/">Homepage</Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
