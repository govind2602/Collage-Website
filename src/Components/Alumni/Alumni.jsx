
import './Alumni.css';

const Alumni = () => {
    const alumniData = [
        {
            name: 'Alice Johnson',
            batch: '2015',
            role: 'Software Engineer at TechCorp',
            testimonial: 'The college provided me with a strong foundation in coding and problem-solving, which helped me excel in my career.',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Robert Lee',
            batch: '2018',
            role: 'Data Scientist at DataWorks',
            testimonial: 'The faculty and resources at the college were instrumental in shaping my analytical skills.',
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'Emma Davis',
            batch: '2012',
            role: 'Entrepreneur, Founder of EduStart',
            testimonial: 'The entrepreneurial spirit fostered by the college inspired me to start my own company.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <section id="alumni" className="alumni-section">
            <h2>Our Prestigious Alumni</h2>
            <div className="alumni-grid">
                {alumniData.map((alumnus, index) => (
                    <div key={index} className="alumni-card">
                        <img src={alumnus.image} alt={alumnus.name} className="alumni-image" />
                        <h3>{alumnus.name}</h3>
                        <p className="batch">Batch: {alumnus.batch}</p>
                        <p className="role">{alumnus.role}</p>
                        <p className="testimonial">{alumnus.testimonial}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Alumni;