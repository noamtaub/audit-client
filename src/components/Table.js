import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable(props) {
    let {data} = props;
    data.sort((a, b) => {
        return a.payload.pull_request.id - b.payload.pull_request.id
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>URL</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row, index) => {
                        const payload = row.payload;
                        const pullRequest = payload.pull_request;
                        return <TableRow
                            key={index}
                        >
                            <TableCell component="th" scope="row">
                                {pullRequest.id}
                            </TableCell>
                            <TableCell>{payload.action}</TableCell>
                            <TableCell>{pullRequest.title}</TableCell>
                            <TableCell><a href={pullRequest.html_url} rel="noreferrer"
                                          target="_blank">{pullRequest.html_url}</a></TableCell>
                            <TableCell>{new Date(pullRequest.created_at).toLocaleDateString('en-GB')}</TableCell>
                            <TableCell><img width={300} key={index} height={200}
                                            src={`data:image/png;base64, ${row.path}`}
                                            alt="Red dot"/></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
