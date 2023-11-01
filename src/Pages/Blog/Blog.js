import React,{useEffect, useRef} from "react";
import 'prismjs/themes/prism.css';
import Styles from "./Blog.module.css";
import 'owl.carousel/dist/assets/owl.carousel.css'; // You may need to adjust the path to the CSS file.
import 'owl.carousel/dist/assets/owl.theme.default.css'; // You may need to adjust the path to the CSS file.
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
window.jQuery = $;




const codeSnippets = [
  {
    id: 1,
    code: `// Your code snippet 1 here`,
    language: 'javascript',
    image: 'CHILD 1.jpg',
  },
  {
    id: 2,
    code: `# Your code snippet 2 here`,
    language: 'python',
    image: 'CHILD 2.jpg',
  },
  // Add more code snippets and images as needed
];

const options = {
  items: 1,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const Blog = () => {
// first
const owlCarouselRef = useRef(null);

  useEffect(() => {
    // Initialize Owl Carousel
    $(owlCarouselRef.current).owlCarousel();

    // Clean up when the component unmounts
    return () => {
      $(owlCarouselRef.current).trigger('destroy.owl.carousel');
    };
  }, []);
// 
  useEffect(() => {
    // Initialize Owl Carousel here
    $('.owl-carousel').owlCarousel();
  }, []);

  return (
    <>
      {/* blog banner */}
      <div className={Styles.blog_main}>
        <div className={Styles.blog_main_head}>
          <h2>Latest Blog</h2>
          <p>
            We, Thaagam Foundation, a non-government organisation, is working
            towards elevating the livelihoods of all living beings.
          </p>
        </div>
      </div>
         {/*  */}
         <div className={Styles.recent_blog_main}>
          <h2>Recent Blogs</h2>
          <div className={Styles.recent_blog_main_first}>
             <img src="bday_cake_v.png" alt="..."></img>
             <img src="blanket.png" alt="..."></img>
          </div>
          {/*  */}
          <div className={Styles.recent_blog_main_first}>
             <img src="briyani.png" alt="..."></img>
             <img src="cake.png" alt="..."></img>
          </div>
         </div>


         {/* owl */}
         <div ref={owlCarouselRef} className="owl-carousel">
         <OwlCarousel options={options}>
      {codeSnippets.map((snippet) => (
        <div className="code-slide" key={snippet.id}>
          <img src={snippet.image} alt={`Code Slide ${snippet.id}`} />
          <pre>
            <code className={`language-${snippet.language}`}>{snippet.code}</code>
          </pre>
        </div>
      ))}
    </OwlCarousel>
    </div>
    </>
  );
};

export default Blog;
