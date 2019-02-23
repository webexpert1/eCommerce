import React, {Component} from 'react';

export default class Product extends Component {
    state={
        products: []
    }
    render() {
        return(
            <React.Fragment>
                Hello from Product.
                {/* <div className="py-5">
                  <div className="conatiner">
                    
                  <div className="row">
                  
                  </div>
                  </div>Hello from Product.
                </div> */}
            </React.Fragment>
        )
    }
}