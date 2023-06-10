import React from 'react';

const DefaultPropsExample = ({name}) => {
    return <div> 안녕하세요, 제 이름은 {name} 입니다.</div>
};

DefaultPropsExample.defaultProps = {
    name: '서정준'
};


export default DefaultPropsExample