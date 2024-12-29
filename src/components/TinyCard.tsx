import { type FC, ReactNode } from "react";
import styled from "styled-components";
import error_img from "../assets/error-img.webp";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
}

const StyledTinyCard = styled.div`
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: auto;
  background-color: #27272a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

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
      right: 23%;
      width: 3%;
      height: 17%;
      background: #0c0c0c;
      transform: translate(50%, -50%) rotate(90deg);
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border-top-left-radius: 100px;
      overflow: hidden;
    }
  }

`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

const ContentContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid orange;

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

export const TinyCard: FC<CardProps> = ({ children, className, imageSrc }) => {
  return (
    <StyledTinyCard className={className} data-testid="tiny-card">
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
    </StyledTinyCard>
  );
};
