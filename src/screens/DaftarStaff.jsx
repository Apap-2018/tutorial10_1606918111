import React from 'react';
import { DaftarStaffRow } from '../components/DaftarStaffRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarStaff extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaff: []
		}

		Appointment.getAllStaffFarmasi().then(response => {
			this.setState({
				loading: false,
				listStaff: response.result
			})
		})
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf" header={['Nama Staf Farmasi', 'Jenis staf']}>
                    <DaftarStaffRow listStaff={this.state.listStaff}/>
                </TableContainer>
            )
        }
	}
}