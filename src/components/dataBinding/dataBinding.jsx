

import React from 'react';
import './dataBinding.css';


export function DataBinding() {

    //     var Name="LG";
    // var Price=prompt("Enter a Price");

    // var sales = [12000, 34000, 23000, 45000, 67000, 34200, 70000];

    var menus=["DEV","Testing","Prod","Automation","SIT","UAT","UI"]


    return (

        <div>
<ul>
            {
            menus.map(menu=><li key={menu}>{menu}</li>)
}
</ul>
        </div>
    );


}




