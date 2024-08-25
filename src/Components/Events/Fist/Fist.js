import React, { useState, useEffect, useRef } from 'react';
import fist1 from './fist1.jpg';
import fist2 from './fist2.jpg';
import fist3 from './fist3.jpg';
import './Fist.css';

const cardData = [
  { id: 1, image: fist1 },
  { id: 2, image: fist2 },
  { id: 3, image: fist3 },
];

const Fist = () => {
  const [headingInView, setHeadingInView] = useState(false);
  const [paragraphInView, setParagraphInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === headingRef.current) {
          setHeadingInView(entry.isIntersecting);
        }
        if (entry.target === paragraphRef.current) {
          setParagraphInView(entry.isIntersecting);
        }
        if (entry.target === cardsRef.current) {
          setCardsInView(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div className="Fist">
      <h1
        className={`Fist-heading ${headingInView ? 'in-view' : ''}`}
        ref={headingRef}
      >
        F.I.S.T
      </h1>
      <p
        className={`Fist-paragraph ${paragraphInView ? 'in-view' : ''}`}
        ref={paragraphRef}
      >
        FIST Seminar: Technological innovations are designed to shift cognitive tasks from humans to machines, enabling people to focus on more complex thinking and decision-making. Under the F.I.S.T. (Forum of Ideas on Science and Technology) initiative, SAE conducts seminars exploring these technical advancements.
      </p>
      <div
        className={`Fist-cards ${cardsInView ? 'in-view' : ''}`}
        ref={cardsRef}
      >
        {cardData.map((card) => (
          <div key={card.id} className="Fist-card">
            <img src={card.image} alt={`Card ${card.id}`} className="Fist-card-image" />
            <div className="card-description">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="animated-line"></div>
    </div>
  );
};

export default Fist;
