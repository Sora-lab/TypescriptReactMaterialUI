import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';



interface narrativeData {
    wsID: string; name: string; last_saved: string;
}

interface Props {
    narratives: Array<narrativeData>
}

const Narratives = (props:Props)=>{
    console.log("Narrative", props)
    let data = props.narratives

    const columns = ["Title", "Created", "Last saved"];
    
    {/* <pre>{ JSON.stringify(props.narratives) }</pre> */}
    return (
        <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map(item => (
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
                {data.map( narrative =>(
                    <TableRow id={narrative.wsID}>
                        <TableCell>{narrative.name}</TableCell>
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