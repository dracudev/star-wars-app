import { ReactNode } from "react";
import { type FC } from "react";
import styled from "styled-components";

interface CardProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  imageSrc?: string;
}

const StyledCard = styled.div`
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 64rem;
  background-color: rgba(43, 43, 43, 0.6);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 33.33%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 1rem;
`;

export const Card: FC<CardProps> = ({
  children,
  onClick,
  className,
  imageSrc,
}) => {
  return (
    <StyledCard onClick={onClick} className={className}>
      <div className="flex">
        {imageSrc && (
          <ImageContainer>
            <img src={imageSrc} alt="Card image" />
          </ImageContainer>
        )}
        <ContentContainer>{children}</ContentContainer>
      </div>
    </StyledCard>
  );
};
