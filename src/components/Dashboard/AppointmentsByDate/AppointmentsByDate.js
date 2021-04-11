import React from 'react';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            <p>Total appointments {appointments.length}</p>
            {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;