import React from 'react';
import ButtonComponent from '../../components/button';

export default function LetsWorkTogather() {
    return (
        <section className="discuss-section">
            <div className="container h-100">
                <div className="row align-items-center h-100">

                    <div className="col-lg-8 col-md-12 text-lg-start text-center">
                        <h2 className="discuss-title">
                            LET’S DISCUSS ABOUT HOW WE CAN  
                            HELP MAKE YOUR BUSINESS BETTER
                        </h2>
                    </div>

                    <div className="col-lg-4 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                        <ButtonComponent
                         name={"Let's Work Together"}
                         path={"/contact"}
                         className={"lets-work-btn"}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
