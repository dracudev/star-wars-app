import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import banner1 from "../assets/banner1.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";

const banners = [banner1, banner3, banner4];

export function ShadcnCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <CarouselContent className="">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="">
            <div className="max-h-64">
              <Card className="h-full rounded-2xl bg-transparent">
                <CardContent className="flex items-center justify-center p-0">
                  <img src={banner} alt="" className="" />
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
