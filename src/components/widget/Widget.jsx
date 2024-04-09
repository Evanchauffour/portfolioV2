import React from 'react';

export default function Widget({ children, gridArea }) {
  return (
    <div className='overflow-hidden rounded-lg bg-gradient-to-l from-primary to-accent p-px transition-all duration-100 ease-linear hover:from-accent hover:to-primary' style={{ gridArea: gridArea }}>
      <div className='flex size-full items-center justify-center rounded-lg bg-background'>
        {children}
      </div>
    </div>
  );
}
