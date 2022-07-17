// /* Створи компонент <Section title="">, який рендерить секцію із заголовком
// і дітей (children). Обгорни кожен із <Statistics> і <FeedbackOptions> у
// створений компонент секції. */

import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
