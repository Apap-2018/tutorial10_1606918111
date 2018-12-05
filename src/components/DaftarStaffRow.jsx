import React from 'react';
import { Link } from "react-router-dom";

export const DaftarStaffRow = (props) => {
    return (
        <tbody>
            {props.listStaff.map(staff => {
                console.log(staff)
                return (
                    <tr key={staff.id}>
                        <td>{staff.nama}</td>
                        <td>{staff.jenis}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}