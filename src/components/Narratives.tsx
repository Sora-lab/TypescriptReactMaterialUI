import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';


interface narrativeData {
    wsID: string; 
    name: string; 
    last_saved: string;
    narrative_detail: object;
}

interface Props {
    narratives: Array<narrativeData>
}

const Narratives = (props:Props)=>{
    console.log("Narrative", props)
    // Since there is no state to initialize the variables within the function,
    // you must initiate it with empty array, and set the data with props when props are avaiable. 
    // otherwise initial rendering will fail with undefined object to map().
    let data:Array<narrativeData>=[];
    if(props.narratives){
        data = props.narratives;
    }
    // make url from work space ID
    const url = (wsid:string)=> "https://ci.kbase.us/narrative/" + wsid;

    const columns = ["Title", "Created", "Last saved"];
    
    {/* <pre>{ JSON.stringify(props.narratives) }</pre> */}
    return (
        <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((item) => (
                        <TableCell
                            key={item}
                            sortDirection="asc"
                        >
                            <TableSortLabel
                                active={true}
                                direction="asc"
                            >
                            {item}
                            </TableSortLabel>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map( (narrative) =>(
                    <TableRow id={narrative.wsID}>
                        <TableCell><a target="blank" href={url(narrative.wsID)}>{narrative.name}</a></TableCell>
                        <TableCell>{narrative.last_saved}</TableCell>
                        <TableCell>{narrative.last_saved}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </Paper>
    )
}
export default Narratives;