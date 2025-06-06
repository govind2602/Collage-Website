
import './Faculty.css';

const Faculty = () => {
    const facultyData = [
        {
            name: 'Dr. John Smith',
            designation: 'Professor, Computer Science',
            qualification: 'Ph.D. in Computer Science',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Prof. Jane Doe',
            designation: 'Associate Professor, Mathematics',
            qualification: 'M.Sc., Ph.D. in Applied Mathematics',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Dr. Michael Brown',
            designation: 'Head of Physics Department',
            qualification: 'Ph.D. in Theoretical Physics',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <section id="faculty" className="faculty-section">
            <h2>Our Esteemed Faculty</h2>
            <div className="faculty-grid">
                {facultyData.map((faculty, index) => (
                    <div key={index} className="faculty-card">
                        <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                        <h3>{faculty.name}</h3>
                        <p className="designation">{faculty.designation}</p>
                        <p className="qualification">{faculty.qualification}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;