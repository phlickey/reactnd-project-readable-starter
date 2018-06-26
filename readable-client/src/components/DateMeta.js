import React from 'react';
const DateMeta = props =>{
    let {author, timestamp} = props;
    let datePosted = new Date(timestamp);
    return (
        <sub>Posted by: { author } on {datePosted.toDateString()} at {datePosted.toLocaleTimeString()}</sub>
    )
}

export default DateMeta;