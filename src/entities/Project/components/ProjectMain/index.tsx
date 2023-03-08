import React from 'react';
import Button from "../../../../shared/components/Button/Button";

interface Props {
    imgSrc: string;
    text: string;
}

const Project = ({text, imgSrc}: Props) => {
    return (
        <div>
            <img style={{width: 60}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffunart.pro%2Fuploads%2Fposts%2F2020-03%2Fthumbs%2F1584644062_5-p-klassnie-fonovie-kartinki-42.jpg&f=1&nofb=1&ipt=f413f0c50137ae5d1f2e7790426eb0f54b00973d8b8b0df77ab6c2268f59bcca&ipo=images" alt="фвывыф"/>
            <p>Зачем мне пенис</p>
            <Button text={'fdsfsdf'} />
        </div>
    );
};

export default Project;