import React from 'react'
import { motion } from 'motion/react'
import { containerVariants, EASE_OUT_EXPO, EXPERIENCE } from '../components/Constants'
import * as Styled from '../components/PortfolioStyled'
import useTranslate from '../hooks/useTranslate'

const Experience = () => {
  const { t, isEN } = useTranslate();
  const jobs        = EXPERIENCE;

  return (
    <Styled.ExperienceSection id="experience">
      <Styled.ExperienceContainer>

        <Styled.SectionTitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          {t('experience.section_pre')} <span>{t('experience.section_bold')}</span>
        </Styled.SectionTitle>

        <Styled.TitleLine
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
        />

        <Styled.ExperienceTimelineCard
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Styled.ExperienceScrollList>
            <Styled.ExperienceTimelineLine />

            {jobs.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: idx * 0.1 }}
              >
                <Styled.ExperienceJobItem>
                  <Styled.ExperiencePeriod>
                    <Styled.ExperienceRedDot />
                    {exp.period}
                  </Styled.ExperiencePeriod>
                  <Styled.ExperienceCompany>{exp.company}</Styled.ExperienceCompany>
                  <Styled.ExperienceRole>
                    {isEN ? exp.role.en : exp.role.fr}
                  </Styled.ExperienceRole>
                  <Styled.ExperienceDesc>
                    {isEN ? exp.description.en : exp.description.fr}
                  </Styled.ExperienceDesc>
                </Styled.ExperienceJobItem>
              </motion.div>
            ))}
          </Styled.ExperienceScrollList>
        </Styled.ExperienceTimelineCard>
      </Styled.ExperienceContainer>
    </Styled.ExperienceSection>
  )
}

export default Experience
