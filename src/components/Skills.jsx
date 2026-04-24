import React from 'react';
import PropTypes from 'prop-types';
import { EASE_OUT_EXPO, SKILLS } from '../components/Constants';
import * as Styled from '../components/PortfolioStyled';
import useTranslate from '../hooks/useTranslate';

// ─── Sub-component ────────────────────────────────────────────────────────────
const SkillBar = ({ name, level, delay }) => (
  <Styled.SkillsBarRow>
    <Styled.SkillsBarLabel>
      <Styled.SkillsBarName>{name}</Styled.SkillsBarName>
      <Styled.SkillsBarPercent>{level}%</Styled.SkillsBarPercent>
    </Styled.SkillsBarLabel>
    <Styled.SkillsBarTrack>
      <Styled.SkillsBarFill
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, ease: EASE_OUT_EXPO }}
      />
    </Styled.SkillsBarTrack>
  </Styled.SkillsBarRow>
)

SkillBar.propTypes = {
  name:  PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  delay: PropTypes.number,
}

// ─── Component ────────────────────────────────────────────────────────────────
const Skills = () => {
  const { t, isEN } = useTranslate()

  return (
    <Styled.SkillsSection id="skills">
      <Styled.SkillsContainer>
        <Styled.SectionTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {t('skills.section')}
        </Styled.SectionTitle>

        <Styled.TitleLine
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
        />

        <Styled.SkillsGrid>
          {SKILLS.map((col, colIdx) => {
            // category is { en, fr } object
            const categoryName = t(`skills.columns.${colIdx}.category`);

            return (
              <Styled.SkillsColumnCard
                key={`categoryName-${colIdx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: colIdx * 0.15, duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <Styled.SkillsColHeader>
                  <Styled.SkillsColIcon>{col.icon}</Styled.SkillsColIcon>
                  <Styled.SkillsColName>{categoryName}</Styled.SkillsColName>
                </Styled.SkillsColHeader>

                {col.skills.map((skill, skillIdx) => {
                  // name can be string or ["EN", "FR"] pair
                  const skillName = Array.isArray(skill.name)
                    ? (isEN ? skill.name[0] : skill.name[1])
                    : skill.name

                  return (
                    <SkillBar
                      key={skillName}
                      name={skillName}
                      level={skill.level}
                      delay={colIdx * 0.12 + skillIdx * 0.07}
                    />
                  )
                })}
              </Styled.SkillsColumnCard>
            )
          })}
        </Styled.SkillsGrid>
      </Styled.SkillsContainer>
    </Styled.SkillsSection>
  )
}

export default Skills;
