import React from 'react';

const Blog = () => {
    return (
        <div className=' text-center mx-1 mx-md-5 mt-2 pb-5 blog'>
            <h1> 4 Random Question </h1>
            <hr />
            <div>
                <h3>what is cors?</h3>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request</p>
            </div>
            <hr />
            <div>
                <h3>Why are you using firebase? What other option do you have to implement authentication?</h3>
                <p>Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.</p>
                <h5>Alternative option</h5>

                <p>
                    MongoDB. <br />
                    Oracle Database.<br />
                    Amazon Redshift.<br />
                    DataStax Enterprise.<br />
                    Redis Enterprise Cloud.<br />
                    Cloudera Enterprise Data Hub.<br /></p>
            </div>
            <hr />
            <div>
                <h3>How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.</p>
            </div>
            <hr />
            <div>
                <h3>What is node? How does node work?</h3>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>

        </div>
    );
};

export default Blog;