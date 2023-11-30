import React from "react";
import Banner from "../../features/userManagement/ui/home/Banner";
import MainView from "../../features/userManagement/ui/home/MainView";
import TagsSidebar from "../../features/userManagement/ui/home/TagsSidebar";



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