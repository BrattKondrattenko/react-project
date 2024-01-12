import './styles.css';

type ContentBlockPropsType = {
  title: string;
  paragraps: string[];
};

const ContentBlock = (props: ContentBlockPropsType) => {
  const { title, paragraps } = props;
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      {paragraps.length > 0 && (
        <div className="content">
          {paragraps.map((paragraph, ind) => (
            <p key={ind} className="content__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentBlock;
