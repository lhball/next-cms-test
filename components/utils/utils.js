export const withoutPTags = (props) => {
  const element = props.children[0];
  return element.type === 'img' ? { ...element } : <p {...props} />;
};