import React from "react";

function Section({children}){

    return (
        <section className=" pt-5 container bg-light bg-opacity-25 rounded-5">
            <div>
                {children}
            </div>
        </section>
    )
}

export default Section;