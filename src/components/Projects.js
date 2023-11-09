import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const screwdriverWrench = <FontAwesomeIcon className='file-svg' icon={faScrewdriverWrench} />;

export default function Projects(props) {
    return (
        <div className='projects'>
            <h2>Under Construction!</h2>
            {screwdriverWrench} 
        </div>
    )
}