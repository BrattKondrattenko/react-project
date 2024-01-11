import ContentBlock from "../components/ContentBlock"

const MAINPAGE_CONTENT = {
  title: 'Главная страница',
  paragraphs: [
    'Этот сайт я создал на коленке и он очень крутой',
    'Он умеет столько, сколько вы себе и представить не способны',
    'Он реально крутой...',
  ]
}

const MainPage = () => {
  return ( 
    <ContentBlock title={MAINPAGE_CONTENT.title} paragraps={MAINPAGE_CONTENT.paragraphs} />
   );
}
 
export default MainPage;