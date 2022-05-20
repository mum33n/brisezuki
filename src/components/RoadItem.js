import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoadItem({title}) {
    return(<div className="flex gap-2 mb-2 items-center">
        <FontAwesomeIcon icon="fa fa-spinner"/>
        <span className="fa-solid fa-spinner"></span><div>{title}</div>
    </div>)
};
