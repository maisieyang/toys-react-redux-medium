import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../../features/tags";

function TagsSidebar () {
    const dispatch = useDispatch();
    const { tags, status } = useSelector((state) => state.tags);
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
                {status ==='success' && tags.map((tag,index) => <a href="" key={index} className="tag-pill tag-default">{tag}&nbsp;</a>)}
            </div>
        </div>
    )
}

export default TagsSidebar;