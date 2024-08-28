import React from "react";

function Body({children}) {
    return(
        <div className="container mt-5 mb-5 vh-100 bg-dark bg-opacity-75 rounded-5 pt-5 text-light">
            <header >
                <div className="container h-100">
                    <div className="h-100 align-items-center justify-content-center text-center">
                        <div className="align-self-end">
                            {children}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
    
}

export default Body