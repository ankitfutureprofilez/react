import { Link } from "react-router-dom";

function Left() {
    return ( 
        <section id="Left">
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                    <Link to='/product'>
                    <button className="btn btn-primary mt-2 mb-2">Product</button>

                    </Link>
                    <Link to="/productlist ">
                    <button className="btn btn-primary mt-2 mb-2">Product Listing</button>

                    </Link>
          
                      </div>
                </div>
            </div>
        </section>
     );
}

export default Left;