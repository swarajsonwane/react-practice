import React , {useState} from 'react'

const EmployeeNode = ({employee}) => {

    const [expand, setExpand] = useState(false);
    return (
        <div style={{marginLeft: "20px", paddingLeft:10, borderLeft: "1px solid black"}}>
            <div onClick={ () => setExpand(!expand)} style ={{cursor: "pointer"}}>
                <strong>{employee.name}</strong>({employee.department})
            </div>

            {expand && employee.reportees.length >0  && (
                <div>
                    {employee.reportees.map( (reportee) =>(
                        <EmployeeNode key = {reportee.id} employee={reportee}/>
                    ))}
                </div>
            )}

        </div>
    )
}
export default EmployeeNode
