import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SomethingItem from "../components/somethingItem"

const SomethingsPage = ({ data }) => {
    const posts = data?.allSanityPost?.nodes.map(item => {
        return {
            title: item.title,
            text: item.body[0]?.children[0]?.text || 'No reason!!'
        }
    });

    const [active, setActive] = useState();

    const clickHandler = index => {
        setActive(index);
    }

    return (
        <Layout>
            <div className="project-container">
                <div className="project">
                    <h1>Something I didn't like</h1>
                    <p>
                        Sounds dramatic right?
                    </p>
                    <p>
                        Not really. When my son was three, he went through a phase where every night,
                        when I tucked him in, he'd want to share a particular injustice he suffered
                        or just something that bothered him that day.
                    </p>
                    <p>
                        Every night, he'd get tucked into bed and say,
                    </p>
                    <p>
                        "Dad, something I didn't like was..."
                    </p>
                    <div className='somethings-container'>
                        {posts.map((post, index) =>
                            <SomethingItem
                                clickHandler={() => clickHandler(index)}
                                active={index === active}
                                post={post}
                                key={`something-${index}`}
                            />
                        )}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default SomethingsPage

export const query = graphql`
query MyQuery {
                    allSanityPost(filter: {categories: {elemMatch: {id: {eq: "-a50698d8-fb68-52b8-b1fd-529ede979f32"}}}}) {
                    nodes {
                    title
        body {
                    children {
                    text
                }
        }
      }
    }
  }
  
`