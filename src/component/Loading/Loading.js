import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="d-flex justify-content-center mt-5">
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>

                </div>
            </div>
        </div>
    );
};

export default Loading;