import { Card, CardContent } from "./shadcn-ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn-ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "../assets/banner1.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import { useRef } from "react";

const banners = [banner1, banner3, banner4];

export function ShadcnCarousel() {
  const plugin = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="max-h-64 overflow-hidden rounded-xl">
              <Card className="h-full rounded-xl bg-transparent">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={banner}
                    alt=""
                    className="h-full w-full rounded-xl object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-8 top-1/2 h-6 w-6 -translate-y-1/2 transform bg-transparent sm:left-10 lg:left-12" />
      <CarouselNext className="absolute right-8 top-1/2 h-6 w-6 -translate-y-1/2 transform bg-transparent sm:right-10 lg:right-12" />
    </Carousel>
  );
}
