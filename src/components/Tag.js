import React from "react";
import styled from "styled-components";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const TagList = styled.ul`
  display: flex;
  justify-content: center;
`;


const TagItem = styled.li`
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const LinkAsTag = styled(Link)`
  text-decoration: none;
  color: var(--bg);
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  background-color: var(--textLink);
`;

const TagTitle = styled.p`
border-top: 2px solid var(--bg2);
text-align: center;
padding-top: 1rem;
padding-bottom: 1rem;
`;

const TagComponent = ({ tags, onlyTags = false }) => {
  return tags && tags.length ? (
    <>
      {onlyTags ? null : <TagTitle>Assuntos desta publicação</TagTitle>}
      <TagList>
        {tags.map((tag) => (
          <TagItem key={tag + `tag`}>
            <LinkAsTag to={`/tags/${kebabCase(tag)}/`}>{tag}</LinkAsTag>
          </TagItem>
        ))}
      </TagList>
    </>
  ) : null;
};

export default TagComponent;
