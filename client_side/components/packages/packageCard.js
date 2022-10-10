import React, { useState } from 'react';

const PackageCards = ({packages}) => {
    const [packagesSt,setPackagesSt] = useState(packages);
    console.log(packagesSt);
    return (
        <div>
            <div>
                <h2>Plans & Pricing</h2>
                <p>Choose the plan that suits you.</p>
            </div>
            <div>
                <button>Monthly</button>
            </div>
            <div>
                {
                    packagesSt.map(packageEl => <div key={packageEl._id}>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PackageCards;