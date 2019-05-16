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
 

class Narratives extends React.Component<Props, State>{

    constructor(props:Props){
        super(props);
        this.state = {
            narratives: [],
            columns: ["Title", "Created", "Last saved"],
        }
    };


    // make url from work space ID
    url = (wsid:string)=> "https://ci.kbase.us/narrative/" + wsid;

    columns = ["Title", "Created", "Last saved"];
    
   // /* <pre>{ JSON.stringify(props.narratives) }</pre> */
    
    render(){
        return (
            <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        {this.columns.map((item) => (
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
                    {this.state.narratives.map( (narrative) =>(
                        <TableRow id={narrative.wsID}>
                            <TableCell><a target="blank" href={this.url(narrative.wsID)}>{narrative.name}</a></TableCell>
                            <TableCell>{narrative.last_saved}</TableCell>
                            <TableCell>{narrative.last_saved}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Paper>
        )
    }
    
}
export default Narratives;