import React, { useState, useEffect, useRef } from 'react';
import "./Dnd.css";
import Dnd1 from './Dnd1.jpg';
import Dnd2 from './Dnd2.jpg';
import Dnd3 from './Dnd3.jpg';

const cardData = [
  { id: 1, image: Dnd1,},
  { id: 2, image: Dnd3,},
  { id: 3, image: Dnd2,},
];

const Dnd = () => {
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
    <div className="dnd">
      <h1
        className={`Dnd-heading ${headingInView ? 'in-view' : ''}`}
        ref={headingRef}
      >
        Drag & Drift
      </h1>
      <p
        className={`Dnd-paragraph ${paragraphInView ? 'in-view' : ''}`}
        ref={paragraphRef}
      >
        SAE presents an electrifying event 'Drag & Drift' where participants navigate intricate maze designs filled with challenging obstacles. This event not only tests your ability to skillfully dodge these pesky barriers but also deepens your understanding of the car's underlying mechanics.
      </p>
      <div
        className={`Dnd-cards ${cardsInView ? 'in-view' : ''}`}
        ref={cardsRef}
      >
        {cardData.map((card) => (
          <div key={card.id} className="Dnd-card">
            <img src={card.image} alt={`Card ${card.id}`} className="Dnd-card-image" />
            <div className="Dnd-card-description">
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="animated-line"></div>
    </div>
  );
};

export default Dnd;
