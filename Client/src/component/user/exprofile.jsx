import { useEffect, useState } from 'react';
import AXIOS from 'axios';
import { Container, Table } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";

export default function Exprofile() {
    const idn = sessionStorage.getItem('userid');
    const [record, setRecord] = useState([]);

    useEffect(() => {
        const url = `http://localhost:8000/expviews/${idn}`;
        AXIOS.get(url).then((res) => {
            setRecord(res.data);
        });
    }, []);

    const deleteExperience = (userId) => {
        let ans = window.confirm("Do you want to delete this record?");
        if (ans) {
            const url = `http://localhost:8000/deleteexperience/${userId}`;
            AXIOS.get(url).then((res) => {
                window.location.reload();
                alert(res.data);
            });
        } else {
            alert('Deletion Cancelled');
        }
    };

    return (
        <Container>
            <Table striped bordered hover>
                <thead><br></br>
                    <tr>
                        <th>Company Name</th>
                        <th>Experience</th>
                        <th>Works</th>
                        <th>Experience-Cirtificate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((ls) => (
                        <tr key={ls._id}>
                            <td>{ls.cname}</td>
                            <td>{ls.expr}</td>
                            <td>{ls.work}</td>
                            <td>
                                <a href={`http://localhost:8000/${ls.proof}`} download>
                                    Download 
                                </a>
                            </td>
                            <td>
                                <MdDelete
                                    onClick={() => deleteExperience(ls._id)}
                                    style={{ color: "black", fontSize: "20px" }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
