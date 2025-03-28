import { ReactNode } from "react";
import { type FC } from "react";
import styled from "styled-components";
import error_img from "../assets/error-img.webp";

export interface CardProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  imageSrc?: string;
}

const StyledCard = styled.div`
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 64rem;
  background-color: #27272a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    .line,
    .point {
      background: white;
      transition: 0.3s ease;
      box-shadow: 0 0 6px 1px #fff;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    right: 20%;
    width: 3%;
    height: 20%;
    background: #0c0c0c;
    transform: translate(50%, -50%) rotate(90deg);
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 100px;
  }

  @media (min-width: 640px) {
    &::before {
      content: none;
    }
  }

  @media (min-width: 640px) {
    &::after {
      content: "";
      position: absolute;
      top: 99%;
      right: 15%;
      width: 1.5%;
      height: 40%;
      background: #0c0c0c;
      transform: translate(50%, -50%) rotate(90deg);
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border-top-left-radius: 100px;
    }
  }

  @media (min-width: 800px) {
    &::after {
      height: 60%;
    }
  }

  @media (max-width: 420px) {
    &::before {
      right: 28%;
      width: 4%;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  @media (min-width: 640px) {
    img {
      border-radius: 10px 0 0 10px;
    }
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 1rem;
  border-top: 1px solid orange;

  @media (min-width: 640px) {
    border-top: 0;
    border-left: 1px solid #ea580c;
  }

  .line {
    width: 30px;
    min-height: 3px;
    background: #71717a;
    border-radius: 1px;
  }

  .point {
    width: 4px;
    height: 4px;
    background: #71717a;
    border-radius: 1px;
  }

  & > *:last-child {
    margin-bottom: 0.5rem;
  }
`;

const CustomCard: FC<CardProps> = ({
  children,
  onClick,
  className,
  imageSrc,
}) => {
  return (
    <StyledCard
      onClick={onClick}
      className={className}
      data-testid="custom-card"
    >
      <div className="flex flex-col sm:flex-row">
        {imageSrc && (
          <ImageContainer>
            <img
              src={imageSrc}
              alt="Card image"
              onError={(e) => {
                e.currentTarget.src = error_img;
              }}
            />
          </ImageContainer>
        )}
        <ContentContainer>
          <div className="mb-3 flex space-x-[5px]">
            <div className="line"></div>
            <div className="point"></div>
          </div>

          {children}
        </ContentContainer>
      </div>
    </StyledCard>
  );
};

export default CustomCard;
