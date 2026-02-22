import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    console.log(id);

    return (
        <div className="blog-details">
           {isLoading && <div>Loading...</div>}
           {error && <div>{ error.message }</div>}
           { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
            </article>
           )}
        </div>
    );
}

export default BlogDetails; 