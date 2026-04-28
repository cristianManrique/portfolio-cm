import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'motion/react';

// ── Styled ────────────────────────────────────────────────────────────────────
const Page = styled.div`
  min-height: 100vh;
  background: var(--bg-deep, #021a2b);
  padding: 2rem;
  font-family: var(--font-body);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto 2.5rem;
  border-bottom: 1px solid var(--border-dim, rgba(0,180,200,.2));
  padding-bottom: 1.2rem;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white, #fff);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
  span { color: var(--accent, #00b4c8); }
`;

const LogoutBtn = styled.button`
  background: none;
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  color: var(--text-muted, #a0c4d8);
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 0.8rem;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: border-color 0.2s, color 0.2s;
  &:hover { border-color: var(--accent, #00b4c8); color: var(--accent, #00b4c8); }
`;

const DemoBanner = styled.div`
  max-width: 1080px;
  margin: 0 auto 1.5rem;
  padding: 0.85rem 1.2rem;
  background: rgba(244, 162, 97, 0.1);
  border: 1px solid rgba(244, 162, 97, 0.35);
  border-radius: 4px;
  font-size: 0.75rem;
  color: #f4a261;
  line-height: 1.6;
  code { font-size: 0.7rem; opacity: 0.8; }
`;

const Grid = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2rem;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: var(--bg-card, #0a3a52);
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  border-top: 3px solid var(--accent, #00b4c8);
  border-radius: 6px;
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent, #00b4c8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1.2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted, #a0c4d8);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0.8rem 0 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(0,0,0,.25);
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  color: var(--white, #fff);
  font-size: 0.88rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;
  &:focus { border-color: var(--accent, #00b4c8); }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: rgba(0,0,0,.25);
  border: 1px solid var(--border-dim, rgba(0,180,200,.2));
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  color: var(--white, #fff);
  font-size: 0.88rem;
  outline: none;
  box-sizing: border-box;
  resize: vertical;
  min-height: 70px;
  transition: border-color 0.2s;
  &:focus { border-color: var(--accent, #00b4c8); }
`;

const UploadZone = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--border-dim, rgba(0,180,200,.25));
  border-radius: 4px;
  padding: 1.2rem;
  cursor: pointer;
  transition: border-color 0.2s;
  color: var(--text-muted, #a0c4d8);
  font-size: 0.8rem;
  text-align: center;
  gap: 4px;
  &:hover { border-color: var(--accent, #00b4c8); }
`;

const Preview = styled.img`
  width: 100%;
  max-height: 140px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 0.5rem;
`;

const SubmitBtn = styled(motion.button)`
  width: 100%;
  margin-top: 1.2rem;
  padding: 0.75rem;
  background: var(--accent, #00b4c8);
  color: #021a2b;
  border: none;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
`;

const ProjectRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0,180,200,.1);
  &:last-child { border-bottom: none; }
`;

const DragHandle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 4px 2px;
  cursor: grab;
  flex-shrink: 0;
  opacity: 0.45;
  &:hover { opacity: 1; }
  span {
    display: block;
    width: 16px;
    height: 2px;
    background: var(--text-muted, #a0c4d8);
    border-radius: 1px;
  }
`;

const Thumb = styled.img`
  width: 52px;
  height: 40px;
  object-fit: cover;
  border-radius: 3px;
  background: rgba(0,0,0,.3);
  flex-shrink: 0;
`;

const ProjectInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ProjectTitle = styled.div`
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--white, #fff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectTags = styled.div`
  font-size: 0.72rem;
  color: var(--text-muted, #a0c4d8);
  margin-top: 2px;
`;

const ActionBtn = styled.button`
  background: none;
  border: 1px solid rgba(0,180,200,.4);
  color: var(--accent, #00b4c8);
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 0.72rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: rgba(0,180,200,.08); }
`;

const DeleteBtn = styled(ActionBtn)`
  border-color: rgba(230,57,70,.4);
  color: #e63946;
  &:hover { background: rgba(230,57,70,.12); }
`;

const OrderToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
`;

const SaveBtn = styled.button`
  padding: 5px 14px;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  cursor: not-allowed;
  background: var(--accent, #00b4c8);
  color: #021a2b;
  border: none;
  opacity: 0.45;
`;

const ResetBtn = styled.button`
  padding: 5px 14px;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  cursor: not-allowed;
  background: none;
  border: 1px solid rgba(0,180,200,.35);
  color: var(--text-muted, #a0c4d8);
  opacity: 0.45;
`;

// ── Mock data (static — no real backend) ─────────────────────────────────────
//
//  In production, projects are loaded from MongoDB via:
//    GET /.netlify/functions/projects-get
//  and ordered by the `order` field (set by drag-and-drop via projects-reorder.js).
//
const MOCK_PROJECTS = [
  {
    id: '1',
    title: '<- Cristian Manrique -> — Portfolio',
    tags: 'React · MongoDB · Netlify Functions',
    thumb: '/projects/project-placeholder.svg',
  },
  {
    id: '2',
    title: 'Notes Dashboard — Kanban Board',
    tags: 'Next.js · TypeScript · Prisma',
    thumb: '/projects/project-placeholder.svg',
  },
  {
    id: '3',
    title: 'AI Form Builder — Claude AI',
    tags: 'React · Claude AI · Node.js',
    thumb: '/projects/project-placeholder.svg',
  },
  {
    id: '4',
    title: 'Confidential Client — Automotive',
    tags: 'React · Google Maps API',
    thumb: '/projects/project-placeholder.svg',
  },
];

// ── Component (PLACEHOLDER — no real CRUD) ────────────────────────────────────
const AdminDashboard = () => {
  const navigate = useNavigate();

  const showDemo = () =>
    alert('Demo mode — configure your .env + Netlify Functions to activate CRUD operations.');

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <Page>
      <Header>
        <Title>&lt;- <span>Admin</span> Dashboard -&gt;</Title>
        <LogoutBtn onClick={handleLogout}>Déconnexion</LogoutBtn>
      </Header>

      <DemoBanner>
        <strong>Alpha / Demo mode</strong> — all CRUD operations are disabled in this
        public version. In production, this dashboard connects to{' '}
        <code>netlify/functions/projects-*.js</code> via an Axios client with a JWT
        interceptor (<code>src/utils/Api.js</code>). Drag-and-drop reordering persists
        to MongoDB via <code>Project.bulkWrite()</code> in{' '}
        <code>projects-reorder.js</code>.
      </DemoBanner>

      <Grid>

        {/* ── ADD / EDIT PROJECT FORM (UI only) ── */}
        <Card>
          <CardTitle>Ajouter un projet</CardTitle>
          <form onSubmit={e => { e.preventDefault(); showDemo(); }}>

            <Label>Titre (EN) *</Label>
            <Input placeholder="My Project" readOnly />

            <Label>Titre (FR) *</Label>
            <Input placeholder="Mon projet" readOnly />

            <Label>Description (EN) *</Label>
            <Textarea placeholder="Project description in English..." readOnly />

            <Label>Description (FR) *</Label>
            <Textarea placeholder="Description du projet en français..." readOnly />

            <Label>Tags (séparés par virgule)</Label>
            <Input placeholder="React, Node.js, MongoDB" readOnly />

            <Label>GitHub URL</Label>
            <Input placeholder="https://github.com/..." readOnly />

            <Label>Live Demo URL</Label>
            <Input placeholder="https://..." readOnly />

            <Label>Image du projet</Label>
            <UploadZone>
              <Preview src="/projects/project-placeholder.svg" alt="preview" />
              <small style={{ marginTop: '0.4rem' }}>Cliquez pour ajouter une image</small>
            </UploadZone>

            <SubmitBtn type="submit" whileTap={{ scale: 0.97 }}>
              Ajouter le projet
            </SubmitBtn>
          </form>
        </Card>

        {/* ── PROJECT LIST (static mock) ── */}
        <Card>
          <CardTitle>Projets actuels ({MOCK_PROJECTS.length})</CardTitle>

          {/* Order toolbar — disabled in demo */}
          <OrderToolbar>
            <SaveBtn disabled>Sauvegarder</SaveBtn>
            <ResetBtn disabled>Reset</ResetBtn>
          </OrderToolbar>

          {MOCK_PROJECTS.map(p => (
            <ProjectRow key={p.id}>
              <DragHandle title="Drag to reorder">
                <span /><span /><span />
              </DragHandle>
              <Thumb src={p.thumb} alt={p.title} />
              <ProjectInfo>
                <ProjectTitle>{p.title}</ProjectTitle>
                <ProjectTags>{p.tags}</ProjectTags>
              </ProjectInfo>
              <ActionBtn onClick={showDemo}>Modifier</ActionBtn>
              <DeleteBtn onClick={showDemo}>Supprimer</DeleteBtn>
            </ProjectRow>
          ))}
        </Card>

      </Grid>
    </Page>
  );
};

export default AdminDashboard;
