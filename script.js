:root {
  --bg: #141b30;
  --bg-soft: #1b2339;
  --panel: #20293d;
  --panel-strong: #1a2133;
  --panel-border: rgba(255, 255, 255, 0.08);
  --text: #edf2ff;
  --muted: #9ba7c4;
  --bg: #0f172b;
  --bg-soft: #131f38;
  --bg-elevated: rgba(19, 31, 56, 0.78);
  --panel: rgba(18, 28, 48, 0.9);
  --panel-strong: rgba(12, 21, 38, 0.95);
  --panel-border: rgba(255, 255, 255, 0.09);
  --text: #eff5ff;
  --muted: #9aa8c8;
  --line: rgba(255, 255, 255, 0.1);
  --line-strong: rgba(255, 255, 255, 0.16);
  --accent: #4c8dff;
  --success: #22c483;
  --accent-soft: rgba(76, 141, 255, 0.18);
  --teal: #22c483;
  --teal-soft: rgba(34, 196, 131, 0.18);
  --danger: #ff6b6b;
  --danger-soft: rgba(255, 107, 107, 0.16);
  --warning: #f6b23d;
  --history-1: linear-gradient(135deg, #f3274f, #bf123b);
  --history-2: linear-gradient(135deg, #406cff, #2ad08a);
  --module-1: linear-gradient(135deg, #ff4d6d, #d91d53);
  --module-2: linear-gradient(135deg, #d13cf3, #ff3d88);
  --shadow-lg: 0 24px 50px rgba(0, 0, 0, 0.28);
  --shadow-md: 0 12px 24px rgba(0, 0, 0, 0.2);
  --warning-soft: rgba(246, 178, 61, 0.16);
  --history-card: linear-gradient(145deg, #ff5a7b 0%, #d51a5f 58%, #981748 100%);
  --mcq-card: linear-gradient(145deg, #ff6e65 0%, #e83870 100%);
  --tf-card: linear-gradient(145deg, #3b82ff 0%, #1cc6a3 100%);
  --shadow-lg: 0 28px 80px rgba(0, 0, 0, 0.42);
  --shadow-md: 0 18px 42px rgba(0, 0, 0, 0.28);
  --shadow-sm: 0 10px 18px rgba(0, 0, 0, 0.18);
}

* {
  font-family: "Be Vietnam Pro", "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(76, 141, 255, 0.18), transparent 24%),
    radial-gradient(circle at right top, rgba(34, 196, 131, 0.16), transparent 20%),
    linear-gradient(180deg, #171e36 0%, var(--bg) 100%);
    radial-gradient(circle at top left, rgba(76, 141, 255, 0.16), transparent 28%),
    radial-gradient(circle at top right, rgba(34, 196, 131, 0.14), transparent 22%),
    linear-gradient(180deg, #111a31 0%, #0f172b 100%);
  overflow-x: hidden;
}

button,
  outline-offset: 2px;
}

.ambient,
.grid-haze {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
}

.ambient-one {
  background: radial-gradient(circle at 15% 8%, rgba(76, 141, 255, 0.24), transparent 32%);
}

.ambient-two {
  background: radial-gradient(circle at 82% 12%, rgba(34, 196, 131, 0.18), transparent 26%);
}

.grid-haze {
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.32), transparent 70%);
}

.app-shell {
  width: min(1220px, calc(100% - 32px));
  position: relative;
  z-index: 1;
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 48px;
  padding: 28px 0 56px;
}

.app-topbar {
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px 18px;
  border: 1px solid var(--panel-border);
  border-radius: 22px;
  background: rgba(14, 22, 40, 0.66);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(18px);
}

.brand {
.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4c8dff, #2ad08a);
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: linear-gradient(145deg, #4c8dff, #22c483);
  box-shadow: 0 10px 24px rgba(76, 141, 255, 0.28);
  font-weight: 800;
  letter-spacing: 0.05em;
  letter-spacing: 0.08em;
  color: #071321;
}

.brand-copy {
  display: grid;
  gap: 3px;
  gap: 4px;
}

.brand-copy strong {
}

.brand-copy span,
.topbar-badge,
.meta-copy,
.muted-line,
.card-copy p,
.empty-note,
.muted-line,
.hero-copy p,
.hero-metric-card p,
.score-copy p,
.progress-copy p,
.score-copy p,
.history-caption,
.review-note {
.review-note,
.empty-note,
.empty-box p,
.meta-kicker,
.topbar-badge-ghost {
  color: var(--muted);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.topbar-badge,
.chip,
.soft-pill {
.soft-pill,
.meta-pill,
.tag-pill,
.question-state-chip,
.module-mini-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.83rem;
  font-size: 0.82rem;
  font-weight: 700;
}

.soft-pill {
.topbar-badge,
.soft-pill,
.meta-pill {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.topbar-badge {
  background: rgba(255, 255, 255, 0.08);
.topbar-badge-ghost {
  background: rgba(255, 255, 255, 0.03);
}

.card,
.hero-panel,
.subject-card,
.placeholder-card,
.subject-hero,
.workspace-main,
.workspace-side .panel,
.question-shell,
.statement-row {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  border-radius: 28px;
  background: var(--panel);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(18px);
}

.hero-panel::before,
.subject-hero::before,
.workspace-main::before,
.workspace-side .panel::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.08), transparent 38%);
  pointer-events: none;
}

.home-grid,
.subject-view {
  display: grid;
  gap: 22px;
}

.hero-panel {
  padding: 26px;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
  gap: 20px;
  padding: 28px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 22%),
    linear-gradient(135deg, #2f67f4, #1ea06a);
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.14), transparent 26%),
    linear-gradient(145deg, #2868ff 0%, #1eb68f 100%);
}

.hero-copy {
  display: grid;
  gap: 14px;
  align-content: start;
}

.eyebrow {
  margin: 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.hero-panel h1,
.subject-hero h2,
.subject-copy h2,
.question-title,
.page-title {
.page-title,
.subject-card h2 {
  margin: 0;
  font-family: "Fraunces", Georgia, serif;
}

.hero-panel h1 {
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.04;
  font-size: clamp(2.15rem, 4vw, 4rem);
  line-height: 1.02;
  max-width: 760px;
}

.hero-panel p {
  max-width: 760px;
  margin: 14px 0 0;
  line-height: 1.75;
  margin: 0;
  line-height: 1.78;
  max-width: 720px;
}

.home-grid {
.hero-metrics {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 22px;
  gap: 14px;
  align-content: start;
}

.subject-grid {
.hero-metric-card {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(14px);
}

.hero-metric-card strong {
  display: block;
  margin-top: 8px;
  font-size: 1.3rem;
}

.hero-metric-card p {
  margin-top: 10px;
}

.hero-meta-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.subject-grid,
.coming-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.subject-card,
.placeholder-card {
  min-height: 240px;
  min-height: 260px;
  padding: 22px;
}

.subject-card {
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
}

.subject-card:hover {
  transform: translateY(-2px);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(255, 255, 255, 0.14);
}

.subject-card.history {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 55%),
    var(--history-1);
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.14), transparent 24%),
    var(--history-card);
}

.subject-card-top,
.subject-card-foot,
.subject-hero-top,
.subject-hero-grid,
.module-tab-top,
.workspace-head,
.question-shell-top,
.question-headline,
.statement-head,
.question-footer,
.history-head,
.score-row,
.legend-row,
.hero-focus-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.subject-card-top {
  align-items: flex-start;
}

.subject-icon {
  display: inline-grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 1.25rem;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  font-size: 1.05rem;
  font-weight: 800;
}

.tag-pill {
  background: rgba(255, 255, 255, 0.16);
}

.subject-card h2 {
  margin: 18px 0 8px;
  font-size: 1.7rem;
  margin-top: 18px;
  font-size: 2rem;
}

.card-copy {
  margin-top: 8px;
}

.card-meta {
.card-copy p {
  margin: 0;
  line-height: 1.7;
}

.card-meta,
.subject-mini-grid {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.chip,
.module-mini-tag {
  background: rgba(255, 255, 255, 0.16);
}

.subject-progress {
  display: grid;
  gap: 10px;
  margin-top: 16px;
  margin-top: 18px;
}

.chip {
.progress-bar {
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
}

.progress-bar > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.42));
}

.subject-card-foot {
  margin-top: 12px;
}

.subject-card-foot strong {
  font-size: 1.4rem;
}

.placeholder-card {
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.03);
  text-align: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
}

.placeholder-card strong {
  display: block;
  margin-bottom: 6px;
}

.subject-view {
  display: grid;
  gap: 22px;
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.subject-hero {
  display: grid;
  gap: 16px;
  padding: 24px;
  border-radius: 26px;
  background: var(--panel);
  border: 1px solid var(--panel-border);
  padding: 26px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 100%),
    var(--panel);
}

.hero-topline,
.module-strip,
.module-card-top,
.workspace-head,
.score-row,
.question-head,
.statement-actions,
.question-footer,
.history-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
.subject-hero.history-theme {
  background:
    radial-gradient(circle at 85% 10%, rgba(255, 107, 107, 0.18), transparent 20%),
    radial-gradient(circle at 10% 25%, rgba(76, 141, 255, 0.2), transparent 24%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 100%),
    var(--panel);
}

.back-link {

.subject-copy {
  display: grid;
  gap: 10px;
}

.subject-copy h2 {
  font-size: clamp(1.8rem, 3.4vw, 3.15rem);
  line-height: 1.04;
}

.subject-hero-grid {
  align-items: stretch;
  gap: 18px;
}

.subject-hero-grid > * {
  flex: 1;
}

.hero-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 8px;
}

.hero-stat-card {
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-stat-card strong {
  display: block;
  margin-top: 8px;
  font-size: 1.3rem;
}

.hero-focus-card {
  padding: 18px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 34%),
    rgba(9, 15, 28, 0.46);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 14px;
  align-content: start;
}

.hero-focus-head {
  display: grid;
  gap: 8px;
}

.subject-copy h2 {
  font-size: clamp(1.7rem, 3vw, 2.8rem);
.hero-focus-head strong {
  font-size: 1.1rem;
}

.hero-focus-ring {
  width: 94px;
  height: 94px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at center, rgba(12, 21, 38, 0.95) 0 58%, transparent 59%),
    conic-gradient(var(--teal) var(--module-progress-angle, 0deg), rgba(255, 255, 255, 0.08) 0deg);
}

.hero-focus-ring strong {
  font-size: 1.35rem;
}

.hero-focus-meta {
  display: grid;
  gap: 10px;
}

.hero-focus-track {
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.hero-focus-track span {
  display: block;
  height: 100%;
  width: var(--module-progress-width, 0%);
  border-radius: inherit;
  background: linear-gradient(90deg, #4c8dff, #22c483);
}

.module-strip {
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
}

.module-tab {
  min-width: 180px;
  padding: 16px 18px;
  border-radius: 20px;
  padding: 18px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.module-tab:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.18);
}

.module-tab.active {
  box-shadow: var(--shadow-md);
  box-shadow: var(--shadow-sm);
}

.module-tab.module-mcq.active {
  background: var(--module-1);
  background: var(--mcq-card);
}

.module-tab.module-tf.active {
  background: var(--module-2);
  background: var(--tf-card);
}

.module-tab strong {
  display: block;
  margin-bottom: 4px;
  font-size: 1.05rem;
}

.module-tab span {
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.82);
}

.module-progress {
  height: 8px;
  margin: 14px 0 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  overflow: hidden;
}

.module-progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.48));
}

.workspace-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 22px;
}

.workspace-main {
  padding: 22px;
  background: var(--bg-elevated);
}

.workspace-side {

.workspace-side .panel {
  padding: 20px;
  background: rgba(15, 24, 42, 0.76);
}

.workspace-banner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  padding: 18px 20px;
  margin-bottom: 18px;
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(76, 141, 255, 0.16), rgba(34, 196, 131, 0.12)),
    rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.workspace-banner strong {
  display: block;
  margin-bottom: 6px;
}

.banner-shortcuts {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.shortcut-key {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.workspace-head {
  margin-bottom: 18px;
}

.page-tag {
  color: var(--accent);
  font-size: 0.88rem;
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.page-title {
  margin-top: 6px;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
}

.counter {
  color: var(--accent);
  font-weight: 800;

.question-shell {
  padding: 22px;
  background: var(--panel-strong);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 35%),
    var(--panel-strong);
}

.question-shell-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  margin-bottom: 16px;
}

.question-head {
  margin-bottom: 12px;
.question-headline {
  align-items: flex-start;
}

.question-chip-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.question-index {
  color: var(--accent);
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(76, 141, 255, 0.14);
  color: #bcd3ff;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
}

.question-state-chip {
  background: rgba(255, 255, 255, 0.06);
  color: var(--muted);
}

.question-title {
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.25;
  font-size: clamp(1.45rem, 2.3vw, 2.1rem);
  line-height: 1.18;
}

.question-subcopy {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.68;
}

.question-counter-card {
  min-width: 88px;
  padding: 14px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.question-copy {
  margin: 0 0 18px;
.question-counter-card strong {
  display: block;
  font-size: 1.45rem;
}

.question-counter-card span {
  color: var(--muted);
  line-height: 1.7;
  font-size: 0.9rem;
}

.option-list,
.statement-list {
.statement-list,
.meta-grid,
.score-grid {
  display: grid;
  gap: 12px;
}

.option-button {
  width: 100%;
  padding: 16px 18px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  cursor: pointer;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.option-button:hover {
  transform: translateX(2px);
  transform: translateX(3px);
  border-color: rgba(76, 141, 255, 0.45);
  box-shadow: var(--shadow-sm);
}

.option-button.selected {
  border-color: rgba(76, 141, 255, 0.75);
  background: rgba(76, 141, 255, 0.12);
  border-color: rgba(76, 141, 255, 0.76);
  background: rgba(76, 141, 255, 0.11);
}

.option-button.correct {
  border-color: rgba(34, 196, 131, 0.65);
  background: rgba(34, 196, 131, 0.14);
  border-color: rgba(34, 196, 131, 0.62);
  background: rgba(34, 196, 131, 0.12);
}

.option-button.incorrect {
  border-color: rgba(255, 107, 107, 0.62);
  background: rgba(255, 107, 107, 0.12);
  border-color: rgba(255, 107, 107, 0.56);
  background: rgba(255, 107, 107, 0.11);
}

.option-line {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: start;
}

.statement-key {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  font-weight: 800;
}

.option-copy {
  display: grid;
  gap: 6px;
}

.option-copy strong {
  font-size: 0.94rem;
  color: #cfd9ee;
}

.option-copy span {
  line-height: 1.65;
}

.option-marker {
  align-self: center;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.statement-row {
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
}

.statement-row.correct {
  border-color: rgba(34, 196, 131, 0.42);
}

.statement-row.incorrect {
  border-color: rgba(255, 107, 107, 0.42);
}

.statement-main {
  display: grid;
  gap: 14px;
}

.statement-head {
  align-items: flex-start;
}

.statement-line {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
}

.statement-status {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
}

.statement-text {
  margin: 0;
  line-height: 1.7;

.statement-toggle {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-wrap: wrap;
}

.toggle-button,
.nav-button,
.primary-button,
.secondary-button,
.ghost-button {
  padding: 12px 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}

.toggle-button {
  min-width: 92px;
  padding: 11px 14px;
  min-width: 98px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  cursor: pointer;
  transition: border-color 0.18s ease, background-color 0.18s ease, color 0.18s ease;
}

.toggle-button.selected {
  color: var(--text);
  border-color: rgba(76, 141, 255, 0.75);
  border-color: rgba(76, 141, 255, 0.72);
  background: rgba(76, 141, 255, 0.14);
}

.toggle-button.correct {
  color: #d9ffef;
  color: #dcfff0;
  border-color: rgba(34, 196, 131, 0.65);
  background: rgba(34, 196, 131, 0.16);
}
  color: #ffdede;
  border-color: rgba(255, 107, 107, 0.62);
  background: rgba(255, 107, 107, 0.14);
}

.statement-row.correct {
  border-color: rgba(34, 196, 131, 0.4);
}

.statement-row.incorrect {
  border-color: rgba(255, 107, 107, 0.4);
}

.review-note {
  margin: 0;
  padding: 12px 14px;
  border-radius: 14px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  line-height: 1.65;
  border: 1px solid rgba(255, 255, 255, 0.06);
  line-height: 1.68;
}

.question-footer {
}

.nav-button,
.primary-button,
.secondary-button,
.ghost-button {
  padding: 12px 16px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.18s ease, opacity 0.18s ease;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.primary-button {
  background: linear-gradient(135deg, #4c8dff, #22c483);
  color: #071321;
  font-weight: 800;
}

.ghost-button {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.12);
}

.nav-button:hover,
.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover {
.ghost-button:hover,
.toggle-button:hover {
  transform: translateY(-1px);
}

.primary-button:disabled,
.secondary-button:disabled,
.ghost-button:disabled {
  opacity: 0.45;
  opacity: 0.42;
  cursor: not-allowed;
  transform: none;
}

.nav-button {
  background: rgba(255, 255, 255, 0.05);
.panel-title {
  display: grid;
  gap: 4px;
}

.primary-button {
  background: linear-gradient(135deg, #4c8dff, #2ad08a);
  color: #081221;
  font-weight: 800;
.panel-title strong {
  font-size: 1rem;
}

.secondary-button {
  background: rgba(255, 255, 255, 0.08);
}

.ghost-button {
  background: transparent;
  border: 1px solid var(--line);
.panel-title span {
  color: var(--muted);
  font-size: 0.86rem;
}

.progress-card,
}

.progress-ring {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  width: 132px;
  height: 132px;
  margin: 2px auto 0;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at center, var(--panel) 0 57%, transparent 58%),
    radial-gradient(circle at center, rgba(18, 28, 48, 0.96) 0 58%, transparent 59%),
    conic-gradient(var(--accent) var(--progress-angle, 0deg), rgba(255, 255, 255, 0.08) 0deg);
}

.progress-copy {
  display: grid;
  gap: 6px;
  gap: 4px;
  justify-items: center;
  text-align: center;
}

.progress-copy strong {
  font-size: 1.8rem;
  font-size: 1.7rem;
}

.meta-grid {
  display: grid;
  gap: 10px;
.progress-track {
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.progress-track span {
  display: block;
  height: 100%;
  width: var(--progress-width, 0%);
  border-radius: inherit;
  background: linear-gradient(90deg, #4c8dff, #22c483);
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 14px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.meta-row strong {
  font-size: 1rem;
}

.score-badge {
  display: inline-grid;
  place-items: center;
  width: 78px;
  height: 78px;
  border-radius: 22px;
  background: linear-gradient(145deg, #4c8dff, #22c483);
  color: #071321;
  font-size: 1.55rem;
  font-weight: 800;
  box-shadow: 0 16px 26px rgba(34, 196, 131, 0.16);
}

.score-copy strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1.08rem;
}

.legend-row {
  flex-wrap: wrap;
}

.history-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(52px, 1fr));
  gap: 10px;
}

.history-chip {
  min-height: 44px;
  border-radius: 12px;
  min-height: 48px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
}

.history-chip:hover {
  transform: translateY(-1px);
  border-color: rgba(76, 141, 255, 0.44);
}

.history-chip.current {
  border-color: rgba(76, 141, 255, 0.7);
  box-shadow: inset 0 0 0 1px rgba(76, 141, 255, 0.72);
  color: var(--text);
  box-shadow: inset 0 0 0 1px rgba(76, 141, 255, 0.65);
}

.history-chip.answered {
.history-chip.partial {
  color: #fff2cb;
  background: rgba(246, 178, 61, 0.12);
  border-color: rgba(246, 178, 61, 0.5);
  border-color: rgba(246, 178, 61, 0.44);
}

.history-chip.correct {
  color: #d8ffef;
  background: rgba(34, 196, 131, 0.15);
  border-color: rgba(34, 196, 131, 0.45);
  color: #ddfff0;
  background: rgba(34, 196, 131, 0.16);
  border-color: rgba(34, 196, 131, 0.46);
}

.history-chip.incorrect {
  color: #ffdede;
  background: rgba(255, 107, 107, 0.15);
  border-color: rgba(255, 107, 107, 0.45);
  background: rgba(255, 107, 107, 0.16);
  border-color: rgba(255, 107, 107, 0.46);
}

.history-chip.answer-mode {
  color: #fff0cf;
  background: rgba(246, 178, 61, 0.14);
  border-color: rgba(246, 178, 61, 0.45);
  border-color: rgba(246, 178, 61, 0.46);
}

.score-badge {
  display: inline-grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4c8dff, #2ad08a);
  color: #081221;
  font-size: 1.4rem;
  font-weight: 800;
.empty-box {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.score-copy strong {
  display: block;
  margin-bottom: 4px;
.fade-up {
  animation: fadeUp 0.55s ease both;
}

.empty-box {
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1040px) {
@media (max-width: 1100px) {
  .hero-panel,
  .subject-hero-grid,
  .workspace-grid {
    grid-template-columns: 1fr;
  }

  .hero-stat-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .workspace-side {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .workspace-side,
  .hero-stat-grid {
    grid-template-columns: 1fr;
  }

  .module-strip {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .app-shell {
    width: min(100% - 20px, 1220px);
    width: min(100% - 20px, 1280px);
    padding-top: 18px;
  }

  .app-topbar,
  .hero-panel,
  .subject-card,
  .placeholder-card,
  .subject-hero,
  .workspace-main,
  .workspace-side .panel,
  .question-shell,
  .statement-row {
    border-radius: 22px;
  }

  .app-topbar,
  .workspace-banner,
  .hero-panel,
  .subject-card,
  .placeholder-card,
  .subject-hero,
  .workspace-main,
  .workspace-side .panel,
  .question-shell,
  .statement-row {
    padding-left: 18px;
    padding-right: 18px;
  }

  .app-topbar,
  .subject-card-top,
  .subject-card-foot,
  .hero-topline,
  .module-strip,
  .subject-hero-grid,
  .module-tab-top,
  .workspace-head,
  .question-head,
  .question-shell-top,
  .question-headline,
  .question-footer,
  .history-head,
  .score-row,
  .history-head {
  .legend-row,
  .hero-focus-foot,
  .workspace-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .workspace-side {
    grid-template-columns: 1fr;
  .option-line {
    grid-template-columns: auto 1fr;
  }

  .option-marker {
    grid-column: 2;
  }

  .question-counter-card {
    width: 100%;
  }

  .question-footer,
  .action-group {
  .action-group,
  .banner-shortcuts {
    width: 100%;
  }

  .secondary-button,
  .ghost-button {
    width: 100%;
  }

  .statement-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
