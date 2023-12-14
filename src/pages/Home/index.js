import React from "react";
import Banner from "../../features/articleManagement/ui/Banner";
import Article from "../../features/articleManagement/ui/Article";
import PopularTags from "../../features/articleManagement/ui/PopularTags";



function Home() {
    return (
        <div className="home-page">
            <Banner />
            <div className="container page">
                <div className="row">
                    <Article />
                    <div className="col-md-3">
                        <PopularTags />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;