import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getRandomRecipes } from "@utils/recipeUtils";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./styles.slides.scss";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export function Slides() {
  const [recipesSlides, setRecipesSlide] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await getRandomRecipes(6);
      setRecipesSlide(data);
    };

    getRecipes();
  }, []);
  return (
    <section className="slidesPart">
      <h1>Conheça novas receitas </h1>
      <div className="slideContainer">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 4500,
          }}
          spaceBetween={30}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
          rewind
        >
          {recipesSlides.map((recipe, index) => (
            <SwiperSlide key={`Slide${index}`}>
              <a href={` /recipe/${recipe.id}`}>
                <img
                  sizes="(100%, 100%)"
                  src={recipe.imageUrl}
                  className="slide-item"
                  alt={`Slide${index + 1} - ${recipe.nome}`}
                />
                <h2>{recipe.nome}</h2>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
