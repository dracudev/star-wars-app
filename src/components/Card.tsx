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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 1rem;
  border-top: 1px solid orange;

  @media (min-width: 640px) {
    border-top: 0;
    border-left: 1px solid #ff8c00;
  }
`;

export const Card: FC<CardProps> = ({
  children,
  onClick,
  className,
  imageSrc,
}) => {
  return (
    <StyledCard onClick={onClick} className={className}>
      <div className="flex flex-col sm:flex-row">
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
