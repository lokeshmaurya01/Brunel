import Footer from "./Footer";
import AskQuestions from "./homepageComponents/AskQuestions";
import Carousel from "./homepageComponents/CarouselArea";
const Homepage = () => {
  return (
    <div className="">
      <div className="my-12 w-2/5 mx-auto text-5xl font-bold text-center text leading-tight">
        Every success journey we've encountered.
      </div>
      <Carousel />
      <AskQuestions />
      <Footer />
    </div>
  );
};

export default Homepage;
