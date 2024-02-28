import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={togglePanel}>Open Panel</button>
      <BottomSheet
        open={isOpen}
        onDismiss={() => setIsOpen(false)}
        snapPoints={({ maxHeight }) => [maxHeight / 2]}
      >
        <div style={{ background: 'white', padding: '20px' }}>
          <h2>Bottom Panel Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </BottomSheet>
    </div>
  );
}

export default BottomPanel;
