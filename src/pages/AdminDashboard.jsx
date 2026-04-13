import React, { useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import styled              from 'styled-components';
import { motion }          from 'motion/react';

// ─────────────────────────────────────────────────────────────────────────────
// DEMO PLACEHOLDER
// In production this dashboard:
//   - Fetches projects from MongoDB via GET /.netlify/functions/projects-get
//   - Supports full CRUD (POST / PATCH / DELETE) with JWT auth
//   - Uploads images to Cloudinary via /.netlify/functions/upload-image
//   - Drag-and-drop reordering saved via PATCH /.netlify/functions/projects-reorder
// See: netlify/functions/ for all serverless handlers
// ─────────────────────────────────────────────────────────────────────────────

const MOCK_PROJECTS = [
  { _id: '1', title: { en: 'Confidential Client — Automotive' }, tags: ['React', 'Redux', 'Design System'] },
  { _id: '2', title: { en: 'AI Form Builder — Claude AI' },      tags: ['Claude AI', 'React', 'JSON Schema'] },
  { _id: '3', title: { en: 'Portfolio Admin — CMS Dashboard' },  tags: ['React', 'MongoDB', 'Netlify', 'JWT'] },
  { _id: '4', title: { en: 'AdWords Campaign — Charts' },        tags: ['React 18', 'Chart.js', 'ESLint'] },
];

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
  padding: 0.7rem 1rem;
  background: rgba(244,162,97,.08);
  border: 1px solid rgba(244,162,97,.3);
  border-radius: 4px;
  font-size: 0.78rem;
  color: #f4a261;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const OrderToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
`;

const OrderBtn = styled.button`
  padding: 5px 14px;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.5;
`;

const SaveBtn = styled(OrderBtn)`
  background: var(--accent, #00b4c8);
  color: #021a2b;
  border: none;
`;

const ResetBtn = styled(OrderBtn)`
  background: none;
  border: 1px solid rgba(0,180,200,.35);
  color: var(--text-muted, #a0c4d8);
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
  opacity: 0.35;
  span {
    display: block;
    width: 16px;
    height: 2px;
    background: var(--text-muted, #a0c4d8);
    border-radius: 1px;
  }
`;

const Thumb = styled.div`
  width: 52px;
  height: 40px;
  border-radius: 3px;
  background: rgba(0,180,200,.08);
  border: 1px solid rgba(0,180,200,.15);
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
  border: 1px solid rgba(230,57,70,.4);
  color: #e63946;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 0.72rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: rgba(230,57,70,.12); }
`;

// ── Component ─────────────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  const showDemo = () =>
    alert('Demo mode — connect your .env to enable live CRUD via the Netlify API.');

  return (
    <Page>
      <Header>
        <Title>&lt;- <span>Admin</span> Dashboard -&gt;</Title>
        <LogoutBtn onClick={handleLogout}>Déconnexion</LogoutBtn>
      </Header>

      <DemoBanner>
        ⚡ Demo placeholder — all actions are disabled. Clone the repo, configure{' '}
        <code style={{ fontSize: '0.72rem' }}>.env</code>, and deploy to Netlify to activate the live CMS.
      </DemoBanner>

      <Grid>

        {/* ── ADD PROJECT FORM (UI demo) ── */}
        <Card>
          <CardTitle>Ajouter un projet</CardTitle>
          <form onSubmit={e => { e.preventDefault(); showDemo(); }}>

            <Label>Titre (EN) *</Label>
            <Input placeholder="My awesome project" readOnly onClick={showDemo} />

            <Label>Titre (FR) *</Label>
            <Input placeholder="Mon super projet" readOnly onClick={showDemo} />

            <Label>Description (EN) *</Label>
            <Textarea placeholder="Project description…" readOnly onClick={showDemo} />

            <Label>Description (FR) *</Label>
            <Textarea placeholder="Description du projet…" readOnly onClick={showDemo} />

            <Label>Tags (séparés par virgule)</Label>
            <Input placeholder="React, Figma, Tailwind" readOnly onClick={showDemo} />

            <Label>GitHub URL</Label>
            <Input placeholder="https://github.com/..." readOnly onClick={showDemo} />

            <SubmitBtn type="submit" whileTap={{ scale: 0.97 }}>
              Ajouter le projet
            </SubmitBtn>
          </form>
        </Card>

        {/* ── PROJECT LIST (UI demo with drag handles) ── */}
        <Card>
          <CardTitle>Projets actuels ({MOCK_PROJECTS.length})</CardTitle>

          {/* Order toolbar */}
          <OrderToolbar>
            <SaveBtn disabled title="Demo mode">Sauvegarder</SaveBtn>
            <ResetBtn disabled title="Demo mode">Reset</ResetBtn>
          </OrderToolbar>

          {MOCK_PROJECTS.map(p => (
            <ProjectRow key={p._id}>
              <DragHandle title="Drag to reorder (demo)">
                <span /><span /><span />
              </DragHandle>
              <Thumb />
              <ProjectInfo>
                <ProjectTitle>{p.title.en}</ProjectTitle>
                <ProjectTags>{p.tags.join(', ')}</ProjectTags>
              </ProjectInfo>
              <ActionBtn
                onClick={showDemo}
                style={{ borderColor: 'rgba(0,180,200,.4)', color: 'var(--accent, #00b4c8)', marginRight: '6px' }}
              >
                Modifier
              </ActionBtn>
              <ActionBtn onClick={showDemo}>Supprimer</ActionBtn>
            </ProjectRow>
          ))}
        </Card>

      </Grid>
    </Page>
  );
};

export default AdminDashboard;
