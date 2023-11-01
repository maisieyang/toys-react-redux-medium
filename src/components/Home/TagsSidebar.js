import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../../app/reducers/tags";

function TagsSidebar () {
    const dispatch = useDispatch();

    const tags = useSelector((state) => state.tags);
    const isLoading = useSelector((state) => state.tags.isLoading);
    useEffect(() => {
        const fetchTags = dispatch(getAllTags());

        return () => {
          fetchTags.abort();
        };
    }, [dispatch]);

    return (
        <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list">
                {isLoading && <div>Loading...</div>}
                {!tags && tags.map((tag) => <a href="" className="tag-pill tag-default">{tag}</a>)}
            </div>
        </div>
    )
}

export default TagsSidebar;