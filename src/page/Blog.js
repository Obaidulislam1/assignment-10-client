import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-auto mt-5">

                <div className="card-body">
                    <h2 className='text-center text-xl font-bold'>What is cors</h2>
                    <p>Cross origin Resource sharing is an http header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. cors also relies on a mechanism by which browsers make a preflight request to the server hosting the cross-origin resource in order to check that the server will permit the actual request. In that preflight the browser sends headers that indicate the http method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-auto mt-5">

                <div className="card-body">
                    <h2 className='text-center text-xl font-bold'>Why are you using firebase ? What other option do you have to implement  authentication</h2>
                    <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.Built by the same team that developed Google Sign-in, Smart Lock and Chrome Password Manager, Firebase security applies Google's internal expertise of managing one of the largest account databases in the world.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-auto mt-5">

                <div className="card-body">
                    <h2 className='text-center text-xl font-bold'>How does the private route work</h2>
                    <p>Private Routes in React Router also called Protected Routes require a user being authorized to visit a route read: page. So if a user is not authorized for a specific page they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized which means in this case being authenticated. Authorization goes beyond authentication though. For example a user can also have roles and permissions which give a user access to specific areas of the application.
                    This is a React Router tutorial which teaches you how to use Private Routes with React Router 6. The code for this React Router v6 tutorial can be found over here.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl m-auto mt-5">

                <div className="card-body">
                    <h2 className='text-center text-xl font-bold'>What is node? How does node work?</h2>
                    <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.Scalability latency and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a non-blocking approach to serving requests. In other words Node.js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;