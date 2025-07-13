
import './Faculty.css';

const Faculty = () => {
    const facultyData = [
        {
            name: 'Manu Pratap Singh',
            designation: 'Director',
            qualification: 'ph.D in Computer Science ',
            image: 'src/assets/manup.jpg',
        },
        {
            name: 'Er. Prashant Maharishi',
            designation: 'Professor, Computer Science',
            qualification: 'M.tech in Computer Science',
            image: 'src/assets/prashant.jpg',
        },
        {
            name: 'Er.Pragya Kabra ',
            designation: 'Professor, Computer Science',
            qualification: ' Ph.D. in Artificial Intelligence',
            image: 'src/assets/pragya maam.png',
        },
        {
            name: 'Saurbh Garg',
            designation: 'Professor, Computer Science',
            qualification: 'M.tech in Computer Science ',
            image: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg',
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