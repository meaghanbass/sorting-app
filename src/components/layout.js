import React from 'react';

const Layout = ({children}) => {
        return (
            <React.Fragment>
                <main>
                    {/* <div className="wrapper"> */}
                        {children}
                    {/* </div> */}
                </main>
            </React.Fragment>
        );
}

export default Layout;