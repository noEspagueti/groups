export const Groups = ({ section_code = "", number_groups = 0 }) => {
    const groupDiv = [];

    for (let i = 1; i <= number_groups; i++) {
        groupDiv.push(i);
    }

    const groupElements = groupDiv.map(pointer => (
        <div className="" id={section_code + pointer} key={pointer}>{"GRUPO " + pointer}</div>
    ));
    
    return (
        <div>
            {groupElements}
        </div>
    );
}
