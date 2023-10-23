'use client'

import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import { LinearProgress, TableContainer } from '@mui/material';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const columns = [
  { label: 'S/N', dataKey: 'id' },
  { label: 'Name', dataKey: 'name' },
  { label: 'Mentor', dataKey: 'mentor' },
  { label: 'Progress', dataKey: 'progress' },
  { label: 'Feedback', dataKey: 'feedback' },
];

const VirtuosoTableComponents = {
  // eslint-disable-next-line react/display-name
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} className='my-10'/>
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }}  />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  // eslint-disable-next-line react/display-name
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow className='bg-white shadow'>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align="left"
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

const tables = [
  {
    id: 1,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "5%",
    feedback: "Great"
  },
  {
    id: 2,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "55%",
    feedback: "Great"
  },
  {
    id: 3,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "25%",
    feedback: "Great"
  },
  {
    id: 4,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "55%",
    feedback: "Great"
  },
  {
    id: 5,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "95%",
    feedback: "Great"
  },
  {
    id: 6,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "55%",
    feedback: "Great"
  },
  {
    id: 7,
    name: "Chiamaka Confidence Nwankwo",
    mentor: "Daniel Nssien",
    progress: "45%",
    feedback: "Great"
  },
  // Add more data here
];

const rows = tables.map((table) => {
  return columns.reduce((row, column) => {
    return { ...row, [column.dataKey]: table[column.dataKey] };
  }, {});
});

function rowContent(index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey}>
          {column.dataKey === 'progress' ? (
            <LinearProgress
              variant="determinate"
              value={parseInt(row.progress, 10)} // Parse the progress value as an integer
            />
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
