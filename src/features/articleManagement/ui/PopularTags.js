import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags,chooseFeedTag } from "../model/tags";

function PopularTags () {
    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.tags);
    // useEffect(() => {
    //     dispatch(getAllTags());
    // },[dispatch]);

    useEffect(() => {
      const fetchTags = dispatch(getAllTags());
  
      return () => {
        fetchTags.abort();
      };
    }, [dispatch]);

    const handleFeedTag = (tag) => {
        dispatch(chooseFeedTag({ feedTag: tag }));
    };

    return (
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">
            {tags &&
              tags.length &&
              tags.map((tag) => (
                <button
                  key={tag}
                  className="tag-pill tag-default"
                  type="button"
                  onClick={handleFeedTag(tag)}
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>
      );
}

export default PopularTags;