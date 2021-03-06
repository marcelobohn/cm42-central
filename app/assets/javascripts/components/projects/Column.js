import React from 'react'

const Story = ({ title }) => (
  <div>
    {title}
  </div>
);


const Stories = ({ stories }) => {
  if (!stories.length) {
    return null;
  }

  return (
    <div>
      {stories.map(story => (
        <Story
          key={story.id}
          {...story}
        />
      ))}
    </div>
  );
};

const Column = ({ title, stories }) => (
  <div className="Column">
    <div className="Column__header">
      <h3 className="Column__name">{title}</h3>
      <button type="button" className="Column__btn-close">x</button>
    </div>
    <Stories stories={stories} />
  </div>
);

export default Column
