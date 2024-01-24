import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                Your code seems to be mostly correct, but there is a small issue in the Breadcrum component. It looks like you are trying to access product.category and product.name directly in the component without passing them as props. Make sure that you receive these values as props from the parent component.
                </p>
                <p>
                rect, but there is a small issue in the Breadcrum component. It looks like you are trying to access product.category and product.name directly in the
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;