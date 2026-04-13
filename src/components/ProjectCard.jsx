import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from '../components/PortfolioStyled';

const ProjectCard = ({ project, onClick, lang = 'en' }) => {
  const thumbnail = project.images?.[0] ?? null

  return (
    <Styled.ProjectCardCard
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={onClick}
    >
      <Styled.ProjectCardImageWrapper>
        {thumbnail
          ? <Styled.ProjectCardImage src={thumbnail} alt={project.title[lang] || 'Project'} />
          : <Styled.ProjectCardImagePlaceholder>{project.title[lang] || 'Project'}</Styled.ProjectCardImagePlaceholder>
        }
        <Styled.ProjectCardHoverOverlay whileHover={{ opacity: 1 }} initial={{ opacity: 0 }} />
      </Styled.ProjectCardImageWrapper>

      {(project.title[lang] || project.description[lang]) && (
        <Styled.ProjectCardBody>
          {project.title       && <Styled.ProjectCardTitle>{project.title[lang]}</Styled.ProjectCardTitle>}
          {project.description && <Styled.ProjectCardDesc>{project.description[lang]}</Styled.ProjectCardDesc>}
        </Styled.ProjectCardBody>
      )}

      <Styled.ProjectCardAccentLine />
    </Styled.ProjectCardCard>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    images:      PropTypes.arrayOf(PropTypes.string),
    title:       PropTypes.object,
    description: PropTypes.object,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  lang: PropTypes.oneOf(['en', 'fr']),
}

export default ProjectCard
