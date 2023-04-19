import React from "react";

export const  GlobalFilter = ({filter, setFilter}) =>{

    return(
        <div className="globalfilter" >
        <span className="search">
           Search:{''}
           <input  className="input" value = {filter || ''} onChange = {(e)  => setFilter(e.target.value)}/>

        </span>
        </div>
    )


}