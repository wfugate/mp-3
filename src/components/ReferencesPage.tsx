import Layout from './Layout';
import styled from 'styled-components';

const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family : 'Space Grotesk', sans-serif;
    border: 2px #d27d54 solid;
`;
const StyledCaption = styled.caption`
    font-family : 'Space Grotesk', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    border: #d27d54 2px solid;
    background-color: #e7b9ab;
    padding: 2vw;
    text-align: center;
    color: #6b6158;
`;
const StyledTableHead = styled.th`
    font-family : 'Space Grotesk', sans-serif;
    border: 2px #d27d54 solid;
    padding: 1vw;
`;

const StyledTableRow = styled.tr`
    padding: 0;
    margin: 0;
    text-align: center;
    color: #6b6158;
`;

const StyledTableCell = styled.td`
    font-family : 'Space Grotesk', sans-serif;
    font-size: calc(1em + 0.2vw);
    border: 2px #d27d54 solid;
    text-align: center;
    padding: 3vw;
    word-break: break-word;
    

`;
export default function ReferencesPage() {
    return (
        <Layout>
            <TableContainer>
            <StyledTable>
                <StyledCaption>References</StyledCaption>
                <StyledTableRow>
                    <StyledTableHead>Name</StyledTableHead>
                    <StyledTableHead>Company</StyledTableHead>
                    <StyledTableHead>Contact</StyledTableHead>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell>John Doe</StyledTableCell>
                    <StyledTableCell>Tech Innovators Ltd.</StyledTableCell>
                    <StyledTableCell>(555) 123-4567  johndoe@techinnovators.com</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell>Emily Carter</StyledTableCell>
                    <StyledTableCell>QuantumByte Technologies</StyledTableCell>
                    <StyledTableCell>(555) 789-1234  ecarter@quantumbyte.com</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell>Daniel Hughes</StyledTableCell>
                    <StyledTableCell>NexaSoft Solutions</StyledTableCell>
                    <StyledTableCell>(555) 456-7890  dhughes@nexasoft.com</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                    <StyledTableCell>Sarah Lin</StyledTableCell>
                    <StyledTableCell>CloudSphere Innovations</StyledTableCell>
                    <StyledTableCell>(555) 321-6547  slin@cloudsphere.io</StyledTableCell>
                </StyledTableRow>
            </StyledTable>
            </TableContainer>
        </Layout>
    );
}