import React, { useState, useEffect, useRef } from 'react';
import './TedxSec.css';
import asutosh from './Ashutosh.jpg'
import sinjini from "./Sinjini.jpg"
import yogendra from "./Yogendra.jpg"
import prachi from './Prachi.jpg'

const cardData = [
  { id: 1, image: asutosh , description: 'Ashutosh Pratihast, the Founder and CEO of IDIGITALPRENEUR, is a well-known YouTuber, lyricist, singer, renowned speaker, and mentor to young people across the nation.' },
  { id: 2, image: sinjini, description: 'An alumna of the Indian Statistical Institute, Sinjini Sengupta is a former actuary, author, columnist, professional speaker, and a distinguished Toastmaster.' },
  { id: 3, image: yogendra, description: 'Yogendra Singh Rathore is one of India’s leading NLP experts, a mental wellness coach, the author of several bestsellers, and the founder of three multimillion-dollar companies.' },
  { id: 4, image: prachi, description: 'Prachii Tehlan, known as the "Queen of the Court," led India to its first netball medal and has captivated audiences as an actress, style icon, and NGO founder' },
];

const TedxSec = () => {
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
    <div className="tedxsec">
      <h1
        className={`TedxSec-heading ${headingInView ? 'in-view' : ''}`}
        ref={headingRef}
      >
        Tedx
      </h1>
      <p
        className={`TedxSec-paragraph ${paragraphInView ? 'in-view' : ''}`}
        ref={paragraphRef}
      >
        TEDx: SAE, in collaboration with the Literary Circle, organizes TEDxNITDurgapur, a branch of the global TED initiative. This event serves as a platform where diverse voices from various fields come together to share and spread innovative ideas and insights.
      </p>
      <div
        className={`TedxSec-cards ${cardsInView ? 'in-view' : ''}`}
        ref={cardsRef}
      >
        {cardData.map((card) => (
          <div key={card.id} className="TedxSec-card">
            <div className="TedxSec-card-inner">
              <div className="TedxSec-card-front">
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
              <div className="TedxSec-card-back">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="animated-line"></div>
    </div>
  );
};

export default TedxSec;
