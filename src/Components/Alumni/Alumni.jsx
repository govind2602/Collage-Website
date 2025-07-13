import './Alumni.css';

import amanImg from '../../assets/image.png';
import gopalImg from '../../assets/gopal..jpg';
import krishnaImg from '../../assets/kridhna.jpg';
import lavleshImg from '../../assets/llllll.png';

import './Alumni.css';

const Alumni = () => {
    const alumniData = [
        {
            name: 'Aman Singh',
            batch: '2018-22',
            role: 'Quality Engineer at Lean-Tycoon',
            testimonial: 'The college provided me with a strong foundation in coding and problem-solving, which helped me excel in my career.',
            image: amanImg,
        },
        {
            name: 'Gopal Chaubey',
            batch: '2018-22',
            role: 'JE at Indian Oil Corporation limited',
            testimonial: 'The faculty and resources at the college were instrumental in shaping my analytical skills.',
            image: gopalImg,
        },
        {
            name: 'Krishna Patel',
            batch: '2018-22',
            role: 'JE at Indian Oil Corporation limited',
            testimonial: 'The entrepreneurial spirit fostered by the college inspired me to start my own company.',
            image: krishnaImg,
        },
        {
            name: 'Lavlesh Patel',
            batch: '2018-22',
            role: 'Engineer at Lean-Tycoon',
            testimonial: 'The college provided me with a strong foundation in coding and problem-solving, which helped me excel in my career.',
            image: lavleshImg,
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