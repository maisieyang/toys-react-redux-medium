import React from "react";
import Banner from "./Banner";
import MainView from "./MainView";
import TagsSidebar from "./TagsSidebar";



function Home() {
    return (
        <div className="home-page">
            <Banner />
            <div className="container page">
                <div className="row">
                    <MainView />
                    <div className="col-md-3">
                        <TagsSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;