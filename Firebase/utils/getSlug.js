import { Constants } from 'expo';

function getSlug() {
  const { manifest: { slug } } = Constants;
  return "test-app" //slug;
}
export default getSlug;
