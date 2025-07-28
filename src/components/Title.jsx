import React from 'react';

const Title = ({ text, emoji}) => {
  return (
    <div className="flex items-center w-full gap-4 py-4">
      <div className="flex-1 h-px bg-bgWhite/30" />
      <h3 className="text-xl md:text-2xl text-whiteText font-semibold tracking-widest uppercase whitespace-nowrap flex items-end gap-1">
        <span className="text-2xl md:text-3xl">{emoji}</span>{text}
      </h3>
      <div className="flex-1 h-px bg-bgWhite/30" />
    </div>
  );
};

export default Title;
