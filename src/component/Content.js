import React from 'react';

const Content = () => {
    return (
        <div className=" grid grid-rows-3 gap-4 md:grid-flow-col">
        <div className="menu-card p-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Panta_Ilish.jpg" alt="mutton" className="h-full rounded mb-20 shadow " />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Panta_Ilish</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$50</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://mealplannerpro.com/images/recipes/63703/186624.jpg" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Bhuna Khichuri</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$40</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://thumbs.dreamstime.com/b/fish-popular-food-amongst-people-south-asia-middle-east-especially-bengalis-odias-national-bangladesh-104049913.jpg" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Rice along with Vorta</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$10</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://i.ytimg.com/vi/vX2BndWzY8w/maxresdefault.jpg" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Mishti Doi</h2>
                <p className="mb-2">Crispy, delicious, and nutritious</p>
                <span>$35</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="http://3.bp.blogspot.com/-ErkCAhtVwzo/UlMsanxeBmI/AAAAAAAAF7U/_xptFF36mOo/w1200-h630-p-k-no-nu/borhani.jpg" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Lassi and Borhani</h2>
                <p className="mb-2">Delicious, and nutritious</p>
                <span>$45</span>
            </div>
        </div>

        <div className="menu-card p-12">
            <img src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/01/02/pitha.jpg?itok=oHywn90X&timestamp=1609572028" alt="mutton" className="h-full rounded mb-20 shadow" />
            <div className="center-content">
                <h2 className="text-2xl mb-2">Winter special pithas</h2>
                <p className="mb-2">Healthy, delicious, and nutritious</p>
                <span>$25</span>
            </div>
        </div>

        </div>
    );
};

export default Content;