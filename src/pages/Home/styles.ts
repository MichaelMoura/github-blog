import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;

    h3 {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      color: ${({ theme }) => theme['base-span']};
    }
  }
`

export const SearchPosts = styled.input`
  outline: 0;

  width: 100%;
  padding: 0.8rem 1rem;

  font-family: 'Nunito';
  font-size: 1rem;
  color: ${({ theme }) => theme['base-label']};

  background-color: ${({ theme }) => theme['base-input']};

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme['base-border']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme['base-text']};
  }

  ${(props) =>
    props.value &&
    css`
      color: ${({ theme }) => theme['base-text']};
    `}
`

export const PostsCardsContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
`

// eslint-disable-next-line import/export
export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 26rem;

  background: ${({ theme }) => theme['base-post']};
  border-radius: 5px;

  padding: 2rem;

  cursor: pointer;

  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 3px 0px ${({ theme }) => theme['base-shadow']};
  }
`

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 2rem;

  h4 {
    flex: 1;

    color: ${({ theme }) => theme['base-title']};
    font-size: 1.2rem;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: clip;
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
export const PostCardContent = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: clip;
`
